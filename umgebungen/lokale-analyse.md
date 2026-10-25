# Einen Datenbankfall an einer Kopie untersuchen

<span id="lokale-test-analyseumgebung"></span>
<span id="testdaten-oder-konkreter-beratungsfall"></span>
<span id="der-ablauf-im-uberblick"></span>
<span id="_1-den-personlichen-arbeitsplatz-einrichten"></span>
<span id="_2-eine-sicherung-in-ein-eigenes-schema-importieren"></span>
<span id="_3-mit-dbeaver-prufen-und-den-analysezugang-vorbereiten"></span>
<span id="_4-eine-passende-verbindungsdatei-erstellen"></span>
<span id="_5-fehler-nachstellen-und-ergebnis-festhalten"></span>
<span id="fernunterstutzung-erganzend-einsetzen"></span>

## Ziel und Voraussetzungen

Du kannst den beschriebenen Fehler reproduzieren und Deine Beobachtungen nachvollziehbar weitergeben. Benötigt werden ein [vorbereiteter Testplatz](/beratung/arbeitsplatz), ein klarer Auftrag und die [abgestimmt übertragene Sicherung](/Datenbanken/problemdatenbanken).

Dieser Artikel gehört zum Arbeitsablauf der Fachberatung. Die technischen Einrichtungsverfahren liegen zentral unter [Datenbanken & Installation](/technik/).

## 1. Fall und Ausgangsdatei dokumentieren

Notiere Fallkennung, Schulform, Datenstand, Programmversionen und die Handlung, die den Fehler auslöst. Bewahre die empfangene Datei unverändert und geschützt auf. Arbeitskopie und Original müssen unterscheidbar bleiben.

## 2. In ein eigenes Schema importieren

Spiele das SQLite-Backup nach [Testdaten einspielen](/umgebungen/testdaten) in ein ausdrücklich gewähltes Untersuchungsschema ein. SQLite ist hier die Sicherungsdatei; SVWS und SchILD-NRW 3 arbeiten anschließend mit dem importierten MariaDB-Schema.

Prüfe Meldung, Datenstand und Schulzuordnung. Bei einem Importfehler wird zuerst dieser Vorgang eingegrenzt, bevor der ursprüngliche Anwendungsfehler untersucht wird.

## 3. Die richtige Verbindung herstellen

Öffne das Schema im SVWS-Client. Erstelle bei Bedarf mit SchILD_DBConfig eine separate, eindeutig benannte Verbindung für SchILD-NRW 3. Vergleiche die angezeigten Daten mit dem erwarteten Fall.

Falls ein Zugang innerhalb der Untersuchungskopie fehlt, vereinbare das zur Version passende Vorgehen mit der zuständigen Unterstützung. Nutze keine ungeprüften Kennwortänderungen per SQL.

## 4. Den Fehler nachstellen

Führe genau die übermittelten Schritte aus. Notiere erwartetes und tatsächliches Ergebnis. Gelingt die Reproduktion nicht, vergleiche zunächst Versionen, Abschnitt, Berechtigungen und beteiligte Zusatztools mit der Schule.

Bei einem SchILD2-Ausgangsproblem prüfst Du außerdem die [Migrationswege](/umgebungen/schild2). Ein SVWS-Backup allein ersetzt nicht den benötigten MDB-Ausgangsbestand.

## 5. Gezielt analysieren

Sichte bei Bedarf mit [DBeaver](/umgebungen/dbeaver) die betroffenen Tabellen und Protokolle. Trenne Beobachtung, vermutete Ursache und vorgeschlagene Änderung. Reproduziere den Ausgangszustand, bevor Du eine weitere Hypothese prüfst.

Ein Befund aus einem einzelnen Schema ist noch kein allgemein gültiger Reparaturbefehl. Prüfe insbesondere die Grenzen der [SQL-Fallbeispiele](/Fachberatung_Anleitungen/DBReparatur/).

## 6. Ergebnis gemeinsam prüfen

Teste die ursprüngliche Aufgabe erneut und vereinbare mit der Schule den weiteren Umgang. Eine lokale Korrektur wird nicht automatisch als komplette Datenbank in den Schulbetrieb zurückgespielt.

Dokumentiere den Fall nach [Ergebnis und Weitergabe](/beratung/anfrage-vorbereiten). Nach Abschluss gehören auch Arbeitskopien, Exporte und Freigaben in die vereinbarte Aufräum- und Löschregelung.
