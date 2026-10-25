# Redaktioneller Artikelstandard – SVWS-Fachberatung und Moderation

Dieser Standard orientiert sich an der SchILD-NRW-3-Dokumentation. **Die Leseransprache in der FBM-Dokumentation bleibt durchgehend beim Du.** Bestehende fachliche Aussagen, Links, Artikelpfade, Bilddateien, Downloads, Aufgaben und Konfigurationen dürfen durch eine reine Stilangleichung nicht verändert werden.

## Inhalt und Gliederung

- Jeder Artikel beantwortet möglichst eine klar abgegrenzte Frage oder erläutert eine zusammengehörige Aufgabe.
- Ein aussagekräftiger Titel erster Ebene (`#`) je Seite; weitere Überschriften ohne Hierarchiesprünge. Keine Rubriken ohne belegten Inhalt.
- Eine Arbeitsanleitung beginnt mit dem Ziel, nennt nötige Voraussetzungen und beschreibt die Schritte nummeriert. Ergänze bei Bedarf Kontrolle des Ergebnisses und typische Probleme.
- Nachschlageartikel erklären einen Begriff, ein Bedienelement, eine Schnittstelle oder einen technischen Zusammenhang präzise. Referenztabellen stehen möglichst nahe an der Erklärung.
- Schulungsmodule dürfen Lernziele, Arbeitsaufträge, Lösungen und Materialien in der für die Moderation geeigneten Reihenfolge enthalten. Sie müssen **nicht** in das Schema einer Endanwenderanleitung gepresst werden.
- Übersichtsseiten erschließen verwandte Beiträge durch kurze, aufgabenorientierte Links. Den Inhalt der verlinkten Artikel nicht mehrfach kopieren.
- Bestehende Fachinformationen einschließlich Ausnahmen, Versionseinschränkungen, Code, SQL, Screenshots, Tabellen und Downloadverweise erhalten. Technische Aktualität getrennt vom Bearbeitungsdatum beurteilen.

## Sprache

- Konsequent **Du, Dir, Dein** und entsprechende gebeugte Formen; im Fließtext klare, aktive Sätze. Eine unverändert zitierte Bedienoberfläche ist davon ausgenommen.
- Programm-, Feld- und Schaltflächennamen wie angezeigt schreiben und **fett** hervorheben, beispielsweise **Datenbank auswählen**.
- Menüpfade einheitlich: **Verwaltung → Einstellungen → Benutzer**.
- Dateinamen, Pfade, Befehle, Parameter und Programmcode in `Inline-Code`, längere Beispiele in sprachmarkierten Codeblöcken.
- Begriffe möglichst konsistent: „SchILD-NRW 3“, „SVWS-Server“, „SVWS-Client“, „MariaDB“, „Fachberatung“ und „Moderation“.
- Kurze Menüpunkte und aussagekräftige Artikeltitel statt historischer Orientierungszusätze in Klammern.
- Links nicht „hier“ nennen, sondern nach ihrem Ziel, etwa „[Migration prüfen](…)“.

## Hinweisboxen

Verwende native VitePress-Container, die in der FBM-Doku wie in SchILD gestaltet werden. Titel und Texte bleiben auf Deutsch.

```md
::: info Hinweis
Zusätzliche Einordnung.
:::

::: tip Tipp
Erleichterung für den Arbeitsablauf.
:::

::: warning Wichtig
Wichtige Voraussetzung oder erkennbare Fehlerfolge.
:::

::: danger Achtung
Warnung vor einer gravierenden Fehlbedienung.
:::

::: tip Richtig
So ist das gewünschte Ergebnis erkennbar.
:::

::: danger Falsch
Dieses Vorgehen vermeiden.
:::

::: example Beispiel
Ein konkretes Anwendungsbeispiel.
:::

::: details Details
Zusätzliche Informationen zum Aufklappen.
:::
```

Für Beispiele `::: example` verwenden; der Standardtitel ist „Beispiel“. Eigene Titel sind möglich. Boxen sparsam und an der relevanten Handlung einsetzen. Keine individuellen Bild-Icons oder Inline-Farben pro Artikel hinzufügen. Wesentliche Informationen gehören auch in den normalen Text.

## Bilder, Tabellen, Medien

- Bestehende Bilder und Bildunterschriften erhalten; neue Bilder mit beschreibenden Alternativtexten versehen.
- Bildunterschriften erklären, was auf dem Bild zu erkennen ist, und nicht nur den Dateinamen. Bilder nicht über ihre natürliche Breite hinaus vergrößern.
- Tabellen mit kurzen Spaltenüberschriften erstellen; längere Inhalte müssen innerhalb des Seitenlayouts bleiben, breite Tabellen dürfen horizontal scrollbar sein.
- Keine Informationen durch Bildzuschnitt, Bildschirmfotos ohne notwendigen Kontext oder gekürzte Tabellenwerte verlieren.
- Interne Links relativ bzw. mit VitePress-Pfaden setzen; gültige externe Quellen und Downloads erhalten.

