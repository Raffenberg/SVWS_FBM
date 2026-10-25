# Testdaten einspielen und prüfen

## Ziel und Voraussetzungen

Du stellst einen bekannten Datenbestand in einem eigenen Schema bereit. Benötigt werden ein funktionierender Server, Zugang zum AdminClient und eine zur Aufgabe passende Datei.

## 1. Die Quelle auswählen

Wähle [Testdaten nach Schulform](/Datenbanken/testdaten/) oder [Schulungsdaten nach Modul](/Datenbanken/schulungen/). Für einen echten Fall gilt vorher der [geschützte Austausch](/Datenbanken/problemdatenbanken). Notiere Datei, Datenstand und Zweck.

## 2. Das Zielschema bestimmen

Gib dem Schema einen eindeutigen Namen und dokumentiere den zugehörigen Zugang. Halte Test-, Schulungs- und Falldaten auseinander. Für eine Wiederherstellungsprobe wählst Du ein entbehrliches Testschema.

## 3. Die richtige Funktion verwenden

| Datei / Ausgangslage | Funktion |
| --- | --- |
| SVWS-Sicherung im SQLite-Format | Backup wiederherstellen bzw. SQLite-Sicherung importieren |
| SchILD2-Ausgangsdatenbank | SchILD2-Datenbank migrieren |
| Bereits vorhandenes Schema | Vor einem erneuten Import klären, ob dessen Inhalt ersetzt werden darf |

Die konkreten Schaltflächen und Berechtigungen beschreibt die [offizielle AdminClient-Anleitung](https://doku.svws-nrw.de/adminclient/anleitungen/kurzanleitung_migration.html). Das Wiederherstellen in ein bestehendes Schema kann dessen Daten ersetzen.

## 4. Das Ergebnis kontrollieren

1. Prüfe erfolgreiche Meldung und gegebenenfalls Importprotokoll.
2. Öffne im SVWS-Client das gewünschte Schema.
3. Kontrolliere Schulform, Schuljahr, Abschnitt und einen für Deine Aufgabe wichtigen Datenbereich.
4. Öffne bei Bedarf SchILD-NRW 3 mit genau der passenden Verbindungsdatei.
5. Führe die konkrete Test- oder Schulungsaufgabe aus.

Ein erfolgreicher Import bestätigt noch nicht jede fachliche Eigenschaft. Notiere, was Du tatsächlich geprüft hast.

## 5. Den Rückweg erproben

Ändere in einem entbehrlichen Testschema einen erkennbaren Testwert. Stelle den vorgesehenen Ausgangsstand wieder her und kontrolliere, dass die Änderung zurückgenommen wurde. Danach dokumentierst Du den [Wartungs- und Rücksetzweg](./wartung.md).
