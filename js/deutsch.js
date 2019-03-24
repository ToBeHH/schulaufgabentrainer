function writeWord(word, withLine) {
	var result = "";
	if (word[0] == "d") {
		result += "\\";
	}
    var nextItalic = false;
    for(var j=0; j < word.length; j++) {
	    if (nextItalic) {
			result += "<i>" + word[j] + "</i>";
			nextItalic = false;
		} else {
			result += word[j];
		}
		if (word[j] == "A" || word[j] == "F" || word[j] == "H" || word[j] == "b" || word[j] == "o" || word[j] == "ö" || word[j] == "r" || word[j] == "v" || word[j] == "w" || word[j] == "x") {
			nextItalic = true;
		}
		if ((word[j] == "b" || word[j] == "o" || word[j] == "r" || word[j] == "v" || word[j] == "w" || word[j] == "x") && 
			((j+1) == word.length || word[j+1] == "u" || word[j+1] == "v" || word[j+1] == "w" || word[j+1] == "y")) {
				result += "<i>~</i>";
		}
		if ((word[j] == "s" || word[j] == "ß") && 
			((j+1) != word.length && word[j+1] != " ")) {
				result += "§";
		}
		if (withLine) {
			result += "<i>_</i>";
		}
	}
	return result;
}

var wortschatz_klasse3 = new Array(
new Array("der", "Abend"),
new Array("die", "Ampel"),
new Array("die", "Angel"),
new Array("der", "Apfel"),
new Array("der", "Arm"),
new Array("der", "Arzt"),
new Array("der", "Ast"),
new Array("die", "Aufgabe"),
new Array("das", "Auge"),
new Array("das", "Auto"),
new Array("das", "Baby"),
new Array("der", "Bäcker"),
new Array("die", "Bahn"),
new Array("der", "Ball"),
new Array("die", "Bank"),
new Array("der", "Bauch"),
new Array("der", "Baum"),
new Array("das", "Bein"),
new Array("das", "Beispiel"),
new Array("der", "Beruf"),
new Array("das", "Bett"),
new Array("die", "Biene"),
new Array("das", "Bild"),
new Array("die", "Birne"),
new Array("das", "Blatt"),
new Array("die", "Blume"),
new Array("die", "Blüte"),
new Array("der", "Boden"),
new Array("das", "Boot"),
new Array("der", "Brand"),
new Array("der", "Brief"),
new Array("die", "Brille"),
new Array("das", "Brot"),
new Array("die", "Brücke"),
new Array("der", "Bruder"),
new Array("das", "Buch"),
new Array("die", "Burg"),
new Array("der", "Busch"),
new Array("die", "Butter"),
new Array("der", "Clown"),
new Array("der", "Computer"),
new Array("die", "Decke"),
new Array("der", "Donner"),
new Array("der", "Draht"),
new Array("die", "Düne"),
new Array("der", "Durst"),
new Array("die", "Ecke"),
new Array("das", "Ei"),
new Array("die", "Eimer"),
new Array("das", "Ende"),
new Array("die", "Ente"),
new Array("das", "Ergebnis"),
new Array("die", "Erwartung"),
new Array("die", "Erzählung"),
new Array("die", "Eule"),
new Array("das", "Fahrrad"),
new Array("die", "Familie"),
new Array("das", "Feld"),
new Array("das", "Fenster"),
new Array("die", "Ferien"),
new Array("der", "Fernseher"),
new Array("das", "Feuer"),
new Array("der", "Finger"),
new Array("die", "Flasche"),
new Array("der", "Fleiß"),
new Array("die", "Flügel"),
new Array("das", "Flugzeug"),
new Array("der", "Fluss"),
new Array("die", "Flüssigkeit"),
new Array("die", "Flut"),
new Array("die", "Frau"),
new Array("die", "Freiheit"),
new Array("der", "Fremde"),
new Array("die", "Freude"),
new Array("die", "Freundin"),
new Array("der", "Frieden"),
new Array("die", "Frucht"),
new Array("das", "Frühstück"),
new Array("der", "Fuchs"),
new Array("der", "Füller"),
new Array("der", "Fuß"),
new Array("der", "Fußball"),
new Array("der", "Fußgänger"),
new Array("die", "Gabel"),
new Array("der", "Garten"),
new Array("das", "Gebäude"),
new Array("das", "Gebiet"),
new Array("die", "Geburt"),
new Array("die", "Gefahr"),
new Array("das", "Geheimnis"),
new Array("das", "Geld"),
new Array("das", "Gemüse"),
new Array("das", "Geschäft"),
new Array("das", "Gesetz"),
new Array("das", "Gesicht"),
new Array("das", "Gewitter"),
new Array("das", "Glück"),
new Array("das", "Gras"),
new Array("das", "Haar"),
new Array("der", "Hafen"),
new Array("der", "Hals"),
new Array("die", "Hand"),
new Array("der", "Hase"),
new Array("der", "Haufen"),
new Array("das", "Haus"),
new Array("die", "Haut"),
new Array("das", "Heft"),
new Array("die", "Heide"),
new Array("die", "Heizung"),
new Array("der", "Held"),
new Array("das", "Hemd"),
new Array("die", "Hexe"),
new Array("der", "Himmel"),
new Array("die", "Hitze"),
new Array("die", "Höhe"),
new Array("die", "Höhle"),
new Array("die", "Hose"),
new Array("der", "Hund"),
new Array("der", "Hunger"),
new Array("der", "Igel"),
new Array("die", "Information"),
new Array("das", "Jahr"),
new Array("der", "Junge"),
new Array("der", "Käfer"),
new Array("der", "Käfig"),
new Array("der", "Kalender"),
new Array("die", "Kälte"),
new Array("der", "Kamm"),
new Array("die", "Katze"),
new Array("der", "Kiefer"),
new Array("das", "Kind"),
new Array("die", "Klasse"),
new Array("das", "Kleid"),
new Array("der", "Koch"),
new Array("der", "Kompass"),
new Array("der", "König"),
new Array("der", "Kopf"),
new Array("der", "Körper"),
new Array("die", "Kraft"),
new Array("das", "Kraut"),
new Array("das", "Kreuz"),
new Array("die", "Kreuzung"),
new Array("der", "Krieg"),
new Array("die", "Küche"),
new Array("die", "Kuh"),
new Array("der", "Kuss"),
new Array("das", "Land"),
new Array("der", "Lärm"),
new Array("das", "Laub"),
new Array("der", "Lehrer"),
new Array("die", "Lehrerin"),
new Array("das", "Lexikon"),
new Array("das", "Licht"),
new Array("das", "Lied"),
new Array("der", "Liter"),
new Array("der", "Löffel"),
new Array("der", "Lohn"),
new Array("das", "Mädchen"),
new Array("der", "Magnet"),
new Array("der", "Mann"),
new Array("die", "Mannschaft"),
new Array("der", "Mantel"),
new Array("die", "Maschine"),
new Array("das", "Maß"),
new Array("die", "Maus"),
new Array("das", "Meer"),
new Array("das", "Messer"),
new Array("die", "Miete"),
new Array("die", "Milch"),
new Array("die", "Mitte"),
new Array("der", "Monat"),
new Array("das", "Moor"),
new Array("das", "Moos"),
new Array("die", "Möwe"),
new Array("die", "Mühle"),
new Array("der", "Mund"),
new Array("die", "Mutter"),
new Array("der", "Nachmittag"),
new Array("die", "Nacht"),
new Array("der", "Name"),
new Array("die", "Nase"),
new Array("die", "Note"),
new Array("die", "Nudel"),
new Array("die", "Nummer"),
new Array("die", "Nuss"),
new Array("das", "Obst"),
new Array("das", "Ohr"),
new Array("die", "Oma"),
new Array("der", "Onkel"),
new Array("der", "Opa"),
new Array("das", "Päckchen"),
new Array("das", "Paket"),
new Array("der", "Papa"),
new Array("das", "Papier"),
new Array("der", "Pass"),
new Array("das", "Pferd"),
new Array("der", "Pilz"),
new Array("die", "Pizza"),
new Array("der", "Platz"),
new Array("das", "Programm"),
new Array("die", "Puppe"),
new Array("das", "Quadrat"),
new Array("die", "Qual"),
new Array("die", "Quelle"),
new Array("das", "Radio"),
new Array("der", "Rasen"),
new Array("das", "Rätsel"),
new Array("der", "Raum"),
new Array("die", "Raupe"),
new Array("das", "Reh"),
new Array("der", "Regen"),
new Array("der", "Geruch"),
new Array("der", "Rock"),
new Array("der", "Rücken"),
new Array("die", "Ruhe"),
new Array("der", "Saft"),
new Array("das", "Salz"),
new Array("die", "Sammlung"),
new Array("der", "Sand"),
new Array("der", "Satz"),
new Array("das", "Schaf"),
new Array("der", "Schall"),
new Array("der", "Schatten"),
new Array("die", "Schere"),
new Array("das", "Schiff"),
new Array("das", "Schloss"),
new Array("der", "Schlüssel"),
new Array("der", "Schmetterling"),
new Array("der", "Schmutz"),
new Array("der", "Schnee"),
new Array("der", "Schreck"),
new Array("der", "Schuh"),
new Array("die", "Schule"),
new Array("der", "Schwamm"),
new Array("die", "Schwester"),
new Array("die", "Schwierigkeit"),
new Array("der", "See"),
new Array("das", "Segel"),
new Array("die", "Seife"),
new Array("die", "Sekunde"),
new Array("der", "Sessel"),
new Array("die", "Skizze"),
new Array("der", "Sohn"),
new Array("der", "Sommer"),
new Array("die", "Sonne"),
new Array("der", "Spaß"),
new Array("der", "Spaziergang"),
new Array("der", "Spiegel"),
new Array("die", "Spitze"),
new Array("der", "Sport"),
new Array("die", "Stadt"),
new Array("der", "Stamm"),
new Array("die", "Stange"),
new Array("die", "Steuer"),
new Array("der", "Stiel"),
new Array("der", "Stift"),
new Array("die", "Stirn"),
new Array("der", "Stoff"),
new Array("der", "Strand"),
new Array("die", "Straße"),
new Array("der", "Strauch"),
new Array("der", "Strauß"),
new Array("der", "Streit"),
new Array("der", "Strom"),
new Array("das", "Stück"),
new Array("der", "Stuhl"),
new Array("die", "Stunde"),
new Array("der", "Sturm"),
new Array("der", "Tag"),
new Array("die", "Tante"),
new Array("die", "Tasche"),
new Array("die", "Tasse"),
new Array("die", "Taste"),
new Array("das", "Taxi"),
new Array("die", "Technik"),
new Array("der", "Teddy"),
new Array("der", "Tee"),
new Array("das", "Telefon"),
new Array("der", "Teller"),
new Array("die", "Temperatur"),
new Array("der", "Text"),
new Array("das", "Theater"),
new Array("das", "Thermometer"),
new Array("die", "Tiefe"),
new Array("das", "Tier"),
new Array("der", "Tiger"),
new Array("die", "Tochter"),
new Array("die", "Träne"),
new Array("der", "Traum"),
new Array("die", "Uhr"),
new Array("der", "Urlaub"),
new Array("die", "Vase"),
new Array("der", "Vater"),
new Array("der", "Verein"),
new Array("der", "Verkehr"),
new Array("die", "Verschmutzung"),
new Array("der", "Vogel"),
new Array("die", "Vorfahrt"),
new Array("das", "Gewächs"),
new Array("der", "Wald"),
new Array("der", "Wecker"),
new Array("der", "Weg"),
new Array("das", "Wetter"),
new Array("die", "Wiese"),
new Array("der", "Wind"),
new Array("der", "Winter"),
new Array("das", "Wissen"),
new Array("die", "Woche"),
new Array("der", "Wolf"),
new Array("die", "Wolke"),
new Array("das", "Wort"),
new Array("der", "Wunsch"),
new Array("die", "Wurzel"),
new Array("die", "Zahl"),
new Array("der", "Zahn"),
new Array("die", "Zehe"),
new Array("das", "Zeichen"),
new Array("die", "Zeitung"),
new Array("das", "Zeugnis"),
new Array("die", "Ziege"),
new Array("das", "Ziel"),
new Array("das", "Zimmer"),
new Array("die", "Zwiebel"));