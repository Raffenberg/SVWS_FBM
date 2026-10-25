# Installation


::: info Ergänzende Installationsunterlagen
Diese erhaltene Bildfolge gehört zur zentralen Testumgebung. Dialoge und Versionsstände können abweichen. Für einen neuen Aufbau beginne mit [PC oder Laptop einrichten](/umgebungen/einrichten); die Originalanleitungen dort sind maßgeblich.
:::
In diesem Modul werden wir...
* den SVWS-Server installieren
* eine SchILD2-DB migrieren,
* das Zertifikat installieren
* SchILD-NRW3 installieren,
* eine weitere Datenbank migrieren,
* Dantenbanken sichern und wieder einlesen,
* wichtige Installations-Ordner und log-Dateien kennenlernen und
* die Datenbankstruktur mit DBeaver sichten.



## Installation vom SVWS-Server
Starte mit der Installation vom [Installation vom SVWS-Server](/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/Installation_SVWS/). Wähle hierbei die Option, direkt eine SchILD2 DB zu migrieren.


## Installation des Zertifikats
In Abhängigkeit der Browsereinstellung erscheint beim Öffnen der Datenbank über den Browser der Hinweis, dass die Seite nicht sicher ist. Um die Seite als sicher zu definieren, muss das Zertifikat installiert werden, welches bei der Installation vom SVWS-Server erstellt wurde. Entsprechende Aufgaben dazu findest Du [hier](/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/Installation_Zertifikat/).

&nbsp;

Nun kannst Du die Datenbank einmal im [Brower sichten](/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/SVWS_Client_Sichten/).

&nbsp;

Optional: Nach der Installation kannst Du bereits die Datenbank mit [DBeaver](/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/DBeaver/) sichten. Das ist für die weitere Installation nicht notwendig.


## Installation von SchILD3
Ich empfehle, bei der Erstinstallation zuerst den SVWS-Server zu installieren und anschließend erst SchILD3. Nach der Installation von SchILD3 öffnet sich automatisch ein weiteres Programm, um die Verbindungsdatei zur Datenbank zu erstellen (früher: URL-Datei). Dies ist nur dann sinnvoll, wenn bereits eine Datenbank migriert wurde.
Hier gehts zum Start der [SchILD3-Installation](/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/Installation_SchILD3/).

&nbsp;

Die beiden nachfolgenden Aufgabenblöcke zu Log-Files und DBeaver richtet sich an Interessierte, die die Migration und Datenbankstruktur etwas genauer unter die Lupe nehmen wollen. Den Log-Files kann man unter anderem entnehmen, ob bei der Migration fehlerhafte Einträge erkannt wurden und was mit diesen Fehleinträgen passiert ist. Beispielsweise wird bei Gymnasien der Eintrag zur Kursart WPI bei der Migration automatisch ersetzt durch WPIGY. Solche Anpassungen werden unter anderem in der log-Datei festgehalten. 

## Log-Files
Ich empfehle zumindest einen kurzen Blick darauf, wo man die entsprechenden log-Dateien findet:  
/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/Log_Files/

## DBeaver
Mit Hilfe von DBeaver kann die Datenbank geöffnet und die Datenbankstruktur sowie die einzelnen Tabellen gesichtet werden. Hier gibts es eine [Anleitung](/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/DBeaver/) dazu.


## Admin-Tool
Mit Hilfe des Tools kann man Datenbanken sichern und einlesen. Man kann weitere Datenbanken migrieren und bestehenden MariaDBs dublizieren:
/Fachberatung_Fortbildungen/Installation_Fachberatung_Moderation_offline/AdminTool/


