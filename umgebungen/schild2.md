# SchILD-NRW 2 und das Migrationstool vorbereiten

## Ziel

Du kannst einen SchILD2-Ausgangsbestand öffnen, seinen Zustand prüfen und die Vorbereitung einer Migration von der eigentlichen Übernahme in den SVWS-Server unterscheiden.

## 1. Den SchILD2-Arbeitsplatz vorbereiten

Beschaffe SchILD-NRW 2 und ergänzende Werkzeuge über die offiziellen [Downloads und Wikis](/wissen/links). Richte eine eigene Testinstallation und eine Kopie des Ausgangsbestands ein. Dokumentiere Programmversion und Verbindung, damit Du nicht versehentlich den Schulbestand öffnest.

Öffne zunächst eine bekannte Testdatenbank. Prüfe Schulnummer, Schulform, Abschnitt und den benötigten Arbeitsablauf. Für einen konkreten Fall folgt die [geschützte Übernahme](../Datenbanken/problemdatenbanken.md).

## 2. Zwei verschiedene Migrationsaufgaben unterscheiden

| Aufgabe | Werkzeug und Ergebnis |
| --- | --- |
| Einen SchILD2-Bestand in einen anderen SchILD2-Zielbestand überführen | SchILD2-Migrationstool; Ergebnis bleibt ein SchILD2-Datenbestand |
| Eine SchILD2-Datenbank in das SVWS-Datenmodell übernehmen | SVWS-AdminClient; Ergebnis ist ein SVWS-Schema in MariaDB |
| Ein vorhandenes SVWS-Backup wiederherstellen | SQLite-Import im AdminClient; keine erneute SchILD2-Migration |

Das SchILD2-Migrationstool findest Du unter den [offiziellen SchILD-NRW-Tools](https://www.svws.nrw.de/schild-nrw-2/tools-module). Lies die zum Paket gehörende Dokumentation. Das Konfigurationsprogramm selbst überträgt keine Daten. Das SchILD2-Werkzeugpaket kann mit **SchILD_DBConfig** Quell- und Zielkonfigurationen für das Migrationstool erzeugen; bei SchILD-NRW 3 wird damit die Arbeitsplatzverbindung eingerichtet. Beachte jeweils das Werkzeugpaket und Dateiformat. Die [SchILD2-Wiki-Anleitung](https://wiki.svws.nrw.de/mediawiki/index.php?title=Schild-NRW-Daten_in_eine_andere_Datenbank_%C3%BCbertragen_(migrieren)) beschreibt den dokumentierten Ablauf.

## 3. Einen Migrationsversuch vorbereiten

1. Sichere den unveränderten Ausgangsbestand und das Fehlerprotokoll.
2. Bestimme Quell- und Zielverbindung ausdrücklich. Ein Zielbestand darf für diese Probe überschrieben werden; eine produktive Datenbank ist kein Testziel.
3. Lege nach der Paketdokumentation die Quell- und Zielkonfiguration an, prüfe beide Verbindungen und starte das Migrationstool mit diesen Konfigurationen. Führe den Versuch an einer Kopie aus.
4. Öffne das Ergebnis in SchILD-NRW 2 und prüfe die betroffenen Daten und Funktionen.
5. Erst danach folgt gegebenenfalls ein neuer Versuch mit dem [SVWS-AdminClient](https://doku.svws-nrw.de/adminclient/anleitungen/kurzanleitung_migration.html).

Eine Überführung in einen neuen SchILD2-Bestand kann helfen, ist aber weder eine garantierte Reparatur noch für jede Fehlermeldung erforderlich.

## 4. MDB lässt sich nicht öffnen?

Unterscheide falsche Verbindung, nicht unterstütztes Dateiformat, Passwortproblem und beschädigte Datei. [DBeaver und Access](./dbeaver.md) erklärt die Grenzen. Wenn Access für eine notwendige Reparatur fehlt, dokumentiere den Befund und beziehe die [Landesfachberatung](/beratung/anfrage-vorbereiten) ein.

## Erfolgskontrolle

Du kannst Quelle, Werkzeug und Ziel benennen und den Ausgangsbestand unverändert erneut untersuchen. Der weitere Ablauf steht unter [Migrationsprobleme eingrenzen](/beratung/migration).
