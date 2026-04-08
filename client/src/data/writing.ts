export interface WritingPrompt {
  id: string;
  theme: string;
  type: 'email' | 'message' | 'form';
  scenario: string;
  task: string;
  keyPhrases: string[];
  sentenceStarters: string[];
  sampleResponse: string;
  wordCountTarget: number;
}

export const writingPrompts: WritingPrompt[] = [
  {
    id: 'wr-fam-001',
    theme: 'familie',
    type: 'email',
    scenario: 'Deine Cousine hat ein Baby bekommen. Du schreibst einer Freundin/einem Freund darüber.',
    task: 'Schreibe eine E-Mail an deine Freundin Maria. Erzähle ihr von dem Baby und lade sie zu einer kleinen Feier ein.',
    keyPhrases: [
      'Liebe Maria,',
      'Ich schreibe dir, weil ...',
      'Meine Cousine hat ein Baby bekommen.',
      'Wir machen eine kleine Feier.',
      'Kannst du auch kommen?',
      'Das Baby heißt ...',
      'Ich freue mich auf deine Antwort.',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Ich möchte dir erzählen, dass ...',
      'Wir feiern am ...',
      'Es wäre schön, wenn du ...',
      'Kannst du vielleicht ... mitbringen?'
    ],
    sampleResponse: 'Liebe Maria,\nich schreibe dir, weil ich tolle Neuigkeiten habe! Meine Cousine Anna hat ein Baby bekommen. Es ist ein Mädchen und heißt Sophie. Wir machen am Samstag eine kleine Feier bei meinen Eltern. Kannst du auch kommen? Die Feier beginnt um 15 Uhr. Kannst du vielleicht einen Kuchen mitbringen? Ich freue mich auf deine Antwort.\nViele Grüße\nLisa',
    wordCountTarget: 60
  },
  {
    id: 'wr-fam-002',
    theme: 'familie',
    type: 'email',
    scenario: 'Deine Großeltern haben goldene Hochzeit. Du lädst einen Freund zur Familienfeier ein.',
    task: 'Schreibe eine E-Mail an deinen Freund Tom. Erzähle ihm von der Feier und frage, ob er kommen kann.',
    keyPhrases: [
      'Lieber Tom,',
      'Meine Großeltern feiern goldene Hochzeit.',
      'Die Feier ist am ...',
      'Wir feiern in einem Restaurant.',
      'Die ganze Familie kommt.',
      'Hast du an dem Tag Zeit?',
      'Ich würde mich sehr freuen.',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Am Wochenende haben wir ...',
      'Es gibt Essen und ...',
      'Du kannst gerne ... mitbringen.',
      'Bitte sag mir bis ... Bescheid.'
    ],
    sampleResponse: 'Lieber Tom,\nich möchte dir von einer tollen Feier erzählen. Meine Großeltern feiern am 20. Mai goldene Hochzeit! Sie sind seit 50 Jahren verheiratet. Wir feiern in einem schönen Restaurant in der Stadt. Die ganze Familie kommt. Hast du an dem Tag Zeit? Es gibt leckeres Essen und Musik. Bitte sag mir bis Freitag Bescheid.\nViele Grüße\nMax',
    wordCountTarget: 65
  },
  {
    id: 'wr-woh-001',
    theme: 'wohnen',
    type: 'email',
    scenario: 'Du bist in eine neue Wohnung umgezogen. Du schreibst einem Freund darüber.',
    task: 'Schreibe eine E-Mail an deinen Freund Paul. Beschreibe deine neue Wohnung und lade ihn ein.',
    keyPhrases: [
      'Lieber Paul,',
      'Ich bin umgezogen!',
      'Meine neue Wohnung ist ...',
      'Sie hat ... Zimmer.',
      'Die Küche ist groß.',
      'Ich wohne jetzt in der Nähe von ...',
      'Möchtest du mich besuchen?',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Seit letzter Woche wohne ich ...',
      'Die Wohnung hat ...',
      'Am besten gefällt mir ...',
      'Komm doch mal vorbei!',
      'Ich kann dir die Wohnung zeigen.'
    ],
    sampleResponse: 'Lieber Paul,\nich habe tolle Neuigkeiten! Seit letzter Woche wohne ich in einer neuen Wohnung. Sie hat zwei Zimmer, eine große Küche und einen Balkon. Am besten gefällt mir das Wohnzimmer, weil es sehr hell ist. Ich wohne jetzt in der Nähe vom Park. Möchtest du mich am Wochenende besuchen? Ich kann dir die Wohnung zeigen. Wir können zusammen kochen.\nViele Grüße\nJan',
    wordCountTarget: 65
  },
  {
    id: 'wr-woh-002',
    theme: 'wohnen',
    type: 'email',
    scenario: 'Du suchst eine neue Wohnung und bittest einen Freund um Hilfe.',
    task: 'Schreibe eine E-Mail an deine Freundin Sarah. Erkläre, was für eine Wohnung du suchst, und bitte sie um Hilfe.',
    keyPhrases: [
      'Liebe Sarah,',
      'Ich suche eine neue Wohnung.',
      'Die Wohnung sollte ... haben.',
      'Die Miete darf nicht mehr als ... kosten.',
      'Kannst du mir helfen?',
      'Ich brauche die Wohnung ab ...',
      'Weißt du vielleicht etwas?',
      'Vielen Dank und liebe Grüße'
    ],
    sentenceStarters: [
      'Ich muss leider umziehen, weil ...',
      'Am wichtigsten ist mir ...',
      'Die Wohnung sollte in der Nähe von ...',
      'Vielleicht kennst du jemanden, der ...'
    ],
    sampleResponse: 'Liebe Sarah,\nich muss leider umziehen, weil meine Wohnung zu klein ist. Ich suche eine Wohnung mit zwei Zimmern und einem Balkon. Die Miete darf nicht mehr als 600 Euro kosten. Am wichtigsten ist mir, dass die Wohnung in der Nähe von meiner Arbeit ist. Ich brauche die Wohnung ab September. Weißt du vielleicht etwas? Kannst du mir helfen?\nVielen Dank und liebe Grüße\nAnna',
    wordCountTarget: 65
  },
  {
    id: 'wr-ein-001',
    theme: 'einkaufen',
    type: 'email',
    scenario: 'Du hast online etwas gekauft, aber es gibt ein Problem mit der Bestellung.',
    task: 'Schreibe eine E-Mail an deine Freundin Lena. Erzähle ihr von dem Problem und frage sie um Rat.',
    keyPhrases: [
      'Liebe Lena,',
      'Ich habe im Internet ... bestellt.',
      'Leider gibt es ein Problem.',
      'Das Paket ist noch nicht angekommen.',
      'Was soll ich machen?',
      'Hast du eine Idee?',
      'Hattest du auch schon mal so ein Problem?',
      'Liebe Grüße'
    ],
    sentenceStarters: [
      'Letzte Woche habe ich ...',
      'Ich habe schon ... Euro bezahlt.',
      'Ich warte jetzt seit ...',
      'Vielleicht sollte ich ...'
    ],
    sampleResponse: 'Liebe Lena,\nich habe ein Problem und brauche deinen Rat. Letzte Woche habe ich im Internet ein neues Handy bestellt. Ich habe schon 200 Euro bezahlt. Aber das Paket ist noch nicht angekommen. Ich warte jetzt seit zehn Tagen! Was soll ich machen? Hattest du auch schon mal so ein Problem? Vielleicht sollte ich den Kundenservice anrufen. Was meinst du?\nLiebe Grüße\nMia',
    wordCountTarget: 65
  },
  {
    id: 'wr-ein-002',
    theme: 'einkaufen',
    type: 'email',
    scenario: 'Ein neues Einkaufszentrum hat in deiner Stadt eröffnet. Du schreibst einem Freund darüber.',
    task: 'Schreibe eine E-Mail an deinen Freund Felix. Erzähle ihm von dem neuen Einkaufszentrum und schlage vor, zusammen hinzugehen.',
    keyPhrases: [
      'Lieber Felix,',
      'Bei uns hat ein neues Einkaufszentrum eröffnet.',
      'Es gibt viele tolle Geschäfte.',
      'Hast du Lust, mitzukommen?',
      'Wir können am ... hingehen.',
      'Es gibt auch ein Café dort.',
      'Ich brauche neue ...',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Stell dir vor, ...',
      'Das Einkaufszentrum ist ...',
      'Dort kann man ...',
      'Lass uns doch am ...',
      'Wir könnten danach ...'
    ],
    sampleResponse: 'Lieber Felix,\nstell dir vor, bei uns hat ein neues Einkaufszentrum eröffnet! Es ist sehr groß und es gibt viele tolle Geschäfte. Dort kann man Kleidung, Schuhe und Elektronik kaufen. Es gibt auch ein schönes Café und ein Kino. Ich brauche neue Sportschuhe. Hast du Lust, am Samstag mitzukommen? Wir könnten danach zusammen etwas essen.\nViele Grüße\nDaniel',
    wordCountTarget: 60
  },
  {
    id: 'wr-ess-001',
    theme: 'essen',
    type: 'email',
    scenario: 'Du möchtest einen Freund zum Abendessen einladen und zusammen kochen.',
    task: 'Schreibe eine E-Mail an deinen Freund Marco. Lade ihn zum Essen ein und schlage ein Gericht vor.',
    keyPhrases: [
      'Lieber Marco,',
      'Ich möchte dich zum Essen einladen.',
      'Ich koche gerne ...',
      'Hast du am ... Zeit?',
      'Wir können zusammen kochen.',
      'Magst du ...?',
      'Bring bitte ... mit.',
      'Ich freue mich auf den Abend.'
    ],
    sentenceStarters: [
      'Am Freitagabend möchte ich ...',
      'Ich habe ein neues Rezept für ...',
      'Wir könnten auch ...',
      'Sag mir bitte, ob du ...'
    ],
    sampleResponse: 'Lieber Marco,\nich möchte dich am Freitagabend zum Essen einladen. Ich habe ein neues Rezept für Pasta mit Gemüse. Magst du italienisches Essen? Wir können zusammen kochen, das macht mehr Spaß. Hast du am Freitag ab 18 Uhr Zeit? Bring bitte eine Flasche Wasser oder Saft mit. Sag mir bitte bis Donnerstag Bescheid. Ich freue mich auf den Abend!\nViele Grüße\nSophie',
    wordCountTarget: 65
  },
  {
    id: 'wr-ess-002',
    theme: 'essen',
    type: 'email',
    scenario: 'Du warst in einem neuen Restaurant und möchtest es einem Freund empfehlen.',
    task: 'Schreibe eine E-Mail an deine Freundin Nina. Erzähle ihr von dem Restaurant und empfiehl es ihr.',
    keyPhrases: [
      'Liebe Nina,',
      'Ich war gestern in einem neuen Restaurant.',
      'Das Essen war sehr lecker.',
      'Ich habe ... gegessen.',
      'Das Restaurant heißt ...',
      'Die Preise sind ...',
      'Du musst unbedingt hingehen!',
      'Liebe Grüße'
    ],
    sentenceStarters: [
      'Gestern Abend war ich ...',
      'Besonders gut hat mir ... geschmeckt.',
      'Die Bedienung war ...',
      'Wir könnten zusammen hingehen.',
      'Ich empfehle dir ...'
    ],
    sampleResponse: 'Liebe Nina,\ngestern Abend war ich mit meiner Schwester in einem neuen Restaurant. Es heißt „Zum Goldenen Löffel" und ist in der Hauptstraße. Ich habe Schnitzel mit Kartoffelsalat gegessen. Besonders gut hat mir die Suppe geschmeckt. Die Bedienung war sehr freundlich und die Preise sind nicht so hoch. Du musst unbedingt hingehen! Wir könnten nächste Woche zusammen dort essen.\nLiebe Grüße\nJulia',
    wordCountTarget: 65
  },
  {
    id: 'wr-arb-001',
    theme: 'arbeit',
    type: 'email',
    scenario: 'Du hast einen neuen Job gefunden. Du schreibst einem Freund darüber.',
    task: 'Schreibe eine E-Mail an deinen Freund Andreas. Erzähle ihm von deinem neuen Job.',
    keyPhrases: [
      'Lieber Andreas,',
      'Ich habe einen neuen Job!',
      'Ich arbeite jetzt als ...',
      'Die Arbeitszeiten sind ...',
      'Meine Kollegen sind ...',
      'Das Gehalt ist ...',
      'Ich bin sehr zufrieden.',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Seit Montag arbeite ich ...',
      'Am besten gefällt mir ...',
      'Mein Chef ist ...',
      'Ich muss jeden Tag ...',
      'Die Arbeit macht mir ...'
    ],
    sampleResponse: 'Lieber Andreas,\nich habe tolle Neuigkeiten! Seit Montag arbeite ich in einem Büro als Sachbearbeiter. Die Arbeitszeiten sind von 8 bis 17 Uhr, Montag bis Freitag. Meine Kollegen sind sehr nett und mein Chef ist auch freundlich. Am besten gefällt mir, dass das Büro in der Nähe von meiner Wohnung ist. Die Arbeit macht mir Spaß. Ich bin sehr zufrieden!\nViele Grüße\nStefan',
    wordCountTarget: 65
  },
  {
    id: 'wr-arb-002',
    theme: 'arbeit',
    type: 'email',
    scenario: 'Du machst ein Praktikum und erzählst einem Freund davon.',
    task: 'Schreibe eine E-Mail an deine Freundin Eva. Berichte ihr von deinem Praktikum.',
    keyPhrases: [
      'Liebe Eva,',
      'Ich mache gerade ein Praktikum.',
      'Das Praktikum ist bei ...',
      'Ich lerne dort ...',
      'Es dauert ... Wochen.',
      'Die Arbeit ist ...',
      'Danach möchte ich ...',
      'Liebe Grüße'
    ],
    sentenceStarters: [
      'Seit zwei Wochen mache ich ...',
      'Jeden Tag muss ich ...',
      'Besonders interessant finde ich ...',
      'Nach dem Praktikum möchte ich ...'
    ],
    sampleResponse: 'Liebe Eva,\nwie geht es dir? Seit zwei Wochen mache ich ein Praktikum bei einer Marketingfirma. Es dauert insgesamt sechs Wochen. Jeden Tag muss ich E-Mails schreiben und bei Projekten helfen. Besonders interessant finde ich die Arbeit mit den Kunden. Die Kollegen sind sehr hilfsbereit. Nach dem Praktikum möchte ich mich dort um eine feste Stelle bewerben.\nLiebe Grüße\nKatharina',
    wordCountTarget: 60
  },
  {
    id: 'wr-fre-001',
    theme: 'freizeit',
    type: 'email',
    scenario: 'Du schlägst einem Freund eine gemeinsame Freizeitaktivität vor.',
    task: 'Schreibe eine E-Mail an deinen Freund Lukas. Schlage ihm vor, am Wochenende etwas zusammen zu machen.',
    keyPhrases: [
      'Lieber Lukas,',
      'Hast du am Wochenende schon Pläne?',
      'Ich habe eine Idee.',
      'Wir könnten zusammen ...',
      'Das macht bestimmt Spaß!',
      'Wir treffen uns um ...',
      'Was meinst du?',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Am Samstag könnten wir ...',
      'Ich würde gerne ...',
      'Danach könnten wir noch ...',
      'Hast du Lust auf ...?',
      'Sag mir einfach Bescheid.'
    ],
    sampleResponse: 'Lieber Lukas,\nhast du am Wochenende schon Pläne? Ich habe eine tolle Idee! Am Samstag könnten wir zusammen schwimmen gehen. Das neue Schwimmbad in der Stadt ist sehr schön. Danach könnten wir noch ein Eis essen gehen. Hast du Lust? Wir treffen uns um 14 Uhr am Bahnhof. Das macht bestimmt Spaß! Sag mir einfach Bescheid.\nViele Grüße\nNiklas',
    wordCountTarget: 60
  },
  {
    id: 'wr-fre-002',
    theme: 'freizeit',
    type: 'email',
    scenario: 'Du hast ein neues Hobby angefangen und schreibst einem Freund darüber.',
    task: 'Schreibe eine E-Mail an deine Freundin Laura. Erzähle ihr von deinem neuen Hobby.',
    keyPhrases: [
      'Liebe Laura,',
      'Ich habe ein neues Hobby!',
      'Seit ... Wochen mache ich ...',
      'Es macht mir sehr viel Spaß.',
      'Ich gehe jeden ... zum Training.',
      'Möchtest du es auch mal probieren?',
      'Wir können zusammen hingehen.',
      'Liebe Grüße'
    ],
    sentenceStarters: [
      'Ich wollte dir erzählen, dass ...',
      'Das Tolle daran ist ...',
      'Ich habe schon ...',
      'Komm doch einfach mal mit!'
    ],
    sampleResponse: 'Liebe Laura,\nich wollte dir erzählen, dass ich ein neues Hobby habe! Seit drei Wochen lerne ich Gitarre spielen. Ich gehe jeden Mittwoch zum Unterricht. Es macht mir sehr viel Spaß, obwohl es am Anfang schwierig war. Ich kann jetzt schon zwei Lieder spielen! Das Tolle daran ist, dass man abends gut entspannen kann. Möchtest du es auch mal probieren? Komm doch einfach mal mit!\nLiebe Grüße\nHanna',
    wordCountTarget: 70
  },
  {
    id: 'wr-rei-001',
    theme: 'reisen',
    type: 'email',
    scenario: 'Du warst im Urlaub und schreibst einem Freund über deine Reise.',
    task: 'Schreibe eine E-Mail an deine Freundin Claudia. Erzähle ihr von deinem Urlaub.',
    keyPhrases: [
      'Liebe Claudia,',
      'Ich bin gerade aus dem Urlaub zurückgekommen.',
      'Ich war in ...',
      'Das Wetter war ...',
      'Wir haben ... besucht.',
      'Am besten hat mir ... gefallen.',
      'Ich zeige dir die Fotos.',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Letzte Woche war ich ...',
      'Dort haben wir ...',
      'Besonders schön war ...',
      'Ich kann dir den Ort nur empfehlen.',
      'Nächstes Jahr möchte ich wieder ...'
    ],
    sampleResponse: 'Liebe Claudia,\nich bin gerade aus dem Urlaub zurückgekommen. Ich war eine Woche in Österreich, in den Bergen. Das Wetter war sehr schön und sonnig. Wir haben viel gewandert und einen schönen See besucht. Am besten hat mir die Altstadt von Salzburg gefallen. Das Essen war auch sehr lecker! Ich kann dir den Ort nur empfehlen. Ich zeige dir bald die Fotos.\nViele Grüße\nMelanie',
    wordCountTarget: 70
  },
  {
    id: 'wr-rei-002',
    theme: 'reisen',
    type: 'email',
    scenario: 'Du möchtest mit einem Freund zusammen eine Reise planen.',
    task: 'Schreibe eine E-Mail an deinen Freund David. Schlage eine gemeinsame Reise vor.',
    keyPhrases: [
      'Lieber David,',
      'Ich möchte im Sommer verreisen.',
      'Hast du Lust mitzukommen?',
      'Wir könnten nach ... fahren.',
      'Dort kann man ...',
      'Wir könnten ... übernachten.',
      'Was hältst du davon?',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Ich habe eine tolle Idee für ...',
      'Im Juli hätte ich ...',
      'Wir könnten mit dem ... fahren.',
      'Das Hotel kostet ungefähr ...',
      'Lass uns bald darüber sprechen.'
    ],
    sampleResponse: 'Lieber David,\nich habe eine tolle Idee für den Sommer! Ich möchte im Juli verreisen und habe an die Ostsee gedacht. Hast du Lust mitzukommen? Wir könnten mit dem Zug fahren und in einer Ferienwohnung übernachten. Dort kann man schwimmen, Rad fahren und die Natur genießen. Das Hotel kostet ungefähr 50 Euro pro Nacht. Was hältst du davon? Lass uns bald darüber sprechen.\nViele Grüße\nChristian',
    wordCountTarget: 70
  },
  {
    id: 'wr-ges-001',
    theme: 'gesundheit',
    type: 'email',
    scenario: 'Du bist krank und musst eine Verabredung absagen.',
    task: 'Schreibe eine E-Mail an deine Freundin Petra. Sage die Verabredung ab und erkläre warum.',
    keyPhrases: [
      'Liebe Petra,',
      'Leider muss ich unsere Verabredung absagen.',
      'Ich bin krank.',
      'Ich habe ... und ...',
      'Der Arzt hat gesagt, ...',
      'Ich muss im Bett bleiben.',
      'Können wir uns nächste Woche treffen?',
      'Liebe Grüße'
    ],
    sentenceStarters: [
      'Es tut mir sehr leid, aber ...',
      'Seit gestern habe ich ...',
      'Ich war beim Arzt und ...',
      'Hoffentlich bin ich bald wieder gesund.',
      'Ich melde mich, wenn ...'
    ],
    sampleResponse: 'Liebe Petra,\nes tut mir sehr leid, aber ich muss unsere Verabredung am Samstag leider absagen. Seit gestern habe ich starke Kopfschmerzen und Fieber. Ich war beim Arzt und er hat gesagt, ich muss ein paar Tage im Bett bleiben. Hoffentlich bin ich nächste Woche wieder gesund. Können wir uns dann treffen? Ich melde mich, wenn es mir besser geht.\nLiebe Grüße\nSandra',
    wordCountTarget: 65
  },
  {
    id: 'wr-ges-002',
    theme: 'gesundheit',
    type: 'email',
    scenario: 'Du hast angefangen, mehr Sport zu machen, und schreibst einem Freund darüber.',
    task: 'Schreibe eine E-Mail an deinen Freund Michael. Erzähle ihm, warum du mehr Sport machst und wie es dir geht.',
    keyPhrases: [
      'Lieber Michael,',
      'Ich lebe jetzt gesünder.',
      'Ich mache jeden Tag Sport.',
      'Ich fühle mich viel besser.',
      'Ich esse auch gesünder.',
      'Möchtest du mitmachen?',
      'Es ist nicht so schwer.',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Seit einem Monat mache ich ...',
      'Mein Arzt hat mir empfohlen, ...',
      'Am Anfang war es ...',
      'Jetzt habe ich mehr Energie.',
      'Du könntest auch ...'
    ],
    sampleResponse: 'Lieber Michael,\nwie geht es dir? Ich möchte dir erzählen, dass ich jetzt gesünder lebe. Mein Arzt hat mir empfohlen, mehr Sport zu machen. Seit einem Monat gehe ich jeden Morgen joggen und esse auch gesünder. Am Anfang war es schwer, aber jetzt fühle ich mich viel besser und habe mehr Energie. Möchtest du mitmachen? Wir können zusammen laufen gehen.\nViele Grüße\nThomas',
    wordCountTarget: 65
  },
  {
    id: 'wr-med-001',
    theme: 'medien',
    type: 'email',
    scenario: 'Du hast eine tolle Serie gesehen und möchtest sie einem Freund empfehlen.',
    task: 'Schreibe eine E-Mail an deine Freundin Johanna. Empfiehl ihr die Serie.',
    keyPhrases: [
      'Liebe Johanna,',
      'Ich habe eine tolle Serie gesehen.',
      'Die Serie heißt ...',
      'Es geht um ...',
      'Ich finde sie sehr spannend.',
      'Du musst sie unbedingt sehen!',
      'Man kann sie auf ... sehen.',
      'Liebe Grüße'
    ],
    sentenceStarters: [
      'Hast du schon die Serie ... gesehen?',
      'Die Hauptfigur ist ...',
      'Besonders gut finde ich ...',
      'Es gibt ... Staffeln.',
      'Sag mir, wie du sie findest!'
    ],
    sampleResponse: 'Liebe Johanna,\nhast du schon die Serie „Dunkle Tage" gesehen? Ich finde sie sehr spannend! Es geht um eine Familie, die in eine neue Stadt zieht. Die Hauptfigur ist ein Mädchen, das neue Freunde sucht. Es gibt drei Staffeln und jede Folge ist etwa 40 Minuten lang. Man kann sie auf Netflix sehen. Du musst sie unbedingt sehen! Sag mir, wie du sie findest!\nLiebe Grüße\nLeonie',
    wordCountTarget: 70
  },
  {
    id: 'wr-med-002',
    theme: 'medien',
    type: 'email',
    scenario: 'Du hast eine nützliche App entdeckt und möchtest sie einem Freund empfehlen.',
    task: 'Schreibe eine E-Mail an deinen Freund Jonas. Erzähle ihm von der App und warum sie gut ist.',
    keyPhrases: [
      'Lieber Jonas,',
      'Ich habe eine tolle App entdeckt.',
      'Die App heißt ...',
      'Mit der App kann man ...',
      'Sie ist kostenlos.',
      'Ich benutze sie jeden Tag.',
      'Du solltest sie ausprobieren!',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Ich wollte dir von einer App erzählen, ...',
      'Das Beste daran ist, dass ...',
      'Man kann damit ...',
      'Ich habe sie schon seit ...'
    ],
    sampleResponse: 'Lieber Jonas,\nich wollte dir von einer tollen App erzählen. Sie heißt „Deutsch Lernen Pro" und man kann damit Vokabeln üben und Grammatik lernen. Ich benutze sie jeden Tag im Bus und es macht richtig Spaß. Das Beste daran ist, dass sie kostenlos ist. Man kann auch Übungen machen und seinen Fortschritt sehen. Du solltest sie unbedingt ausprobieren!\nViele Grüße\nAlex',
    wordCountTarget: 60
  },
  {
    id: 'wr-nat-001',
    theme: 'natur',
    type: 'email',
    scenario: 'Du hast einen Ausflug in die Natur gemacht und schreibst einem Freund darüber.',
    task: 'Schreibe eine E-Mail an deine Freundin Tanja. Erzähle ihr von dem Ausflug.',
    keyPhrases: [
      'Liebe Tanja,',
      'Am Wochenende habe ich einen Ausflug gemacht.',
      'Wir waren in den Bergen.',
      'Die Landschaft war wunderschön.',
      'Wir haben viele Tiere gesehen.',
      'Das Wetter war perfekt.',
      'Nächstes Mal kommst du mit!',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Am Sonntag bin ich mit ... gewandert.',
      'Wir haben einen ... besucht.',
      'Besonders schön war ...',
      'Ich habe viele Fotos gemacht.',
      'Du würdest es auch mögen.'
    ],
    sampleResponse: 'Liebe Tanja,\nam Sonntag bin ich mit meiner Familie in den Bergen gewandert. Wir haben einen wunderschönen See besucht. Die Landschaft war fantastisch und das Wetter war perfekt – sonnig und warm. Wir haben sogar Rehe und viele Vögel gesehen! Besonders schön war der Blick vom Berg. Ich habe viele Fotos gemacht und zeige sie dir bald. Nächstes Mal kommst du mit!\nViele Grüße\nKatrin',
    wordCountTarget: 65
  },
  {
    id: 'wr-nat-002',
    theme: 'natur',
    type: 'email',
    scenario: 'Du möchtest mit einem Freund einen Ausflug in die Natur planen.',
    task: 'Schreibe eine E-Mail an deinen Freund Robert. Schlage einen Naturausflug vor.',
    keyPhrases: [
      'Lieber Robert,',
      'Ich möchte am Wochenende in die Natur.',
      'Wir könnten zum ... fahren.',
      'Dort kann man wandern und ...',
      'Hast du am Samstag Zeit?',
      'Wir brauchen gute Schuhe und ...',
      'Das wird bestimmt toll!',
      'Viele Grüße'
    ],
    sentenceStarters: [
      'Ich habe Lust auf ...',
      'Man hat mir den ... empfohlen.',
      'Wir könnten auch ... mitnehmen.',
      'Treffen wir uns um ...?',
      'Bitte bring auch ... mit.'
    ],
    sampleResponse: 'Lieber Robert,\nich habe Lust auf einen Ausflug in die Natur! Man hat mir den Nationalpark in der Nähe empfohlen. Dort kann man wandern, Vögel beobachten und picknicken. Hast du am Samstag Zeit? Wir könnten morgens um 9 Uhr losfahren. Wir brauchen gute Schuhe und etwas zu essen. Bitte bring auch eine Wasserflasche mit. Das wird bestimmt toll!\nViele Grüße\nMarkus',
    wordCountTarget: 60
  }
];
