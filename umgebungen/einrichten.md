# PC oder Laptop als Testplatz einrichten

## Ziel und Voraussetzungen

Du richtest einen persönlichen Testplatz mit SVWS-Server, SchILD-NRW 3 und den benötigten Werkzeugen ein. **Die eigentliche Installation erfolgt nach der aktuellen Wiki- bzw. Herstelleranleitung.** Hier findest Du Reihenfolge, Entscheidungen und Kontrollen.

Prüfe zuerst die [Auswahl der Umgebung](./auswahl.md). Benötigt werden geeignete Hardware, die erforderlichen Rechte und ein dokumentierter Installationsstand. Verwende für die erste Probe öffentliche Testdaten.

## 1. Die Originalanleitungen bereitlegen

| Aufgabe | Maßgebliche Anleitung |
| --- | --- |
| SVWS-Server unter Windows installieren | [SVWS-Dokumentation: Windows-Installer](https://doku.svws-nrw.de/deployment/Windows-Installer/) |
| Windows-Einrichtung im bisherigen Wiki nachvollziehen | [Installation von SVWS-Server und SchILD-NRW 3](https://schulverwaltungsinfos.nrw.de/svws/wiki/index.php?title=Installation_SVWS-Server_und_SchILD-NRW_3) |
| SchILD-NRW 3 verbinden | [SVWS-Dokumentation: SchILD-NRW 3](https://doku.svws-nrw.de/deployment/Schild-NRW3/) |
| Linux oder Docker bewusst auswählen | [Offizielle Installationsmethoden](https://doku.svws-nrw.de/deployment/) |
| Programme, Releases und weitere Wikis finden | [Wichtige Links](/wissen/links) |

Die neue Adresse der SchILD3-Dokumentation wird in der Linksammlung ergänzt, sobald sie verlässlich erreichbar ist. Eine erwartete Adresse ersetzt keine verfügbare Anleitung.

## 2. Den Server bereitstellen

Folge der ausgewählten Originalanleitung. Halte tatsächliche Programmversionen, Verzeichnisse, HTTPS-Adresse, Datenbankadresse und Ports fest. Bewahre Zugangsdaten getrennt von allgemeinen Schulungsunterlagen auf.

Bei vorhandener MariaDB, Java-Umgebung oder einem zweiten SVWS-Dienst lies die Installationsoptionen besonders sorgfältig. Der Windows-Installer kann bestehende Komponenten erkennen und aktualisieren; eine parallele Installation ist deshalb kein unbedenklicher Standardklick.

**Kontrolle:** Der Serverdienst läuft, die richtige HTTPS-Adresse ist erreichbar und die Anmeldung am AdminClient gelingt. Ein offenes Browserfenster allein belegt noch keinen korrekten Datenbestand.

## 3. Einen ersten Testbestand importieren

Folge [Testdaten einspielen](./testdaten.md). Verwende zunächst ein eigenes Schema und einen bekannten öffentlichen Bestand. Notiere dessen Namen und Datenstand.

## 4. SchILD-NRW 3 anbinden

Installiere SchILD-NRW 3 nach der Originalanleitung und erstelle mit **SchILD_DBConfig** die passende Verbindungsdatei. Für SchILD-NRW 3 ist derzeit neben HTTPS auch direkter MariaDB-Zugriff erforderlich; übernimm die tatsächlich konfigurierten Adressen und Ports.

**Kontrolle:** SchILD-NRW 3 öffnet genau Dein Testschema. Vergleiche Schulform und Schuljahresabschnitt mit dem Browser.

## 5. Die benötigten Werkzeuge ergänzen

Richte [SchILD2 und das Migrationstool](./schild2.md) sowie [DBeaver](./dbeaver.md) ein. Ergänze SVWS-Tools nur für konkrete Aufgaben; die [Tool-Anleitung](/Fachberatung_Anleitungen/Test-_und_Schulungsserver/SVWS-Tools/) unterscheidet statische Apps und zusätzliche Dienste.

## 6. Den Ausgangsstand abnehmen

Teste eine Anmeldung, eine typische Bearbeitung und eine Wiederherstellung in einem entbehrlichen Testschema. Dokumentiere die Verbindungen. Mit [Wartung und Rücksetzen](./wartung.md) hältst Du den Platz anschließend einsatzbereit.

Die erhaltenen [Installationsbilder](/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/) können bei der Orientierung helfen. Sie sind kein Nachweis, dass jeder frühere Dialog mit Deinem Release übereinstimmt.
