# Testdatenbanken für die Sekundarstufe I

## Einsatzbereich

Für Tests in der Sekundarstufe I steht im offiziellen Testdaten-Repository ein Gesamtschulbestand für 2026/2027 zur Verfügung. Er enthält laut Quellenbeschreibung Prognosdaten. **Die Kurszuordnungen sind dort ausdrücklich noch als zu prüfen vermerkt.**

Ein Gesamtschulbestand bildet nicht automatisch die Besonderheiten jeder Sek-I-Schulform ab. Wähle für schulformspezifische Fehler einen passenden Ausgangsbestand und prüfe die konkrete Aufgabe.

## Datenbanken herunterladen

| Datei / Sammlung | Zweck |
| --- | --- |
| [TestDB_GE.sqlite](https://github.com/SVWS-NRW/SVWS-TestSqlites/raw/a934d91af3178f32998b0475d712e5295f071244/TestDB_GE.sqlite) | Offizieller Standard-Testbestand für Sekundarstufe I / Gesamtschule |
| [Gesamtschulsammlung im Portal](/Datenbanken/Gesamtschule/) | Bereits vorhandener weiterer Datenstand mit eigener Beschreibung |

## Eigenschaften und Einsatzmöglichkeiten

Nutze den Bestand zum Kennenlernen und für abgegrenzte Funktionstests. Prüfe nach dem [Import](/umgebungen/testdaten) Schulform, Abschnitt, Kursbezüge und den tatsächlich benötigten Ablauf. Für eine Schulung ist eine eigene [modulbezogene Aufgabenprobe](/Datenbanken/schulungen/sekundarstufe-i) erforderlich.

Für andere Sek-I-Schulformen bietet der offizielle [MDB-Fundus](https://github.com/SVWS-NRW/SVWS-TestMDBs) weitere Ausgangsdaten. Eine solche Quelle muss mit dem dafür vorgesehenen Verfahren in ein eigenes SVWS-Schema migriert werden; sie ist keine SQLite-Sicherung.

## Herkunft und Hinweise

Quelle ist der [offizielle README-Stand](https://github.com/SVWS-NRW/SVWS-TestSqlites/blob/a934d91af3178f32998b0475d712e5295f071244/README.md). Dort sind die Dateien als vollständig anonymisierte Standard-Testdaten beschrieben. Der Download ist auf denselben Quellstand festgelegt. Die Schuljahresangabe ist kein Nachweis der Versionsverträglichkeit mit jedem Serverrelease.
