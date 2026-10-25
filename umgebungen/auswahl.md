# Die passende Testumgebung wählen

## Ziel

Du entscheidest, wo die Serverdienste laufen und wo Du SchILD-NRW 2 und 3 bedienst. Eine VM ist eine Möglichkeit, keine Voraussetzung für Fachberatung.

| Ausgangslage | Passender Weg | Vorher klären |
| --- | --- | --- |
| Eigener geeigneter Windows-PC oder Laptop | Lokale Installation für die persönliche Analyse | Administrationsrechte, Systemvoraussetzungen, vorhandene Dienste und freie Ports |
| Vorhandener betreuter Server | Abgestimmter Testbereich oder separate Testinstanz; Programme auf dem Arbeitsplatz | Zuständigkeit, getrennte Zugänge, Versionen und Rücksetzweg |
| Leistungsfähiger Rechner und Bedarf an wiederholbaren Zuständen | Vorbereitete VM; Arbeitsplatzprogramme passend zum Gast bzw. Host | RAM, Speicher, CPU-Architektur, Virtualisierung und Netzverbindung |
| Fremder oder stark eingeschränkter Arbeitsplatz | Betreuten Testplatz vereinbaren | Zugangsrechte und zulässige Ablage von Falldaten |

## 1. Den tatsächlichen Bedarf festhalten

Brauchst Du nur Browserfunktionen, zusätzlich SchILD-NRW 3 oder auch Vergleiche mit SchILD-NRW 2? Eine Debian-Server-VM enthält keine Windows-Anwendungen. Auf einem Windows-Host können die Arbeitsplatzprogramme laufen, während der Gast die Serverdienste bereitstellt.

Notiere Betriebssystem, freie Ressourcen und die Programme, die bereits installiert sind. Verbindliche Anforderungen stehen bei der gewählten [Installationsmethode](./einrichten.md).

## 2. Eine bestehende Installation einordnen

Ein zweites Schema trennt Datenbestände, aber nicht Serverversion und Wartung. Ein Update des gemeinsam verwendeten Servers kann alle Schemata betreffen. Für Tests mit anderen Versionen oder unsicheren Wiederherstellungswegen ist eine getrennte Instanz geeigneter.

Installiere einen zweiten Server nicht einfach mit denselben Diensten, Verzeichnissen und Ports neben den produktiven Bestand. Lass die Trennung mit der verantwortlichen Administration festlegen. Reparaturversuche beginnen an einer Kopie.

## 3. Einen eigenen Aufbau wählen

Für gelegentliche Installationen ist ein dokumentierter Standardweg wertvoller als viele Varianten. Nutze für Deinen persönlichen Windows-Testplatz die aktuelle Originalanleitung. Wenn eine VM bereits sicher betreut werden kann, bietet ein geprüftes Ausgangsabbild einen gut wiederholbaren Stand.

Docker und Proxmox sind vertiefende Wege. Die [Schulungsumgebungen](/Fachberatung_Anleitungen/Test-_und_Schulungsserver/) erklären deren Rollen; sie müssen nicht zusätzlich beherrscht werden, um einen gewöhnlichen Beratungsfall zu bearbeiten.

## Ergebnis

Du kannst sagen: **Hier läuft der Server, hier liegen die Testdaten, hier startet SchILD und so stelle ich den Ausgangsstand wieder her.** Mit dieser Entscheidung folgt [PC oder Laptop einrichten](./einrichten.md).
