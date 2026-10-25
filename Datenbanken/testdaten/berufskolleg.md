# Testdatenbank für das Berufskolleg

## Einsatzbereich

Dieser öffentliche Testbestand ermöglicht erste Untersuchungen am Berufskolleg. Die Quelle beschreibt ihn für 2026/2027 und nennt **die Prüfung der Schuljahreszuordnungen ausdrücklich als offene Aufgabe**. Verwende ihn deshalb nicht ungeprüft als bereits fachlich freigegebenen Kursbestand.

## Datenbanken herunterladen

| Datei | Zweck |
| --- | --- |
| [TestDB_BK.sqlite](https://github.com/SVWS-NRW/SVWS-TestSqlites/raw/a934d91af3178f32998b0475d712e5295f071244/TestDB_BK.sqlite) | Offizieller anonymisierter Standard-Testbestand für das Berufskolleg |

## Eigenschaften und Einsatzmöglichkeiten

1. Importiere die Datei in ein eigenes [Testschema](/umgebungen/testdaten).
2. Prüfe Schulform, Schuljahr, Abschnitt und die für Deinen Fall benötigten Daten.
3. Führe die konkrete Handlung aus und notiere Abweichungen vom erwarteten Ausgangsstand.
4. Für das [BK-Schulungsmodul](/schulungsmodule/BK/) prüfe zusätzlich jede gewählte Aufgabe; die Datei ist nicht allein durch ihren Namen als Schulungsstand freigegeben.

Die [modulbezogene Zuordnung](/Datenbanken/schulungen/berufskolleg) dokumentiert die Auswahl für eine Veranstaltung. Behalte die empfangene Originaldatei und Deine daraus abgeleiteten Teststände auseinander.

## Herkunft und Hinweise

Die Datei stammt aus [SVWS-TestSqlites](https://github.com/SVWS-NRW/SVWS-TestSqlites/blob/a934d91af3178f32998b0475d712e5295f071244/README.md). Der dortige README-Stand beschreibt Anonymisierung und bekannte Einschränkungen. Datei und Quellenbeschreibung sind auf denselben Commit festgelegt; eine neue Version wird erst nach einer erneuten Prüfung ausgewählt.
