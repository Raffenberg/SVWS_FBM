"""Read-only inventory of external targets in published portal articles."""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
from urllib.request import Request,urlopen
from urllib.error import HTTPError
from urllib.parse import urlsplit,quote,urldefrag
from threading import BoundedSemaphore
import ipaddress,json,re,time
root=Path(__file__).resolve().parents[1]
manifest=json.loads((root/"tests/portal-content.json").read_text(encoding="utf-8"))
paths=sorted(set(manifest["rewritten"]+manifest["newArticles"]+manifest["protectedArticles"]))
pattern=re.compile(r'\]\((https?://(?:[^()\n]|\([^()\n]*\))*)\)')
inventory={}
def add(url,path):
    url=url.rstrip(".,;")
    while url.count(")")>url.count("(") and url.endswith(")"):url=url[:-1]
    if any(c in url for c in ["$","{","}","*"]):return
    host=urlsplit(url).hostname or ""
    try:ipaddress.ip_address(host);return
    except ValueError:pass
    if host.lower() in {"localhost","server","serveradresse","url"}:return
    entry=inventory.setdefault(url,{"url":url,"sources":[]})
    if path not in entry["sources"]:entry["sources"].append(path)
for path in paths:
    source=(root/path).read_text(encoding="utf-8")
    for match in pattern.finditer(source):add(match.group(1),path)
    remaining=pattern.sub("",source)
    remaining=re.sub(r'(?ms)^[ \t]*[\x60~]{3,}[^\n]*\n.*?^[ \t]*[\x60~]{3,}[ \t]*$',"",remaining)
    for match in re.finditer(r'(?:^|[\s<])(https?://[^\s<>\x60"\x27]+)',remaining):add(match.group(1),path)
# HTTP prüft die Ressource; unterschiedliche Fragmentziele brauchen keinen neuen Abruf.
groups={}
for entry in inventory.values():
    resource=quote(urldefrag(entry["url"])[0],safe=":/?=&%()_,-")
    groups.setdefault(resource,[]).append(entry)
host_locks={urlsplit(url).hostname:BoundedSemaphore(2) for url in groups}
def probe(resource):
    entry={"url":resource}
    with host_locks[urlsplit(resource).hostname]:
        for attempt in range(2):
            try:
                request=Request(resource,headers={"User-Agent":"FBM-portal-link-check/1.0","Range":"bytes=0-1023"})
                with urlopen(request,timeout=15) as response:entry.update(status=response.status,final_url=response.url)
                break
            except HTTPError as error:
                entry.update(status=error.code)
                if error.code>=500 and attempt==0:time.sleep(1);continue
                break
            except Exception as error:
                entry.update(status="unverified",error=type(error).__name__,detail=str(getattr(error,"reason",error)))
                if attempt==0:time.sleep(1);continue
    return entry
with ThreadPoolExecutor(max_workers=8) as pool:
    for result in pool.map(probe,groups):
        for entry in groups[result["url"]]:entry.update({k:v for k,v in result.items() if k!="url"})
results=list(inventory.values())
out=root/"test-results";out.mkdir(exist_ok=True)
(out/"portal-links.json").write_text(json.dumps(results,ensure_ascii=False,indent=2),encoding="utf-8")
broken=[x for x in results if x["status"] in (400,404,410)]
unknown=[x for x in results if x["status"] not in (200,206) and x not in broken]
print(json.dumps({"articles":len(paths),"urls":len(results),"requests":len(groups),"broken":broken,"unverified_or_restricted":unknown},ensure_ascii=True))
raise SystemExit(bool(broken))
