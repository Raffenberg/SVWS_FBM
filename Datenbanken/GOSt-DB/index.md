# Sekundarstufe II - bis 2026 {#gost-schulungsdatenbanken}

## Einsatzbereich

Die bisherige Sammlung enthält Übungsstände von der Vorbereitung der EF-Planung bis zur Klausurplanung.

## Datenbanken herunterladen

| Datei | Kurzbeschreibung |
| --- | --- |
| [GOSt_1-3_Datenbanken.zip](https://github.com/Raffenberg/SVWS_FBM/raw/refs/heads/dev/Datenbanken/GOSt-DB/GOSt_1-3_Datenbanken.zip) | Datenbanken 1 bis 3 für EF-Planung, Laufbahnen und Blockung. |
| [GOSt_DB-4-KlausurplanungEF2.zip](https://github.com/Raffenberg/SVWS_FBM/raw/refs/heads/dev/Datenbanken/GOSt-DB/GOSt_DB-4-KlausurplanungEF2.zip) | Datenbank 4 für die Klausurplanung in EF2. |
| [GOSt_DB_1-3_SVWS-Fobi_2025.zip](https://github.com/Raffenberg/SVWS_FBM/raw/refs/heads/dev/Datenbanken/GOSt-DB/GOSt_DB_1-3_SVWS-Fobi_2025.zip) | Sammlung der Datenbanken 1 bis 3 für die SVWS-Fortbildung 2025. |

## Eigenschaften und Einsatzmöglichkeiten {#eigenschaften}

### GOSt_DB-1_VorbereitungEFPlanung
#### Eigenschaften
+ Stand 2. HJ  
+ Keine Noteneinträge  
+ keine Abiturjahrgänge angelegt
+ Fächer noch ohne SekII-Sortierung
+ ggf. Fächer Oberstufe ergänzen (z.B. PA)  oder entfernen (z.B: I0)
+ keine Neuaufnahmen
+ keine Fachwahlen in 10 (neue EF)
+ fehlende Einstellungen der Laufbahnplanung (Kombinationen, BL, Texte)
#### geeignet für
+ Facheinstellungen
+ Anlage Abiturjahrgänge
+ Einrichtung Laufbahnplanungen (Kombinationen, BL, Texte)
+ Erstellung Laufbahnplanungen (Fachwahlen)


### GOSt_DB-2_Laufbahnen10EF-zumBlocken
#### Eigenschaften
+ Noten 2. HJ
+ Fächer SekII sortiert
+ Fachwahlen 10 (neue EF) und EF (neue Q1) eingespielt
+ Fachwahlen noch teilweise fehlerhaft
+ keine Blockungen
#### geeignet für
+ Korrekturen Laufbahnen
+ Einstellungen Blockungsbedingungen
+ Berechnungen Blockungen
+ Versetzung in nächstes Schuljahr
+ ggf. Übertragung fertiger Blockungen
  

### GOSt_DB-3_Blockungen10EFmitFehlern
#### Eigenschaften
+ wie DB-2 aber mit fertigen Blockungen
+ teilweise mehrere Ergebnisse
+ NV-Fehler
#### geeignet für 
+ Korrekturen und Neuberechnungen von Blockungen (Ableiten)
+ Versetzung in nächstes Schuljahr
+ Übertragen von Blockungen
+ Änderungen in Fachwahlen nach Übertrag/Synchronisationen
+ Einrichtung Stundenplan
  

### GOSt_DB-4-KlausurplanungEF2
#### Eigenschaften
+ wie DB-3
+ Stundenplan eingerichtet (Zeitraster, Räume, Pausenzeiten)
+ aktuelle EF2 hat Leistungsdaten
+ aktuelle EF2 hat Stundenplan eingerichtet
#### geeignet für
+ Klausurplanung

## Herkunft und Hinweise

Die bisherige Sammlung findest Du auch im [ursprünglichen Ordner auf GitHub](https://github.com/SVWS-NRW/Schulungsunterlagen/tree/master/Datenbanken/GOSt-DB).

Die Beschreibungen ordnen die vorhandenen Übungsstände ein. Prüfe Softwareversion und Import vor einer Schulung anhand des [Datenbanksteckbriefs](../steckbrief.md).

## Dateien für den Import von Laufbahndaten {#laufbahndaten-import}

Diese vorhandenen Beispieldateien gehören zur Aufgabenreihe [Import von SchILD2-Laufbahndaten](/schulungsmodule/ImportSchILD2Laufbahndaten/). Die Dateinamen beziehen sich teilweise auf 2023/2024; sie sind kein aktueller Schuljahresstand.

| Datei | Einsatz |
| --- | --- |
| [Import_Lupo_Kurs_Beispieldateien.zip](https://github.com/Raffenberg/SVWS_FBM/raw/refs/heads/dev/Datenbanken/GOSt-DB/Import_LUPO_KURS/Import_Lupo_Kurs_Beispieldateien.zip) | Zusammengehöriges Beispielpaket; Inhalt vor der Schulung mit den Aufgaben abgleichen |
| [1_fobi_vor_lupImport.sqlite](https://github.com/Raffenberg/SVWS_FBM/raw/refs/heads/dev/Datenbanken/GOSt-DB/Import_LUPO_KURS/1_fobi_vor_lupImport.sqlite) | Ausgangsdatei vor dem LuPO-Import |
| [2_fobi_vor_lupImport_nachEKorrektur.sqlite](https://github.com/Raffenberg/SVWS_FBM/raw/refs/heads/dev/Datenbanken/GOSt-DB/Import_LUPO_KURS/2_fobi_vor_lupImport_nachEKorrektur.sqlite) | Vorhandener alternativer Zwischenstand nach E-Korrektur |
| [Gym_23_24_2.mdb](https://github.com/Raffenberg/SVWS_FBM/raw/refs/heads/dev/Datenbanken/GOSt-DB/Import_LUPO_KURS/Gym_23_24_2.mdb) | SchILD2-Ausgangsbestand für die zugehörigen Beispiele |

Die zugehörigen LuPO-, Blockungs- und Kursdateien liegen im [gemeinsamen Beispielordner](https://github.com/Raffenberg/SVWS_FBM/tree/dev/Datenbanken/GOSt-DB/Import_LUPO_KURS). Verwende die Dateien als zusammengehörigen Bestand; prüfe den Import mit Deinen Versionen.
