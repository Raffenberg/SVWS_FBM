# Migrationsprobleme eingrenzen

## Ziel

Du erkennst, ob das Problem im SchILD2-Ausgangsbestand, bei der Übernahme oder erst im SVWS-Ergebnis liegt. Arbeite mit unverändert aufbewahrter Quelle und einer getrennten Untersuchungskopie.

## 1. Den Vorgang benennen

| Ausgangslage | Was untersucht wird |
| --- | --- |
| MDB lässt sich schon in SchILD-NRW 2 nicht öffnen | Verbindung, Format, Passwort oder Dateischaden |
| SchILD2-Migrationstool scheitert | Überführung zwischen SchILD2-Beständen |
| SVWS-AdminClient meldet einen Migrationsfehler | Übernahme in das SVWS-Datenmodell |
| SQLite-Sicherung lässt sich nicht wiederherstellen | Import und Versionsverträglichkeit eines SVWS-Backups |
| Migration endet, Daten oder Funktionen fallen danach auf | Fachlicher Vergleich von Quelle und Ergebnis |

Notiere Programmversionen, Schulform, Schritt und genaue Meldung. Sichere das relevante Protokoll; [Logdateien](/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/Log_Files/) bieten ergänzende Orientierung.

## 2. Den SchILD2-Ausgangsbestand prüfen

Kann die Kopie in SchILD-NRW 2 geöffnet werden? Ist der betroffene Arbeitsablauf dort möglich? Prüfe die [Vorbereitung von SchILD2 und Migrationstool](/umgebungen/schild2).

Die Überführung in einen neuen SchILD2-Access-Bestand kann bei bestimmten Ausgangsproblemen helfen. Sie ist nicht bereits die Migration zum SVWS-Server und garantiert keine Reparatur jedes Datenfelds.

## 3. Bei Dateischäden den passenden Weg wählen

[DBeaver und Access](/umgebungen/dbeaver) trennt Datenzugriff von Reparatur. Wenn Access für eine erforderliche Reparatur fehlt, dokumentiere den Fall und vereinbare Unterstützung. Die frühere [Fortbildungsseite zur MDB-Reparatur](/Fachberatung_Fortbildungen/ReparaturMDB/) enthält Themen, aber keine vollständige Reparaturanleitung.

## 4. Den SVWS-Versuch nachvollziehen

Nutze die aktuelle [AdminClient-Anleitung](https://doku.svws-nrw.de/adminclient/anleitungen/kurzanleitung_migration.html). Bestimme das entbehrliche Zielschema ausdrücklich und prüfe das Protokoll. Erzeuge nicht nebenbei mehrere unbekannte Zwischenstände.

## 5. Auffälligkeiten fachlich prüfen

Vergleiche den betroffenen Fall mit der Quelle und dem erwarteten Ergebnis. Für Abschnittsprobleme gibt es den [versionsbezogenen Hinweis](/Tipp_der_Woche/SchILD-Tipp_der_Woche/StartwarnungSchuljahresabschnitt) und ein [konkretes SQL-Fallbeispiel](/Fachberatung_Anleitungen/DBReparatur/). Dessen IDs sind keine allgemeine Korrekturvorschrift.

## 6. Prüfen oder weitergeben

Wiederhole die ursprüngliche Aufgabe. Dokumentiere Quelle, gegebenenfalls SchILD2-Zwischenstand, SVWS-Ergebnis und alle Änderungen getrennt. Bleiben Bezüge oder notwendige Korrekturen unklar, nutze [Ergebnis und Weitergabe](./anfrage-vorbereiten.md).
