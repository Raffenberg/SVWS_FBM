# Installation und Migration einer Schule begleiten

<span id="installation-hardware-updates"></span>
<span id="_1-die-ausgangslage-klaren"></span>
<span id="_2-die-hardware-zur-umgebung-passend-prufen"></span>
<span id="_3-installation-schritt-fur-schritt-zuordnen"></span>
<span id="_4-bei-updates-auf-zusammenpassende-versionen-achten"></span>
<span id="_5-einen-offenen-fall-weitergeben"></span>

## Ziel und Abgrenzung

Du hilfst der Schule, den passenden dokumentierten Weg zu finden und einen Fehler einzugrenzen. Eine Schulinstallation, Dein eigener Testplatz und ein Schulungsraum haben unterschiedliche Betriebsbedingungen.

Für Deinen Arbeitsplatz beginnt der Weg unter [Testumgebung](/umgebungen/). Für eine Veranstaltung nutze die [Schulungsumgebung](/Fachberatung_Anleitungen/Test-_und_Schulungsserver/).

## 1. Den Auftrag und die Umgebung klären

Erfasse betroffene Komponenten, Betriebssystem, vorhandene Datenhaltung, Versionen, Benutzerzahl und zuständige Administration. Ist es eine Neuinstallation, ein Update, eine Migration oder eine reine Arbeitsplatzanbindung?

IT-Dienstleister mit mehreren Schulen werden durch die Landesfachberatung betreut. Verweise solche Architektur- und Betriebsfragen an den [Supportweg](/neu-im-team/rollen).

## 2. Die Originalanleitung wählen

| Fragestellung | Maßgebliche Quelle |
| --- | --- |
| Installationsverfahren und Hardware einordnen | [SVWS-Installationsübersicht](https://doku.svws-nrw.de/deployment/) und [IT-Umgebungen](https://doku.svws-nrw.de/deployment/IT-Umgebungen/) |
| Windows-Installation | [Offizieller Windows-Installer](https://doku.svws-nrw.de/deployment/Windows-Installer/) |
| SchILD-NRW 3 und Verbindungsdatei | [Offizielle SchILD-Anbindung](https://doku.svws-nrw.de/deployment/Schild-NRW3/) |
| SchILD2-Daten in SVWS übernehmen | [AdminClient: Migration](https://doku.svws-nrw.de/adminclient/anleitungen/kurzanleitung_migration.html) |

Übertrage die Konfiguration eines einzelnen Schulungslaptops nicht ungeprüft auf den laufenden Schulbetrieb.

## 3. Den letzten funktionierenden Schritt bestimmen

Unterscheide Installerfehler, Dienststart, HTTPS-Verbindung, Datenbankzugriff und Anmeldung. Die [Systemübersicht](./systemueberblick.md) erklärt die Komponenten. Für SchILD-NRW 3 sind neben HTTPS derzeit auch direkte MariaDB-Verbindungen relevant.

## 4. Eine Migration gesondert prüfen

Halte Quelle, Werkzeug, Ziel und Protokoll fest. Die [Migrationsübersicht](./migration.md) unterscheidet SchILD2-Vorbereitung, MDB-Reparatur und Übernahme in ein SVWS-Schema. Ein SQLite-Import ist ein anderer Vorgang.

## 5. Erfolg oder offenen Befund festhalten

Prüfe mit der Schule die betroffene Aufgabe und den richtigen Datenstand. Reichen die vorhandenen Kenntnisse nicht aus, bereite die [Weitergabe](./anfrage-vorbereiten.md) vor. Produktive Installationen werden nicht durch ungeprüfte lokale Reparaturversuche ersetzt.
