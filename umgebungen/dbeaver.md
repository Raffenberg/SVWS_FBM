# DBeaver und Access gezielt einsetzen

## Ziel

Du kannst Daten einer Untersuchungskopie sichten und erkennst, wann eine andere Reparaturmethode oder Unterstützung nötig ist. DBeaver ist ein Datenbankwerkzeug, kein Ersatz für die fachliche Bewertung eines Datenbestands.

## 1. Die Werkzeuge unterscheiden

| Werkzeug | Aufgabe | Grenze |
| --- | --- | --- |
| DBeaver mit MariaDB-Verbindung | Importiertes SVWS-Schema, Tabellen und Abfrageergebnisse untersuchen | Eine direkte SQL-Änderung kann fachliche Beziehungen verletzen |
| DBeaver mit MS-Access-Treiber | Unterstützte, lesbare Access-Dateien untersuchen | Kein Ersatz für die Access-Funktion „Komprimieren und Reparieren“ |
| Microsoft Access, falls vorhanden | MDB öffnen und geeignete Reparaturfunktionen an einer Kopie versuchen | Beschädigungen sind nicht immer vollständig reparierbar |
| SchILD2-Migrationstool | Unterstützte Überführung zwischen SchILD2-Beständen | Kein universeller Reparaturautomat |

DBeaver führt **MS Access (UCanAccess)** als Datenbanktreiber; siehe [unterstützte Datenbanken](https://dbeaver.com/docs/dbeaver/Enterprise-Edition/). Die konkrete Datei muss vom gewählten Treiber lesbar sein. Dateiformat, Passwortschutz und Schäden können den Zugriff verhindern.

## 2. Eine MariaDB-Verbindung anlegen

1. Installiere DBeaver aus der [offiziellen Quelle](https://dbeaver.io/download/).
2. Wähle **Neue Verbindung** und **MariaDB**.
3. Trage Host, tatsächlichen MariaDB-Port und den für die Analyse bereitgestellten Benutzer ein. Der HTTPS-Port des SVWS-Servers ist hier nicht der Datenbankport.
4. Prüfe die Verbindung und wähle ausdrücklich das Untersuchungsschema.
5. Öffne zunächst eine Tabelle und vergleiche den erkennbaren Datenstand mit dem Fall.

Die [erhaltene Bildfolge](/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/DBeaver/) zeigt diese Schritte. Verwende die tatsächlichen Zugangsdaten; Screenshotwerte sind Beispiele.

## 3. Zunächst nur sichten

Beginne mit lesenden Abfragen und dokumentiere Beobachtungen. Prüfe vor jeder Ausführung Verbindung und Schema. Ein eingeschränkter Analysebenutzer ist für reine Sichtung geeigneter als ein pauschaler Root-Zugang.

Übernimm keine fremden UPDATE- oder DELETE-Befehle mit konkreten IDs. Das [SQL-Fallbeispiel](/Fachberatung_Anleitungen/DBReparatur/) beschreibt einen bestimmten Datenbestand, keine allgemeine Reparaturregel. Änderungen benötigen eine begründete Hypothese, Sicherung und Erfolgskontrolle an der Kopie.

## 4. Eine Access-Datei untersuchen

Wähle eine neue Verbindung mit **MS Access (UCanAccess)** und die Untersuchungskopie. Folge den Hinweisen des Treibers. Prüfe zunächst, ob die Datei geöffnet und der erwartete Bestand gelesen werden kann.

Wenn die Datei beschädigt ist, wird aus einem fehlgeschlagenen Verbindungsversuch keine Reparatur. Access bietet dafür die eigene Funktion [Komprimieren und Reparieren](https://support.microsoft.com/en-us/access/compact-and-repair-a-database). Sichere vorher die Datei und prüfe das Ergebnis; auch eine teilweise Reparatur kann Datenverluste hinterlassen.

## Ohne Microsoft Access

Die übrige Testumgebung bleibt nutzbar. Halte Dateiformat, Fehlermeldung und bereits versuchte Schritte fest und vereinbare über die [Landesfachberatung](/beratung/anfrage-vorbereiten), wer eine gegebenenfalls notwendige MDB-Reparatur übernehmen kann. Installiere dafür keine unbekannten Reparaturprogramme.

## Ergebnis

Du weißt, mit welchem Werkzeug Du welchen Bestand untersucht hast und welche Befunde gesichert sind. Für den vollständigen Fallablauf nutze [Datenbankfall untersuchen](./lokale-analyse.md).