## Prüfung und Freigabe

- Bei rein gestalterischen Änderungen prüfen, dass fachliche Inhalte und bisherige Pfade unverändert geblieben sind.
- Nach Änderungen an den Markdown-Containern und am Layout mindestens `npm ci` und `npm run docs:build` ausführen sowie Hinweisboxen, lange Tabellen und mobile Darstellung im Browser prüfen.
- Änderungen an Anleitungen mit Code, Datenbanken oder Versionshinweisen brauchen zusätzlich eine fachliche Sichtung.
- Freigaben erfolgen über einen Pull Request gegen `dev`. Die SchILD-NRW-3-Dokumentation wird nicht mitgeändert.

## Später gesondert bearbeiten

- ESLint und die Codequalitätsvorgaben der **Inits**: separat abstimmen, nicht im Zuge der Artikelformatierung verändern.
- PDF-Ausgabe und druckgerechte Gestaltung: später als gemeinsames Thema beider Dokumentationen betrachten; vorhandene FBM-Funktionen vorerst unverändert lassen.

## Navigation und Zuständigkeit

- Hauptnavigation in dieser Reihenfolge: Neu im Team, Fachberatung, Moderation, Datenbanken & Installation, Fortbildung, Wissen & Links.
- Historische Artikeladressen bleiben erhalten. Die längste passende Route bestimmt den verantwortlichen Bereich.
- Datenbanken & Installation beginnt mit Übersicht und zeigt danach drei unabhängig aufklappbare Sektionen: Datenbanken, Testumgebung, Schulungsumgebung. Die Überschriften führen zur jeweiligen Übersicht. Weitere Bereiche folgt der Hauptnavigation.
- Datenbanken enthält genau Testdatenbanken, Schulungsdatenbanken und Problemdatenbanken. Schulformen und Module sind Kapitel mit Downloadtabellen in den beiden Sammelartikeln, keine eigenen Menüebenen. Frühere Einzeladressen leiten zum passenden Kapitel weiter.
- Die übrigen Bereiche verwenden eine gemeinsame Bereichsüberschrift und darunter Themen/Artikel. Neu im Team bleibt ohne Ausklappmarker geöffnet.
- Aktive Themenzweige werden beim Seitenaufruf geöffnet. Andere Zweige bleiben manuell bedienbar; kein gegenseitiges automatisches Zuklappen.
- Vorheriges/Nächstes folgt ausschließlich der eigenen Lesefolge. Unterthemen beginnen eine eigene Folge. Die Datenbank-Gesamtübersicht mischt keine Schulform- und Modulfolgen.
- Namen, Links und Kurzbeschreibungen der Übersichtstabellen kommen aus dem Menü. Module tragen dort die Eigenschaft module; so bleibt die Modulliste von den Moderationsabläufen getrennt.

## Inhaltliche Hauptorte

- Fachberatung: Arbeitsvorbereitung, Supportprozess, Telefon/Fernhilfe, Schulbesuch, Fallanalyse und Weitergabe.
- Moderation: Vorbereitung, Durchführung, Nachbereitung, Aufgaben und Materialpflege.
- Datenbanken & Installation: einmal gepflegte Dateisammlungen, Zuordnungen, persönlicher Testplatz und Schulungsraum. Problemdatenbanken enthält nur die Austauschanleitung, keine Schuldaten.
- Ausführliche SchILD-Bedienung und Unterschiede SchILD2/SchILD3 werden in der SchILD3-Dokumentation bzw. dem vorhandenen Wiki gepflegt. Server-/AdminClient-Anleitungen gehören zur SVWS-Dokumentation. Das Portal verlinkt sie gezielt.
- Eine vorhandene Beschreibung eines Ausgangsstands ist keine neue fachliche Prüfung aller Modulaufgaben. Fehlende Zuordnungen sichtbar lassen.

## Inhaltsarten und Prüfung

- Anleitung: Ziel, Voraussetzungen, Handlungsschritte, Erfolgskontrolle und Geltungsbereich.
- Fallbeispiel: konkrete Ausgangslage, Befund und begrenzte Übertragbarkeit. Keine pauschalen SQL-Reparaturen aus Beispiel-IDs ableiten.
- Veranstaltungsunterlagen: Datum, Agenda und Begleitmaterial; fehlende Demonstrationsschritte benennen. Keine Agenda als vollständige Anleitung verlinken.
- Historische Bildfolgen: Bilder erhalten und ihren früheren Stand erklären; aktuelle Originalanleitung als Einstieg anbieten.
- Fachliche Freigabe und technische CI getrennt benennen. Der Inhaltsstand der Fortbildungen zeigt offene Nachbereitung.
- Änderungen in einem eigenen Branch und PR gegen dev. Keine Änderungen am SchILD-Repo, an ESLint/Inits, Paketen oder PDF/Druck im Rahmen dieses Umbaus.
