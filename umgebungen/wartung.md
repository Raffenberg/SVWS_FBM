# Die Testumgebung einsatzbereit halten

## Ziel

Dein Testplatz funktioniert auch beim nächsten Supportfall. Halte einen bekannten Ausgangsstand bereit und ändere nicht gleichzeitig alle Komponenten.

## Vor einem Fall

Prüfe Serverstart, Browseranmeldung, SchILD-Verbindung und freien Speicher. Notiere Deine Versionen. Stimmt der Fall nicht mit Deinem Stand überein, kläre zunächst, ob Du den passenden Stand getrennt bereitstellen musst.

## Vor einem Update

1. Lies die Änderungshinweise und prüfe die benötigten Versionen von Server, SchILD und Tools.
2. Sichere Daten und Konfiguration mit dem zum Aufbau passenden Verfahren.
3. Prüfe das Update möglichst an einer Kopie und führe eine typische Aufgabe aus.
4. Halte fest, wie Du zum vorherigen Programm- **und** Datenstand zurückkommst.

Eine neue Programmdatei zusammen mit einem alten Datenverzeichnis ist nicht automatisch ein funktionierender Rückweg. Ein Schema aus einer neueren Version lässt sich nicht pauschal mit jeder älteren Version verwenden.

## Neustart und Rücksetzen

Ein Neustart macht vorhandene Dienste wieder erreichbar. Er entfernt keinen Übungsfortschritt. Zum Rücksetzen stellst Du bewusst einen bekannten Datenstand wieder her; [Testdaten einspielen](./testdaten.md) führt durch Auswahl und Kontrolle.

Bei einer VM ist ein Snapshot ein schneller Rücksprungpunkt. Eine unabhängige Sicherung bleibt nötig, wenn Rechner oder Datenträger ausfallen. Bei gemeinsam genutzter Infrastruktur betrifft eine Serverwartung gegebenenfalls mehrere Schemata.

## Nach dem Fall

Dokumentiere Änderungen und Ergebnis. Beende nicht mehr benötigte Freigaben und behandle Fallkopien und Exporte nach der getroffenen Vereinbarung. Bewahre den freigegebenen öffentlichen Testbestand getrennt davon auf.

Für einen ganzen Schulungsraum nutze [Wartung und Rücksetzen der Schulungsumgebung](/Fachberatung_Anleitungen/Test-_und_Schulungsserver/Moderatoren_Schulungsserver/Wartung).
