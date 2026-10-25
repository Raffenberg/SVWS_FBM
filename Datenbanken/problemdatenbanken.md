# Problemdatenbanken als SQLite sicher austauschen

## Ziel und Voraussetzungen

Du erhältst eine Sicherung, um einen konkreten Beratungsfall an einer Kopie nachzustellen. Hier werden **keine Schuldaten zum Download angeboten**. Vereinbare mit der Schule, welche Untersuchung benötigt wird, wer die Datei erhält und wie sie nach Abschluss behandelt wird.

Benötigt werden eine zuständige Ansprechperson der Schule, ein abgestimmter geschützter Übertragungsweg und eine getrennte Analyseumgebung. Echte Problemdaten gehören nicht in dieses öffentliche Portal, ein öffentliches GitHub-Issue oder eine ungeschützte Freigabe.

## 1. Den Auftrag und den Datenstand klären

Notiere eine Fallkennung, Schulform, Programmversionen, Zeitpunkt der Sicherung, Fehlermeldung und die Schritte zum Nachstellen. Personenbezogene Details gehören nur in den vereinbarten geschützten Fallkanal. Fordere keine vollständige Datenbank an, wenn eine Beschreibung oder gemeinsame Sichtung bereits genügt.

## 2. Eine SQLite-Sicherung erstellen lassen

Lass eine berechtigte Person die Sicherung über die für die eingesetzte Version dokumentierte Funktion erstellen. Der [SVWS-AdminClient](https://doku.svws-nrw.de/adminclient/apps/schemata/) beschreibt den SQLite-Export. Eine umbenannte MDB-Datei ist keine SQLite-Sicherung.

Die Originaldatenbank der Schule bleibt bestehen. Ein Datenbank- oder Benutzerpasswort ist nicht automatisch eine Verschlüsselung der exportierten Datei.

## 3. Die Datei geschützt übertragen

1. Verwende einen von den Beteiligten für diesen Zweck abgestimmten, geschützten Austauschweg.
2. Beschränke Zugriff und Freigabedauer auf die tatsächlich beteiligten Personen.
3. Falls eine verschlüsselte Datei vereinbart wird: Verschlüssele deren Inhalt mit einem geeigneten Verfahren; die Dateiendung ZIP allein sagt nichts über den Schutz aus.
4. Übermittle ein Entschlüsselungskennwort über einen getrennten vereinbarten Kanal.
5. Lass den Empfang bestätigen und beende die Freigabe, sobald sie nicht mehr benötigt wird.

Besteht Unklarheit über den erlaubten Weg, kläre ihn über die zuständige Stelle bzw. die [Kommunikationswege im Team](/neu-im-team/kommunikation). Diese Seite ersetzt keine örtlich geltende Regelung.

## 4. Eine getrennte Untersuchungskopie anlegen

Bewahre die empfangene Ausgangsdatei unverändert und zugriffsbeschränkt auf. Importiere die Arbeitskopie in ein eigenes, eindeutig bezeichnetes Schema der Testumgebung. Vermeide automatisch öffentlich synchronisierte Ablagen und einen gemeinsamen Schulungsserver als Fallablage.

Prüfe nach dem Import Fallkennung, Datenstand und die ausgewählte Verbindung. Verwende keine Root-Zugangsdaten als allgemeinen Übungszugang. Die weitere Untersuchung folgt unter [Datenbankfall bearbeiten](/umgebungen/lokale-analyse).

## 5. Den Fall abschließen

Dokumentiere Ergebnis und vereinbarte nächste Schritte. Gib keine bearbeitete Komplettdatenbank ungeprüft in den Schulbetrieb zurück. Eine Übernahme von Änderungen wird gesondert mit der Schule abgestimmt und fachlich geprüft.

Behandle Sicherungen, Arbeitskopien, Exporte, Freigaben und Zugangsdaten nach der vereinbarten Aufbewahrung und Löschung. Für die Weitergabe an die Landesfachberatung nutze den [vorbereiteten Supportweg](/beratung/anfrage-vorbereiten).
