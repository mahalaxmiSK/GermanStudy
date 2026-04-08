export interface ReadingText {
  id: string;
  theme: string;
  type: 'ad' | 'email' | 'notice' | 'article' | 'info-board';
  title: string;
  text: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export const readingTexts: ReadingText[] = [
  // ===== FAMILIE =====
  {
    id: 'rd-fam-001',
    theme: 'familie',
    type: 'email',
    title: 'Einladung zur Geburtstagsfeier',
    text: 'Liebe Maria,\nich möchte dich zu meiner Geburtstagsfeier einladen. Die Party ist am Samstag, den 15. März, um 18 Uhr bei mir zu Hause. Meine ganze Familie kommt: meine Eltern, mein Bruder Thomas und meine Schwester Lisa. Wir grillen im Garten und es gibt Kuchen. Kannst du kommen? Bring bitte einen Salat mit!\nViele Grüße,\nAnna',
    questions: [
      {
        id: 'rd-fam-001-q1',
        question: 'Wann ist die Party?',
        options: ['Am Freitag um 17 Uhr', 'Am Samstag um 18 Uhr', 'Am Sonntag um 19 Uhr'],
        correctAnswer: 1,
      },
      {
        id: 'rd-fam-001-q2',
        question: 'Wer kommt zur Party?',
        options: ['Nur Annas Freunde', 'Annas ganze Familie', 'Nur Annas Eltern'],
        correctAnswer: 1,
      },
      {
        id: 'rd-fam-001-q3',
        question: 'Was soll Maria mitbringen?',
        options: ['Einen Kuchen', 'Einen Salat', 'Getränke'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'rd-fam-002',
    theme: 'familie',
    type: 'article',
    title: 'Familientreffen am Wochenende',
    text: 'Am letzten Sonntag hat Familie Weber ein großes Familientreffen gemacht. Die Großeltern, Eltern, Kinder und Enkelkinder waren alle da. Insgesamt waren es 25 Personen. Sie haben zusammen im Park gegrillt und Fußball gespielt. Die Großmutter hat ihren berühmten Apfelkuchen gebacken. Die Kinder haben am meisten Spaß gehabt, weil sie den ganzen Tag draußen spielen konnten. Alle haben gesagt: „Das machen wir nächstes Jahr wieder!"',
    questions: [
      {
        id: 'rd-fam-002-q1',
        question: 'Wie viele Personen waren beim Familientreffen?',
        options: ['15 Personen', '25 Personen', '35 Personen'],
        correctAnswer: 1,
      },
      {
        id: 'rd-fam-002-q2',
        question: 'Was hat die Großmutter gemacht?',
        options: ['Sie hat Fußball gespielt', 'Sie hat einen Apfelkuchen gebacken', 'Sie hat im Park geschlafen'],
        correctAnswer: 1,
      },
      {
        id: 'rd-fam-002-q3',
        question: 'Wo hat die Familie gefeiert?',
        options: ['Zu Hause', 'Im Restaurant', 'Im Park'],
        correctAnswer: 2,
      },
    ],
  },

  // ===== WOHNEN =====
  {
    id: 'rd-woh-001',
    theme: 'wohnen',
    type: 'ad',
    title: 'Wohnung zu vermieten',
    text: 'Schöne 3-Zimmer-Wohnung in Berlin-Mitte zu vermieten. 75 m², 3. Stock mit Aufzug. Die Wohnung hat eine moderne Küche, ein großes Wohnzimmer und ein Schlafzimmer. Balkon mit Blick auf den Park. Miete: 850 € kalt + 200 € Nebenkosten. Ab 1. April frei. Haustiere erlaubt. Kontakt: Herr Müller, Tel. 030-12345678.',
    questions: [
      {
        id: 'rd-woh-001-q1',
        question: 'Wie groß ist die Wohnung?',
        options: ['65 m²', '75 m²', '85 m²'],
        correctAnswer: 1,
      },
      {
        id: 'rd-woh-001-q2',
        question: 'Wie viel kostet die Wohnung insgesamt?',
        options: ['850 €', '1050 €', '1200 €'],
        correctAnswer: 1,
      },
      {
        id: 'rd-woh-001-q3',
        question: 'Ab wann ist die Wohnung frei?',
        options: ['Ab 1. März', 'Ab 1. April', 'Ab 1. Mai'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'rd-woh-002',
    theme: 'wohnen',
    type: 'email',
    title: 'Probleme in der Wohnung',
    text: 'Sehr geehrter Herr Braun,\nich schreibe Ihnen, weil es ein Problem in meiner Wohnung gibt. Seit gestern funktioniert die Heizung im Schlafzimmer nicht mehr. Es ist sehr kalt in der Wohnung, nur noch 15 Grad. Außerdem tropft der Wasserhahn in der Küche schon seit einer Woche. Können Sie bitte so schnell wie möglich einen Handwerker schicken? Ich bin jeden Tag ab 16 Uhr zu Hause.\nMit freundlichen Grüßen,\nSarah Klein',
    questions: [
      {
        id: 'rd-woh-002-q1',
        question: 'Was ist das Hauptproblem?',
        options: ['Das Fenster ist kaputt', 'Die Heizung funktioniert nicht', 'Die Tür klemmt'],
        correctAnswer: 1,
      },
      {
        id: 'rd-woh-002-q2',
        question: 'Welches Problem gibt es noch?',
        options: ['Das Licht geht nicht', 'Der Aufzug ist kaputt', 'Der Wasserhahn tropft'],
        correctAnswer: 2,
      },
      {
        id: 'rd-woh-002-q3',
        question: 'Wann ist Frau Klein zu Hause?',
        options: ['Am Morgen', 'Ab 16 Uhr', 'Nur am Wochenende'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== EINKAUFEN =====
  {
    id: 'rd-ein-001',
    theme: 'einkaufen',
    type: 'notice',
    title: 'Sonderangebote im Supermarkt',
    text: 'SONDERANGEBOT diese Woche bei Markt-Frisch!\nFrische Äpfel nur 1,49 € pro Kilo. Bio-Milch 0,99 €. Vollkornbrot vom Bäcker 2,50 €. Deutsche Erdbeeren 2,99 € pro Schale. Butter 1,79 €.\nÖffnungszeiten: Mo–Sa 7:00–20:00 Uhr. Am Sonntag geschlossen.\nNeu: Jetzt auch online bestellen unter www.markt-frisch.de!',
    questions: [
      {
        id: 'rd-ein-001-q1',
        question: 'Wie viel kosten die Äpfel?',
        options: ['0,99 € pro Kilo', '1,49 € pro Kilo', '2,50 € pro Kilo'],
        correctAnswer: 1,
      },
      {
        id: 'rd-ein-001-q2',
        question: 'Wann hat der Supermarkt geöffnet?',
        options: ['Montag bis Sonntag', 'Montag bis Samstag', 'Nur am Wochenende'],
        correctAnswer: 1,
      },
      {
        id: 'rd-ein-001-q3',
        question: 'Was ist neu beim Supermarkt?',
        options: ['Eine neue Filiale', 'Man kann online bestellen', 'Kostenlose Lieferung'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'rd-ein-002',
    theme: 'einkaufen',
    type: 'email',
    title: 'Online-Bestellung',
    text: 'Liebe Kundin, lieber Kunde,\nvielen Dank für Ihre Bestellung Nr. 4587. Ihre Pakete werden am Donnerstag, den 20. Januar, zwischen 10 und 14 Uhr geliefert. Bitte beachten Sie: Jemand muss zu Hause sein, um das Paket anzunehmen. Falls Sie nicht da sind, bringen wir das Paket zu Ihrem Nachbarn oder Sie können es in unserer Filiale in der Hauptstraße 12 abholen.\nMit freundlichen Grüßen,\nIhr Online-Shop-Team',
    questions: [
      {
        id: 'rd-ein-002-q1',
        question: 'Wann wird das Paket geliefert?',
        options: ['Am Mittwoch', 'Am Donnerstag', 'Am Freitag'],
        correctAnswer: 1,
      },
      {
        id: 'rd-ein-002-q2',
        question: 'Was passiert, wenn niemand zu Hause ist?',
        options: ['Das Paket wird zurückgeschickt', 'Das Paket kommt zum Nachbarn oder zur Filiale', 'Das Paket bleibt vor der Tür'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== ESSEN =====
  {
    id: 'rd-ess-001',
    theme: 'essen',
    type: 'notice',
    title: 'Speisekarte – Restaurant Sonnenschein',
    text: 'Restaurant Sonnenschein – Mittagskarte\nVorspeisen: Tomatensuppe 4,50 € | Gemischter Salat 5,90 €\nHauptgerichte: Wiener Schnitzel mit Pommes 12,90 € | Spaghetti Bolognese 9,50 € | Gegrillter Lachs mit Reis 14,80 €\nDesserts: Apfelstrudel mit Vanilleeis 5,50 € | Schokoladenkuchen 4,90 €\nGetränke: Mineralwasser 2,50 € | Apfelsaft 3,00 € | Kaffee 2,80 €\nMittagsmenü (Suppe + Hauptgericht + Getränk): 15,90 €',
    questions: [
      {
        id: 'rd-ess-001-q1',
        question: 'Was kostet das Wiener Schnitzel?',
        options: ['9,50 €', '12,90 €', '14,80 €'],
        correctAnswer: 1,
      },
      {
        id: 'rd-ess-001-q2',
        question: 'Was bekommt man im Mittagsmenü?',
        options: ['Nur ein Hauptgericht', 'Suppe, Hauptgericht und Getränk', 'Vorspeise, Hauptgericht und Dessert'],
        correctAnswer: 1,
      },
      {
        id: 'rd-ess-001-q3',
        question: 'Welches Dessert gibt es?',
        options: ['Tiramisu und Eis', 'Apfelstrudel und Schokoladenkuchen', 'Obstsalat und Crêpes'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'rd-ess-002',
    theme: 'essen',
    type: 'article',
    title: 'Kochen mit Kindern',
    text: 'Immer mehr Familien in Deutschland kochen wieder zusammen. Eine Umfrage zeigt: 60 Prozent der Eltern kochen mindestens dreimal pro Woche mit ihren Kindern. Kinder lernen dabei viel über gesunde Ernährung. „Meine Tochter isst jetzt viel mehr Gemüse, weil sie es selbst schneiden und kochen darf", sagt Mutter Claudia aus Hamburg. Experten empfehlen einfache Rezepte wie Pfannkuchen, Gemüsesuppe oder Nudeln mit Tomatensoße für den Anfang.',
    questions: [
      {
        id: 'rd-ess-002-q1',
        question: 'Wie oft kochen 60 Prozent der Eltern mit ihren Kindern?',
        options: ['Einmal pro Woche', 'Mindestens dreimal pro Woche', 'Jeden Tag'],
        correctAnswer: 1,
      },
      {
        id: 'rd-ess-002-q2',
        question: 'Was hat sich bei Claudias Tochter verändert?',
        options: ['Sie kocht allein', 'Sie isst mehr Gemüse', 'Sie geht nicht mehr in die Schule'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== ARBEIT =====
  {
    id: 'rd-arb-001',
    theme: 'arbeit',
    type: 'ad',
    title: 'Stellenanzeige – Verkäufer/in gesucht',
    text: 'Buchhandlung Lesezeit sucht ab sofort eine/n Verkäufer/in in Teilzeit (20 Stunden/Woche). Ihre Aufgaben: Kunden beraten, Bücher sortieren, Kasse bedienen. Wir erwarten: freundliches Auftreten, gute Deutschkenntnisse, Erfahrung im Verkauf ist ein Plus. Wir bieten: nettes Team, faire Bezahlung (13 €/Stunde), Mitarbeiterrabatt auf alle Bücher. Arbeitszeiten: Montag bis Freitag, 14–18 Uhr. Bitte schicken Sie Ihre Bewerbung per E-Mail an: jobs@lesezeit.de',
    questions: [
      {
        id: 'rd-arb-001-q1',
        question: 'Wie viele Stunden pro Woche ist die Stelle?',
        options: ['10 Stunden', '20 Stunden', '40 Stunden'],
        correctAnswer: 1,
      },
      {
        id: 'rd-arb-001-q2',
        question: 'Was muss man in dem Job machen?',
        options: ['Bücher schreiben', 'Kunden beraten und Kasse bedienen', 'Computer reparieren'],
        correctAnswer: 1,
      },
      {
        id: 'rd-arb-001-q3',
        question: 'Wann sind die Arbeitszeiten?',
        options: ['Morgens von 8 bis 12 Uhr', 'Nachmittags von 14 bis 18 Uhr', 'Abends von 18 bis 22 Uhr'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'rd-arb-002',
    theme: 'arbeit',
    type: 'email',
    title: 'Krankmeldung an den Chef',
    text: 'Sehr geehrter Herr Schneider,\nleider kann ich heute und morgen nicht zur Arbeit kommen. Ich bin stark erkältet und habe Fieber. Ich war gestern beim Arzt und er hat mich für drei Tage krankgeschrieben. Die Krankmeldung schicke ich Ihnen per Post. Meine Kollegin Frau Weber weiß über meine aktuellen Projekte Bescheid und kann mich vertreten. Ich hoffe, dass ich am Donnerstag wieder da bin.\nMit freundlichen Grüßen,\nMarkus Hoffmann',
    questions: [
      {
        id: 'rd-arb-002-q1',
        question: 'Warum kann Herr Hoffmann nicht arbeiten?',
        options: ['Er hat Urlaub', 'Er ist krank', 'Er hat einen Termin'],
        correctAnswer: 1,
      },
      {
        id: 'rd-arb-002-q2',
        question: 'Für wie viele Tage ist er krankgeschrieben?',
        options: ['Zwei Tage', 'Drei Tage', 'Eine Woche'],
        correctAnswer: 1,
      },
      {
        id: 'rd-arb-002-q3',
        question: 'Wer vertritt Herrn Hoffmann?',
        options: ['Herr Schneider', 'Frau Weber', 'Niemand'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== FREIZEIT =====
  {
    id: 'rd-fre-001',
    theme: 'freizeit',
    type: 'notice',
    title: 'Sportverein – Kurse im Frühling',
    text: 'Sportverein Grün-Weiß – Neue Kurse ab März!\nYoga für Anfänger: Dienstag 18:00–19:30, Turnhalle 2. Kosten: 8 € pro Stunde.\nSchwimmen für Erwachsene: Mittwoch 19:00–20:00, Hallenbad. Kosten: 6 € pro Stunde.\nFußball für Jugendliche (12–17 Jahre): Freitag 16:00–17:30, Sportplatz. Kostenlos für Mitglieder.\nAnmeldung im Büro oder online: www.sv-gruenweiss.de\nFragen? Rufen Sie uns an: 0221-556789',
    questions: [
      {
        id: 'rd-fre-001-q1',
        question: 'Wann ist der Yoga-Kurs?',
        options: ['Montag um 17:00', 'Dienstag um 18:00', 'Mittwoch um 19:00'],
        correctAnswer: 1,
      },
      {
        id: 'rd-fre-001-q2',
        question: 'Was kostet der Schwimmkurs?',
        options: ['4 € pro Stunde', '6 € pro Stunde', '8 € pro Stunde'],
        correctAnswer: 1,
      },
      {
        id: 'rd-fre-001-q3',
        question: 'Für wen ist der Fußballkurs?',
        options: ['Für Kinder unter 10', 'Für Jugendliche von 12 bis 17', 'Für Erwachsene'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'rd-fre-002',
    theme: 'freizeit',
    type: 'article',
    title: 'Lesen ist wieder beliebt',
    text: 'Eine neue Studie zeigt: Die Deutschen lesen wieder mehr Bücher. Besonders beliebt sind Krimis und Romane. Im Durchschnitt liest jeder Deutsche etwa 12 Bücher pro Jahr. Viele Menschen lesen abends vor dem Schlafen oder am Wochenende. Auch E-Books werden immer beliebter: 30 Prozent der Leser nutzen ein Tablet oder einen E-Reader. Bibliotheken melden steigende Besucherzahlen. „Lesen ist die schönste Freizeitbeschäftigung", sagt Bibliothekarin Monika Schulz.',
    questions: [
      {
        id: 'rd-fre-002-q1',
        question: 'Wie viele Bücher liest ein Deutscher im Durchschnitt pro Jahr?',
        options: ['5 Bücher', '12 Bücher', '20 Bücher'],
        correctAnswer: 1,
      },
      {
        id: 'rd-fre-002-q2',
        question: 'Welche Bücher sind besonders beliebt?',
        options: ['Kochbücher und Reiseführer', 'Krimis und Romane', 'Lehrbücher und Wörterbücher'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== REISEN =====
  {
    id: 'rd-rei-001',
    theme: 'reisen',
    type: 'info-board',
    title: 'Zugverspätung am Bahnhof',
    text: 'Achtung Reisende!\nDer ICE 578 nach München Hbf hat heute 20 Minuten Verspätung. Abfahrt von Gleis 12 statt Gleis 8. Grund: Störung im Stellwerk bei Würzburg. Reisende mit Anschluss nach Salzburg nehmen bitte den Regionalzug RE 45 ab Gleis 3, Abfahrt 15:42 Uhr. Wir bitten um Entschuldigung für die Unannehmlichkeiten. Weitere Informationen am Service-Point in der Bahnhofshalle.',
    questions: [
      {
        id: 'rd-rei-001-q1',
        question: 'Von welchem Gleis fährt der ICE 578 heute?',
        options: ['Gleis 3', 'Gleis 8', 'Gleis 12'],
        correctAnswer: 2,
      },
      {
        id: 'rd-rei-001-q2',
        question: 'Warum hat der Zug Verspätung?',
        options: ['Wegen des Wetters', 'Wegen einer Störung im Stellwerk', 'Wegen eines Unfalls'],
        correctAnswer: 1,
      },
      {
        id: 'rd-rei-001-q3',
        question: 'Was sollen Reisende nach Salzburg tun?',
        options: ['Auf den ICE warten', 'Den Regionalzug RE 45 nehmen', 'Ein Taxi nehmen'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'rd-rei-002',
    theme: 'reisen',
    type: 'ad',
    title: 'Sommerurlaub an der Ostsee',
    text: 'Ferienwohnung direkt am Strand! Verbringen Sie Ihren Sommerurlaub an der Ostsee in Warnemünde. Unsere gemütliche Ferienwohnung hat 2 Schlafzimmer, eine Küche und einen Balkon mit Meerblick. Nur 100 Meter zum Strand! Preis: 75 € pro Nacht (Juni–August), 55 € pro Nacht in der Nebensaison. Hunde willkommen (+ 10 € pro Nacht). Mindestaufenthalt: 3 Nächte. Buchung unter: www.ostsee-ferien.de oder Tel. 0381-223344.',
    questions: [
      {
        id: 'rd-rei-002-q1',
        question: 'Wie viel kostet die Ferienwohnung im Sommer pro Nacht?',
        options: ['55 €', '75 €', '100 €'],
        correctAnswer: 1,
      },
      {
        id: 'rd-rei-002-q2',
        question: 'Wie weit ist es zum Strand?',
        options: ['50 Meter', '100 Meter', '500 Meter'],
        correctAnswer: 1,
      },
      {
        id: 'rd-rei-002-q3',
        question: 'Darf man einen Hund mitbringen?',
        options: ['Nein, Tiere sind nicht erlaubt', 'Ja, aber es kostet extra', 'Ja, kostenlos'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== GESUNDHEIT =====
  {
    id: 'rd-ges-001',
    theme: 'gesundheit',
    type: 'notice',
    title: 'Informationen der Arztpraxis',
    text: 'Praxis Dr. med. Karin Fischer – Allgemeinmedizin\nSprechzeiten: Mo, Di, Do 8:00–12:00 und 14:00–18:00 Uhr. Mi und Fr 8:00–13:00 Uhr.\nTerminvereinbarung: Bitte rufen Sie an unter 040-887766 oder buchen Sie online auf www.praxis-fischer.de.\nAkutsprechstunde (ohne Termin): Täglich 8:00–9:00 Uhr.\nWichtig: Bringen Sie bitte Ihre Versichertenkarte und Ihren Impfpass mit.\nIm Notfall außerhalb der Sprechzeiten: Ärztlicher Bereitschaftsdienst 116117.',
    questions: [
      {
        id: 'rd-ges-001-q1',
        question: 'Wann hat die Praxis am Mittwoch geöffnet?',
        options: ['8:00–18:00 Uhr', '8:00–13:00 Uhr', '14:00–18:00 Uhr'],
        correctAnswer: 1,
      },
      {
        id: 'rd-ges-001-q2',
        question: 'Was soll man mitbringen?',
        options: ['Nur den Personalausweis', 'Versichertenkarte und Impfpass', 'Ein Rezept vom anderen Arzt'],
        correctAnswer: 1,
      },
      {
        id: 'rd-ges-001-q3',
        question: 'Wann kann man ohne Termin kommen?',
        options: ['Jederzeit', 'Täglich von 8:00 bis 9:00 Uhr', 'Nur am Wochenende'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'rd-ges-002',
    theme: 'gesundheit',
    type: 'article',
    title: 'Tipps gegen Erkältung',
    text: 'Im Winter sind viele Menschen erkältet. Ärzte geben diese Tipps: Trinken Sie viel warmen Tee, besonders Kräutertee mit Honig. Schlafen Sie mindestens acht Stunden pro Nacht. Waschen Sie sich regelmäßig die Hände. Essen Sie viel Obst und Gemüse, besonders Orangen und Paprika – sie haben viel Vitamin C. Gehen Sie auch im Winter jeden Tag an die frische Luft, aber ziehen Sie sich warm an. Wenn Sie Fieber über 38,5 Grad haben, sollten Sie zum Arzt gehen.',
    questions: [
      {
        id: 'rd-ges-002-q1',
        question: 'Was soll man bei Erkältung trinken?',
        options: ['Kaltes Wasser', 'Warmen Kräutertee', 'Kaffee mit Milch'],
        correctAnswer: 1,
      },
      {
        id: 'rd-ges-002-q2',
        question: 'Wann soll man zum Arzt gehen?',
        options: ['Sofort bei jedem Schnupfen', 'Bei Fieber über 38,5 Grad', 'Nur wenn man Husten hat'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== MEDIEN =====
  {
    id: 'rd-med-001',
    theme: 'medien',
    type: 'article',
    title: 'Smartphones und Jugendliche',
    text: 'Fast alle Jugendlichen in Deutschland besitzen ein Smartphone. Eine Studie zeigt: 95 Prozent der 12- bis 19-Jährigen haben ein eigenes Handy. Sie benutzen es durchschnittlich drei Stunden am Tag. Am meisten nutzen sie Messenger-Apps wie WhatsApp, soziale Medien und Musik-Streaming. Viele Eltern machen sich Sorgen, dass ihre Kinder zu viel Zeit am Handy verbringen. Experten empfehlen: nicht mehr als zwei Stunden Bildschirmzeit pro Tag für Jugendliche und kein Handy beim Essen oder vor dem Schlafen.',
    questions: [
      {
        id: 'rd-med-001-q1',
        question: 'Wie viel Prozent der Jugendlichen haben ein Smartphone?',
        options: ['75 Prozent', '85 Prozent', '95 Prozent'],
        correctAnswer: 2,
      },
      {
        id: 'rd-med-001-q2',
        question: 'Wie lange nutzen Jugendliche ihr Smartphone am Tag?',
        options: ['Eine Stunde', 'Drei Stunden', 'Fünf Stunden'],
        correctAnswer: 1,
      },
      {
        id: 'rd-med-001-q3',
        question: 'Was empfehlen Experten?',
        options: ['Kein Smartphone vor 18 Jahren', 'Nicht mehr als zwei Stunden Bildschirmzeit', 'Nur am Wochenende Smartphone benutzen'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'rd-med-002',
    theme: 'medien',
    type: 'notice',
    title: 'Stadtbibliothek – Neue Angebote',
    text: 'Stadtbibliothek Köln – Neue digitale Angebote!\nAb sofort können Sie bei uns auch E-Books, Hörbücher und digitale Zeitschriften ausleihen. Sie brauchen nur einen gültigen Bibliotheksausweis und die App „BiblioDigital". Die Ausleihe ist kostenlos! Außerdem bieten wir jeden Donnerstag von 16 bis 17 Uhr einen Computerkurs für Senioren an. Anmeldung an der Information im Erdgeschoss. Bibliotheksausweis: 10 € pro Jahr für Erwachsene, kostenlos für Kinder und Jugendliche unter 18.',
    questions: [
      {
        id: 'rd-med-002-q1',
        question: 'Was kann man jetzt neu in der Bibliothek ausleihen?',
        options: ['DVDs und Videospiele', 'E-Books, Hörbücher und digitale Zeitschriften', 'Tablets und Laptops'],
        correctAnswer: 1,
      },
      {
        id: 'rd-med-002-q2',
        question: 'Was kostet der Bibliotheksausweis für Kinder?',
        options: ['5 € pro Jahr', '10 € pro Jahr', 'Er ist kostenlos'],
        correctAnswer: 2,
      },
      {
        id: 'rd-med-002-q3',
        question: 'Für wen ist der Computerkurs?',
        options: ['Für Kinder', 'Für Senioren', 'Für Studenten'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== NATUR =====
  {
    id: 'rd-nat-001',
    theme: 'natur',
    type: 'article',
    title: 'Der Schwarzwald – Natur erleben',
    text: 'Der Schwarzwald im Südwesten Deutschlands ist eines der beliebtesten Urlaubsziele für Naturliebhaber. Jedes Jahr kommen über 10 Millionen Besucher. Es gibt mehr als 23.000 Kilometer Wanderwege. Im Sommer kann man wandern, Rad fahren und in Seen schwimmen. Im Winter gibt es viele Möglichkeiten zum Skifahren. Besonders schön ist der Feldberg mit 1.493 Metern der höchste Berg im Schwarzwald. Tipp: Probieren Sie die berühmte Schwarzwälder Kirschtorte in einem traditionellen Gasthaus!',
    questions: [
      {
        id: 'rd-nat-001-q1',
        question: 'Wo liegt der Schwarzwald?',
        options: ['Im Norden Deutschlands', 'Im Südwesten Deutschlands', 'Im Osten Deutschlands'],
        correctAnswer: 1,
      },
      {
        id: 'rd-nat-001-q2',
        question: 'Wie hoch ist der Feldberg?',
        options: ['993 Meter', '1.493 Meter', '1.993 Meter'],
        correctAnswer: 1,
      },
      {
        id: 'rd-nat-001-q3',
        question: 'Was kann man im Winter im Schwarzwald machen?',
        options: ['In Seen schwimmen', 'Skifahren', 'Rad fahren'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'rd-nat-002',
    theme: 'natur',
    type: 'info-board',
    title: 'Regeln im Naturschutzgebiet',
    text: 'Willkommen im Naturschutzgebiet Lüneburger Heide!\nBitte beachten Sie folgende Regeln:\n• Bleiben Sie auf den markierten Wegen.\n• Nehmen Sie Ihren Müll wieder mit.\n• Hunde müssen an der Leine bleiben.\n• Pflücken Sie keine Blumen und Pflanzen.\n• Machen Sie kein Feuer und kein Lagerfeuer.\n• Zelten ist nur auf dem Campingplatz erlaubt.\nDas Naturschutzzentrum mit Ausstellung ist täglich von 9 bis 17 Uhr geöffnet. Eintritt: Erwachsene 4 €, Kinder 2 €. Führungen jeden Samstag um 11 Uhr.',
    questions: [
      {
        id: 'rd-nat-002-q1',
        question: 'Was muss man mit Hunden machen?',
        options: ['Hunde sind verboten', 'Hunde müssen an der Leine bleiben', 'Hunde dürfen frei laufen'],
        correctAnswer: 1,
      },
      {
        id: 'rd-nat-002-q2',
        question: 'Wo darf man zelten?',
        options: ['Überall im Wald', 'Nur auf dem Campingplatz', 'Zelten ist verboten'],
        correctAnswer: 1,
      },
      {
        id: 'rd-nat-002-q3',
        question: 'Wann gibt es Führungen?',
        options: ['Jeden Tag um 10 Uhr', 'Jeden Samstag um 11 Uhr', 'Jeden Sonntag um 14 Uhr'],
        correctAnswer: 1,
      },
    ],
  },
];
