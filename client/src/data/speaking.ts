export interface SpeakingPrompt {
  id: string;
  theme: string;
  type: 'monologue' | 'roleplay' | 'picture-description' | 'alltagssituation';
  teil: 1 | 2 | 3;
  title: string;
  scenario: string;
  questions: string[];
  keyPhrases: string[];
  timeLimit: number;
  tips: string[];
}

export const speakingPrompts: SpeakingPrompt[] = [
  {
    id: 'sp-fam-001',
    theme: 'familie',
    type: 'monologue',
    teil: 1,
    title: 'Erzählen Sie über Ihre Familie',
    scenario: 'Sie sollen sich vorstellen und über Ihre Familie sprechen. Erzählen Sie, wer zu Ihrer Familie gehört und was die Familienmitglieder machen.',
    questions: [
      'Wie viele Personen sind in Ihrer Familie?',
      'Haben Sie Geschwister? Wie heißen sie?',
      'Was machen Ihre Eltern beruflich?',
      'Wo wohnt Ihre Familie?',
      'Was machen Sie gerne zusammen mit Ihrer Familie?'
    ],
    keyPhrases: [
      'Meine Familie besteht aus ... Personen.',
      'Ich habe einen Bruder / eine Schwester.',
      'Mein Vater arbeitet als ...',
      'Meine Mutter ist ... von Beruf.',
      'Wir wohnen zusammen in ...',
      'Am Wochenende machen wir oft ...',
      'Meine Großeltern leben in ...',
      'Ich verstehe mich gut mit ...'
    ],
    timeLimit: 90,
    tips: [
      'Beginnen Sie mit einer kurzen Vorstellung: Name, Alter, Wohnort.',
      'Nennen Sie die Familienmitglieder nacheinander.',
      'Sagen Sie zu jeder Person mindestens einen Satz.',
      'Sprechen Sie langsam und deutlich.',
      'Beenden Sie mit einer persönlichen Bemerkung über Ihre Familie.'
    ]
  },
  {
    id: 'sp-fam-002',
    theme: 'familie',
    type: 'roleplay',
    teil: 3,
    title: 'Ein Familienfest planen',
    scenario: 'Sie möchten mit Ihrem Partner / Ihrer Partnerin ein Geburtstagsfest für Ihre Mutter planen. Besprechen Sie gemeinsam die Details.',
    questions: [
      'Wann soll die Feier stattfinden?',
      'Wo möchten Sie feiern – zu Hause oder in einem Restaurant?',
      'Wen möchten Sie einladen?',
      'Was soll es zu essen und trinken geben?',
      'Welches Geschenk möchten Sie kaufen?',
      'Wer macht was bei der Vorbereitung?'
    ],
    keyPhrases: [
      'Ich schlage vor, dass wir ...',
      'Was meinst du, sollen wir ...?',
      'Ich finde, wir sollten ...',
      'Gute Idee! Und dann könnten wir ...',
      'Wer kümmert sich um ...?',
      'Ich kann ... machen.',
      'Einverstanden! Dann mache ich ...',
      'Lass uns ... bestellen.'
    ],
    timeLimit: 120,
    tips: [
      'Machen Sie Vorschläge und fragen Sie nach der Meinung des Partners.',
      'Reagieren Sie auf Vorschläge: „Ja, das ist eine gute Idee" oder „Ich finde, wir sollten lieber ...".',
      'Verteilen Sie die Aufgaben klar.',
      'Sprechen Sie über Ort, Zeit, Essen und Gäste.',
      'Fassen Sie am Ende zusammen, was Sie geplant haben.'
    ]
  },
  {
    id: 'sp-woh-001',
    theme: 'wohnen',
    type: 'monologue',
    teil: 1,
    title: 'Beschreiben Sie Ihre Wohnung',
    scenario: 'Sie sollen Ihre Wohnung oder Ihr Haus beschreiben. Erzählen Sie, wo Sie wohnen, wie die Wohnung aussieht und was Ihnen gefällt.',
    questions: [
      'Wo wohnen Sie – in einer Stadt oder auf dem Land?',
      'Wohnen Sie in einer Wohnung oder in einem Haus?',
      'Wie viele Zimmer hat Ihre Wohnung?',
      'Welches Zimmer gefällt Ihnen am besten? Warum?',
      'Was gibt es in der Nähe von Ihrer Wohnung?'
    ],
    keyPhrases: [
      'Ich wohne in einer ... in ...',
      'Meine Wohnung hat ... Zimmer.',
      'Das Wohnzimmer ist groß und hell.',
      'Die Küche ist klein, aber modern.',
      'Am besten gefällt mir ..., weil ...',
      'In der Nähe gibt es ...',
      'Ich wohne seit ... dort.',
      'Die Miete beträgt ... Euro.'
    ],
    timeLimit: 90,
    tips: [
      'Beschreiben Sie die Wohnung Zimmer für Zimmer.',
      'Verwenden Sie Adjektive: groß, klein, hell, dunkel, modern, gemütlich.',
      'Sagen Sie, was Ihnen gefällt und was nicht.',
      'Erwähnen Sie die Umgebung: Geschäfte, Parks, Verkehr.',
      'Sprechen Sie in ganzen Sätzen, nicht nur in Stichworten.'
    ]
  },
  {
    id: 'sp-woh-002',
    theme: 'wohnen',
    type: 'roleplay',
    teil: 3,
    title: 'Wohnungssuche – Anruf beim Vermieter',
    scenario: 'Sie haben eine Wohnungsanzeige gelesen und rufen den Vermieter an. Sie möchten mehr Informationen über die Wohnung.',
    questions: [
      'Wie groß ist die Wohnung?',
      'Wie hoch ist die Miete?',
      'Ab wann ist die Wohnung frei?',
      'Gibt es einen Balkon oder einen Garten?',
      'Sind Haustiere erlaubt?',
      'Wann kann ich die Wohnung besichtigen?'
    ],
    keyPhrases: [
      'Guten Tag, ich rufe wegen der Wohnungsanzeige an.',
      'Können Sie mir mehr über die Wohnung erzählen?',
      'Wie hoch ist die Miete inklusive Nebenkosten?',
      'Gibt es einen Keller oder einen Parkplatz?',
      'Wann könnte ich die Wohnung besichtigen?',
      'Das klingt sehr gut.',
      'Ich interessiere mich für die Wohnung.',
      'Vielen Dank für die Informationen.'
    ],
    timeLimit: 120,
    tips: [
      'Stellen Sie sich zuerst vor und sagen Sie, warum Sie anrufen.',
      'Stellen Sie höfliche Fragen mit „Können Sie mir sagen ..." oder „Ich möchte gerne wissen ...".',
      'Notieren Sie sich die wichtigsten Informationen.',
      'Bedanken Sie sich am Ende des Gesprächs.',
      'Fragen Sie nach einem Besichtigungstermin.'
    ]
  },
  {
    id: 'sp-ein-001',
    theme: 'einkaufen',
    type: 'roleplay',
    teil: 3,
    title: 'Kleidung kaufen im Geschäft',
    scenario: 'Sie sind in einem Bekleidungsgeschäft und möchten eine neue Hose kaufen. Sprechen Sie mit dem Verkäufer / der Verkäuferin.',
    questions: [
      'Was für eine Hose suchen Sie?',
      'Welche Größe brauchen Sie?',
      'Welche Farbe möchten Sie?',
      'Können Sie die Hose anprobieren?',
      'Wie finden Sie die Hose?',
      'Wie möchten Sie bezahlen?'
    ],
    keyPhrases: [
      'Ich suche eine Hose in Größe ...',
      'Haben Sie die auch in einer anderen Farbe?',
      'Kann ich die Hose anprobieren?',
      'Wo ist die Umkleidekabine?',
      'Die Hose passt gut / ist zu groß / ist zu klein.',
      'Was kostet die Hose?',
      'Kann ich mit Karte bezahlen?',
      'Ich nehme die Hose.'
    ],
    timeLimit: 120,
    tips: [
      'Begrüßen Sie den Verkäufer zuerst.',
      'Beschreiben Sie genau, was Sie suchen: Farbe, Größe, Stil.',
      'Fragen Sie nach dem Preis, bevor Sie sich entscheiden.',
      'Sagen Sie höflich, wenn etwas nicht passt.',
      'Bedanken Sie sich beim Bezahlen.'
    ]
  },
  {
    id: 'sp-ein-002',
    theme: 'einkaufen',
    type: 'picture-description',
    teil: 1,
    title: 'Ein Bild vom Wochenmarkt beschreiben',
    scenario: 'Sie sehen ein Bild von einem Wochenmarkt. Beschreiben Sie, was Sie sehen: die Menschen, die Stände und die Produkte.',
    questions: [
      'Was sehen Sie auf dem Bild?',
      'Was für Stände gibt es?',
      'Was kaufen die Leute?',
      'Wie sieht das Wetter aus?',
      'Gehen Sie gerne auf den Wochenmarkt? Warum?'
    ],
    keyPhrases: [
      'Auf dem Bild sehe ich ...',
      'Im Vordergrund steht ...',
      'Im Hintergrund kann man ... sehen.',
      'Es gibt Stände mit Obst, Gemüse und ...',
      'Die Leute kaufen frische Lebensmittel.',
      'Das Wetter sieht ... aus.',
      'Ich gehe gerne auf den Markt, weil ...',
      'Die Atmosphäre ist ...'
    ],
    timeLimit: 60,
    tips: [
      'Beschreiben Sie das Bild systematisch: Vordergrund, Mitte, Hintergrund.',
      'Nennen Sie Details: Farben, Personen, Gegenstände.',
      'Sagen Sie auch Ihre eigene Meinung zu dem Thema.',
      'Verwenden Sie Ortsangaben: links, rechts, in der Mitte.',
      'Sprechen Sie nicht zu schnell – nehmen Sie sich Zeit.'
    ]
  },
  {
    id: 'sp-ess-001',
    theme: 'essen',
    type: 'roleplay',
    teil: 3,
    title: 'Im Restaurant bestellen',
    scenario: 'Sie sind mit einem Freund in einem Restaurant. Bestellen Sie Essen und Getränke und fragen Sie nach der Rechnung.',
    questions: [
      'Was möchten Sie als Vorspeise?',
      'Was möchten Sie als Hauptgericht?',
      'Was möchten Sie trinken?',
      'Möchten Sie auch ein Dessert?',
      'Wie hat das Essen geschmeckt?',
      'Möchten Sie zusammen oder getrennt bezahlen?'
    ],
    keyPhrases: [
      'Ich hätte gerne ...',
      'Für mich bitte ...',
      'Können Sie mir ... empfehlen?',
      'Was ist die Tagessuppe?',
      'Ich nehme das Schnitzel mit Pommes.',
      'Zum Trinken hätte ich gerne ...',
      'Das Essen war sehr lecker.',
      'Die Rechnung, bitte. Wir zahlen getrennt.'
    ],
    timeLimit: 120,
    tips: [
      'Beginnen Sie mit der Getränkebestellung.',
      'Verwenden Sie höfliche Formen: „Ich hätte gerne ..." oder „Für mich bitte ...".',
      'Fragen Sie nach Empfehlungen des Kellners.',
      'Am Ende: Fragen Sie nach der Rechnung.',
      'Bedanken Sie sich beim Kellner.'
    ]
  },
  {
    id: 'sp-ess-002',
    theme: 'essen',
    type: 'monologue',
    teil: 1,
    title: 'Mein Lieblingsessen',
    scenario: 'Erzählen Sie über Ihr Lieblingsessen. Was essen Sie gerne? Können Sie es selbst kochen? Was essen Sie nicht so gerne?',
    questions: [
      'Was ist Ihr Lieblingsessen?',
      'Können Sie es selbst kochen?',
      'Wie oft kochen Sie zu Hause?',
      'Was essen Sie zum Frühstück?',
      'Gibt es etwas, das Sie nicht mögen?',
      'Essen Sie gerne im Restaurant oder zu Hause?'
    ],
    keyPhrases: [
      'Mein Lieblingsessen ist ...',
      'Ich esse am liebsten ...',
      'Ich koche gerne ... zu Hause.',
      'Zum Frühstück esse ich meistens ...',
      'Ich mag kein/keine ...',
      'Am Wochenende koche ich oft ...',
      'Manchmal gehe ich ins Restaurant.',
      'Ich esse gerne gesund, zum Beispiel ...'
    ],
    timeLimit: 90,
    tips: [
      'Strukturieren Sie Ihre Antwort: Lieblingsessen, Kochen, Essgewohnheiten.',
      'Nennen Sie konkrete Beispiele für Gerichte.',
      'Sagen Sie auch, was Sie nicht mögen.',
      'Erzählen Sie, ob Sie lieber zu Hause oder im Restaurant essen.',
      'Verwenden Sie verschiedene Verben: essen, kochen, probieren, schmecken.'
    ]
  },
  {
    id: 'sp-arb-001',
    theme: 'arbeit',
    type: 'monologue',
    teil: 1,
    title: 'Erzählen Sie über Ihre Arbeit',
    scenario: 'Sie sollen über Ihre Arbeit oder Ihren Beruf sprechen. Erzählen Sie, was Sie beruflich machen und wie Ihr Arbeitstag aussieht.',
    questions: [
      'Was sind Sie von Beruf?',
      'Wo arbeiten Sie?',
      'Was sind Ihre Aufgaben bei der Arbeit?',
      'Wie sind Ihre Arbeitszeiten?',
      'Was gefällt Ihnen an Ihrer Arbeit?',
      'Was würden Sie gerne anders machen?'
    ],
    keyPhrases: [
      'Ich arbeite als ... bei ...',
      'Mein Arbeitstag beginnt um ...',
      'Zu meinen Aufgaben gehört ...',
      'Ich arbeite von ... bis ...',
      'Am besten gefällt mir ...',
      'Meine Kollegen sind ...',
      'Ich verdiene ... Euro im Monat.',
      'In Zukunft möchte ich ...'
    ],
    timeLimit: 90,
    tips: [
      'Beginnen Sie mit Ihrem Beruf und Arbeitsplatz.',
      'Beschreiben Sie einen typischen Arbeitstag.',
      'Sagen Sie, was Ihnen gefällt und was nicht.',
      'Sprechen Sie auch über Ihre Kollegen.',
      'Beenden Sie mit Ihren Plänen für die Zukunft.'
    ]
  },
  {
    id: 'sp-arb-002',
    theme: 'arbeit',
    type: 'roleplay',
    teil: 3,
    title: 'Vorstellungsgespräch – einfache Fragen',
    scenario: 'Sie haben sich für eine Stelle als Verkäufer/Verkäuferin beworben. Beantworten Sie die Fragen im Vorstellungsgespräch.',
    questions: [
      'Können Sie sich kurz vorstellen?',
      'Warum möchten Sie bei uns arbeiten?',
      'Haben Sie Erfahrung in diesem Bereich?',
      'Was sind Ihre Stärken?',
      'Wann können Sie anfangen?',
      'Haben Sie noch Fragen an uns?'
    ],
    keyPhrases: [
      'Mein Name ist ... und ich bin ... Jahre alt.',
      'Ich habe Erfahrung als ...',
      'Ich möchte bei Ihnen arbeiten, weil ...',
      'Ich bin freundlich und zuverlässig.',
      'Ich kann sofort / ab ... anfangen.',
      'Ich arbeite gerne im Team.',
      'Wie sind die Arbeitszeiten?',
      'Was verdient man in dieser Position?'
    ],
    timeLimit: 120,
    tips: [
      'Sprechen Sie klar und selbstbewusst.',
      'Bereiten Sie eine kurze Vorstellung vor: Name, Alter, Ausbildung, Erfahrung.',
      'Nennen Sie konkrete Stärken und Beispiele.',
      'Stellen Sie am Ende eigene Fragen.',
      'Verwenden Sie die Sie-Form (Höflichkeitsform).'
    ]
  },
  {
    id: 'sp-fre-001',
    theme: 'freizeit',
    type: 'monologue',
    teil: 1,
    title: 'Meine Hobbys und Freizeit',
    scenario: 'Erzählen Sie über Ihre Hobbys und was Sie in Ihrer Freizeit gerne machen.',
    questions: [
      'Was machen Sie in Ihrer Freizeit?',
      'Haben Sie ein besonderes Hobby?',
      'Treiben Sie Sport? Welchen?',
      'Wie oft machen Sie Ihr Hobby?',
      'Machen Sie etwas mit Freunden zusammen?'
    ],
    keyPhrases: [
      'In meiner Freizeit mache ich gerne ...',
      'Mein Hobby ist ...',
      'Ich spiele gerne ...',
      'Am Wochenende gehe ich oft ...',
      'Ich treibe Sport, zum Beispiel ...',
      'Mit meinen Freunden gehe ich ...',
      'Das mache ich seit ... Jahren.',
      'Das macht mir sehr viel Spaß.'
    ],
    timeLimit: 90,
    tips: [
      'Nennen Sie zwei oder drei Hobbys.',
      'Sagen Sie, wie oft und wann Sie Ihr Hobby machen.',
      'Erzählen Sie, warum Ihnen das Hobby gefällt.',
      'Erwähnen Sie, ob Sie allein oder mit anderen Ihr Hobby machen.',
      'Vermeiden Sie zu kurze Antworten – erklären Sie ein bisschen.'
    ]
  },
  {
    id: 'sp-fre-002',
    theme: 'freizeit',
    type: 'roleplay',
    teil: 3,
    title: 'Ein Wochenende planen',
    scenario: 'Sie planen mit einem Freund / einer Freundin ein gemeinsames Wochenende. Besprechen Sie, was Sie machen möchten.',
    questions: [
      'Was möchten Sie am Samstag machen?',
      'Und was am Sonntag?',
      'Wollen wir draußen oder drinnen etwas machen?',
      'Um wie viel Uhr sollen wir uns treffen?',
      'Wo treffen wir uns?',
      'Was müssen wir mitnehmen?'
    ],
    keyPhrases: [
      'Am Samstag könnten wir ...',
      'Hast du Lust auf ...?',
      'Ich schlage vor, dass wir ...',
      'Treffen wir uns um ... Uhr am ...?',
      'Gute Idee! Und danach ...',
      'Wir sollten auch ... machen.',
      'Das klingt toll!',
      'Vergiss nicht, ... mitzubringen.'
    ],
    timeLimit: 120,
    tips: [
      'Machen Sie konkrete Vorschläge für Aktivitäten.',
      'Einigen Sie sich auf Uhrzeiten und Treffpunkte.',
      'Reagieren Sie auf die Vorschläge des Partners positiv oder mit Gegenvorschlägen.',
      'Planen Sie den ganzen Tag: Vormittag, Nachmittag, Abend.',
      'Fassen Sie am Ende den Plan zusammen.'
    ]
  },
  {
    id: 'sp-rei-001',
    theme: 'reisen',
    type: 'monologue',
    teil: 1,
    title: 'Meine letzte Reise',
    scenario: 'Erzählen Sie über eine Reise, die Sie gemacht haben. Wohin sind Sie gereist und was haben Sie erlebt?',
    questions: [
      'Wohin sind Sie gereist?',
      'Wie lange waren Sie dort?',
      'Wie sind Sie dorthin gekommen?',
      'Was haben Sie dort gemacht?',
      'Was hat Ihnen am besten gefallen?'
    ],
    keyPhrases: [
      'Letzten Sommer bin ich nach ... gefahren.',
      'Ich war ... Tage / Wochen dort.',
      'Wir sind mit dem Zug / Flugzeug geflogen.',
      'Dort haben wir ... besichtigt.',
      'Am besten hat mir ... gefallen.',
      'Das Wetter war ...',
      'Wir haben in einem Hotel übernachtet.',
      'Die Reise war wunderschön.'
    ],
    timeLimit: 90,
    tips: [
      'Erzählen Sie chronologisch: Anreise, Aufenthalt, Abreise.',
      'Verwenden Sie das Perfekt für die Vergangenheit.',
      'Beschreiben Sie das Wetter, das Essen und die Sehenswürdigkeiten.',
      'Sagen Sie, was Ihnen besonders gefallen hat.',
      'Beenden Sie mit einem Fazit: „Die Reise war toll!".'
    ]
  },
  {
    id: 'sp-rei-002',
    theme: 'reisen',
    type: 'roleplay',
    teil: 3,
    title: 'Eine Reise im Reisebüro buchen',
    scenario: 'Sie sind im Reisebüro und möchten eine Reise buchen. Sprechen Sie mit dem Reisebüromitarbeiter über Ihre Wünsche.',
    questions: [
      'Wohin möchten Sie reisen?',
      'Wann möchten Sie reisen?',
      'Wie lange möchten Sie bleiben?',
      'Möchten Sie ein Hotel oder eine Ferienwohnung?',
      'Wie möchten Sie reisen – mit dem Zug oder Flugzeug?',
      'Wie viel darf die Reise kosten?'
    ],
    keyPhrases: [
      'Ich möchte gerne eine Reise nach ... buchen.',
      'Ich möchte im ... für ... Tage verreisen.',
      'Haben Sie ein Angebot für ...?',
      'Ich hätte gerne ein Hotel mit ...',
      'Ist Frühstück inklusive?',
      'Was kostet die Reise insgesamt?',
      'Kann ich auch stornieren?',
      'Das klingt gut, ich buche das.'
    ],
    timeLimit: 120,
    tips: [
      'Sagen Sie klar, was Sie möchten: Ziel, Zeitraum, Budget.',
      'Stellen Sie Fragen zu den Angeboten.',
      'Vergleichen Sie verschiedene Optionen.',
      'Fragen Sie nach Extras: Frühstück, Transfer, Versicherung.',
      'Entscheiden Sie sich am Ende und bestätigen Sie die Buchung.'
    ]
  },
  {
    id: 'sp-ges-001',
    theme: 'gesundheit',
    type: 'roleplay',
    teil: 3,
    title: 'Beim Arzt – Beschwerden beschreiben',
    scenario: 'Sie sind krank und gehen zum Arzt. Beschreiben Sie Ihre Beschwerden und hören Sie auf die Ratschläge des Arztes.',
    questions: [
      'Was fehlt Ihnen?',
      'Seit wann haben Sie die Beschwerden?',
      'Haben Sie Fieber?',
      'Haben Sie schon Medikamente genommen?',
      'Haben Sie Allergien?',
      'Wann können Sie wieder zur Arbeit gehen?'
    ],
    keyPhrases: [
      'Ich habe seit ... Tagen Kopfschmerzen.',
      'Mir tut der Hals weh.',
      'Ich habe Husten und Schnupfen.',
      'Ich fühle mich sehr müde.',
      'Ich habe kein Fieber / leichtes Fieber.',
      'Ich habe noch keine Medikamente genommen.',
      'Was soll ich machen?',
      'Brauche ich ein Rezept?'
    ],
    timeLimit: 120,
    tips: [
      'Beschreiben Sie Ihre Symptome klar und genau.',
      'Sagen Sie, seit wann Sie krank sind.',
      'Hören Sie auf die Fragen des Arztes und antworten Sie.',
      'Fragen Sie, was Sie tun sollen.',
      'Fragen Sie nach einem Rezept oder einer Krankschreibung.'
    ]
  },
  {
    id: 'sp-ges-002',
    theme: 'gesundheit',
    type: 'monologue',
    teil: 1,
    title: 'Gesund leben – Was machen Sie für Ihre Gesundheit?',
    scenario: 'Erzählen Sie, was Sie tun, um gesund zu bleiben. Sprechen Sie über Ernährung, Sport und Gewohnheiten.',
    questions: [
      'Ernähren Sie sich gesund? Was essen Sie?',
      'Treiben Sie Sport? Wie oft?',
      'Wie viel schlafen Sie pro Nacht?',
      'Waren Sie dieses Jahr beim Arzt?',
      'Was möchten Sie in Zukunft besser machen?'
    ],
    keyPhrases: [
      'Ich versuche, gesund zu leben.',
      'Ich esse viel Obst und Gemüse.',
      'Ich trinke viel Wasser.',
      'Ich gehe dreimal pro Woche joggen.',
      'Ich schlafe meistens ... Stunden.',
      'Ich versuche, weniger Zucker zu essen.',
      'Ich gehe einmal im Jahr zum Arzt.',
      'In Zukunft möchte ich mehr ...'
    ],
    timeLimit: 90,
    tips: [
      'Gliedern Sie Ihre Antwort in Themen: Ernährung, Sport, Schlaf.',
      'Seien Sie ehrlich – Sie müssen nicht perfekt sein.',
      'Nennen Sie auch Dinge, die Sie verbessern möchten.',
      'Verwenden Sie Ausdrücke wie „Ich versuche ..." oder „Meistens ...".',
      'Geben Sie konkrete Beispiele.'
    ]
  },
  {
    id: 'sp-med-001',
    theme: 'medien',
    type: 'monologue',
    teil: 1,
    title: 'Medien in meinem Alltag',
    scenario: 'Erzählen Sie, welche Medien Sie im Alltag benutzen. Sprechen Sie über Handy, Internet, Fernsehen und soziale Medien.',
    questions: [
      'Wie oft benutzen Sie Ihr Handy?',
      'Wofür nutzen Sie das Internet?',
      'Sehen Sie gerne fern? Was sehen Sie?',
      'Nutzen Sie soziale Medien? Welche?',
      'Lesen Sie Zeitung oder Nachrichten online?',
      'Verbringen Sie zu viel Zeit mit Medien?'
    ],
    keyPhrases: [
      'Ich benutze mein Handy jeden Tag.',
      'Im Internet suche ich oft nach ...',
      'Ich sehe gerne ... im Fernsehen.',
      'Ich benutze ... für soziale Medien.',
      'Nachrichten lese ich meistens online.',
      'Ich höre gerne Podcasts über ...',
      'Manchmal finde ich, dass ich zu viel ...',
      'Ohne mein Handy kann ich nicht leben!'
    ],
    timeLimit: 90,
    tips: [
      'Sprechen Sie über verschiedene Medien: Handy, Computer, Fernseher.',
      'Nennen Sie konkrete Beispiele: Apps, Sendungen, Webseiten.',
      'Sagen Sie auch Ihre Meinung: positiv und negativ.',
      'Sprechen Sie über Ihre täglichen Gewohnheiten.',
      'Beenden Sie mit einer persönlichen Einschätzung.'
    ]
  },
  {
    id: 'sp-med-002',
    theme: 'medien',
    type: 'roleplay',
    teil: 3,
    title: 'Ein neues Handy kaufen',
    scenario: 'Sie möchten ein neues Handy kaufen und sind in einem Elektronikgeschäft. Fragen Sie den Verkäufer um Rat.',
    questions: [
      'Was für ein Handy suchen Sie?',
      'Wie viel möchten Sie ausgeben?',
      'Welche Funktionen sind Ihnen wichtig?',
      'Brauchen Sie auch einen neuen Vertrag?',
      'Haben Sie schon eine bestimmte Marke im Kopf?',
      'Möchten Sie das Handy mit oder ohne Vertrag?'
    ],
    keyPhrases: [
      'Ich suche ein neues Handy.',
      'Ich möchte nicht mehr als ... Euro ausgeben.',
      'Mir ist eine gute Kamera wichtig.',
      'Das Handy sollte einen großen Bildschirm haben.',
      'Können Sie mir ein Modell empfehlen?',
      'Was ist der Unterschied zwischen ... und ...?',
      'Gibt es gerade ein Angebot?',
      'Ich nehme dieses Modell.'
    ],
    timeLimit: 120,
    tips: [
      'Sagen Sie dem Verkäufer, was Sie suchen und wie viel Sie ausgeben möchten.',
      'Stellen Sie Fragen zu den verschiedenen Modellen.',
      'Vergleichen Sie Funktionen und Preise.',
      'Lassen Sie sich beraten, bevor Sie sich entscheiden.',
      'Fragen Sie nach Garantie und Rückgaberecht.'
    ]
  },
  {
    id: 'sp-nat-001',
    theme: 'natur',
    type: 'picture-description',
    teil: 1,
    title: 'Ein Bild von einem Park beschreiben',
    scenario: 'Sie sehen ein Bild von einem Park im Frühling. Beschreiben Sie, was Sie sehen, und erzählen Sie, ob Sie gerne in der Natur sind.',
    questions: [
      'Was sehen Sie auf dem Bild?',
      'Welche Jahreszeit ist es?',
      'Was machen die Menschen im Park?',
      'Wie ist das Wetter?',
      'Gehen Sie gerne in den Park? Warum?'
    ],
    keyPhrases: [
      'Auf dem Bild sehe ich einen Park.',
      'Es ist Frühling und die Bäume sind grün.',
      'Im Park gibt es einen See und ...',
      'Einige Leute sitzen auf einer Bank.',
      'Kinder spielen auf dem Spielplatz.',
      'Das Wetter ist sonnig und warm.',
      'Ich gehe gerne in den Park, weil ...',
      'Die Natur ist sehr schön.'
    ],
    timeLimit: 60,
    tips: [
      'Beginnen Sie mit dem Gesamteindruck des Bildes.',
      'Beschreiben Sie die Natur: Bäume, Blumen, Wasser.',
      'Erwähnen Sie die Personen und was sie machen.',
      'Sagen Sie auch Ihre eigene Meinung über Parks und Natur.',
      'Verwenden Sie Adjektive für eine lebendige Beschreibung.'
    ]
  },
  {
    id: 'sp-nat-002',
    theme: 'natur',
    type: 'roleplay',
    teil: 3,
    title: 'Einen Wanderausflug planen',
    scenario: 'Sie planen mit einem Freund eine Wanderung am Wochenende. Besprechen Sie die Details: Wohin, wann, was mitnehmen?',
    questions: [
      'Wohin möchten Sie wandern?',
      'Wie lang soll die Wanderung sein?',
      'Was müssen wir einpacken?',
      'Was machen wir, wenn das Wetter schlecht ist?',
      'Wo können wir eine Pause machen?',
      'Wie kommen wir zum Startpunkt?'
    ],
    keyPhrases: [
      'Ich kenne einen schönen Wanderweg bei ...',
      'Die Wanderung dauert etwa ... Stunden.',
      'Wir sollten ... und ... einpacken.',
      'Wenn es regnet, können wir ...',
      'Unterwegs gibt es eine Hütte, wo wir ...',
      'Wir fahren mit dem Auto / Bus zum Start.',
      'Lass uns um ... Uhr losfahren.',
      'Vergiss nicht, ... mitzunehmen!'
    ],
    timeLimit: 120,
    tips: [
      'Machen Sie einen konkreten Vorschlag für den Wanderort.',
      'Besprechen Sie die Ausrüstung: Schuhe, Wasser, Essen, Regenjacke.',
      'Planen Sie einen Alternativplan für schlechtes Wetter.',
      'Einigen Sie sich auf Uhrzeit und Treffpunkt.',
      'Verteilen Sie die Aufgaben: Wer bringt was mit?'
    ]
  },
  {
    id: 'sp-fam-t2-001',
    theme: 'familie',
    type: 'alltagssituation',
    teil: 2,
    title: 'Kind krank melden',
    scenario: 'Ihr Kind ist krank und kann heute nicht in die Schule gehen. Sie rufen in der Schule an und melden Ihr Kind krank. Fragen Sie auch, wann Sie die Hausaufgaben abholen können.',
    questions: [
      'Was ist das Problem?',
      'Wie lange wird Ihr Kind zu Hause bleiben?',
      'Wann können Sie die Hausaufgaben abholen?',
      'Müssen Sie ein Attest bringen?'
    ],
    keyPhrases: [
      'Guten Tag, hier spricht ..., die Mutter / der Vater von ...',
      'Mein Sohn / Meine Tochter ist leider krank.',
      'Er / Sie kann heute nicht in die Schule kommen.',
      'Er / Sie hat Fieber und Halsschmerzen.',
      'Wann kann ich die Hausaufgaben abholen?',
      'Brauchen Sie ein Attest vom Arzt?',
      'Ich bringe das Attest morgen vorbei.',
      'Vielen Dank für Ihr Verständnis.'
    ],
    timeLimit: 60,
    tips: [
      'Start by greeting and identifying yourself as the parent.',
      'Clearly state that your child is sick and cannot attend.',
      'Ask practical questions about homework and documentation.',
      'Be polite and thank the person for their understanding.'
    ]
  },
  {
    id: 'sp-fam-t2-002',
    theme: 'familie',
    type: 'alltagssituation',
    teil: 2,
    title: 'Partner bei der Familie vorstellen',
    scenario: 'Sie sind auf einem Familientreffen und stellen Ihren neuen Partner / Ihre neue Partnerin Ihrer Großmutter vor. Machen Sie Small Talk und erzählen Sie, wie Sie sich kennengelernt haben.',
    questions: [
      'Wie stellen Sie Ihren Partner vor?',
      'Wie haben Sie sich kennengelernt?',
      'Was macht Ihr Partner beruflich?',
      'Worüber können Sie Small Talk machen?'
    ],
    keyPhrases: [
      'Oma, das ist mein Freund / meine Freundin ...',
      'Wir haben uns vor ... Monaten kennengelernt.',
      'Wir haben uns bei der Arbeit / im Sportverein kennengelernt.',
      'Er / Sie arbeitet als ...',
      'Er / Sie kommt aus ...',
      'Wir wohnen zusammen in ...',
      'Es freut mich, dass ihr euch kennenlernt.',
      'Möchtest du noch etwas über ihn / sie wissen?'
    ],
    timeLimit: 60,
    tips: [
      'Use a warm, friendly tone appropriate for family settings.',
      'Introduce your partner with basic information: name, job, origin.',
      'Share a short story about how you met.',
      'Keep the conversation light and positive.'
    ]
  },
  {
    id: 'sp-woh-t2-001',
    theme: 'wohnen',
    type: 'alltagssituation',
    teil: 2,
    title: 'Heizung kaputt melden',
    scenario: 'Die Heizung in Ihrer Wohnung ist kaputt. Es ist sehr kalt. Sie rufen Ihren Vermieter an und berichten das Problem. Fragen Sie, wann die Heizung repariert werden kann.',
    questions: [
      'Was ist das Problem?',
      'Seit wann funktioniert die Heizung nicht?',
      'Wann kann jemand kommen?',
      'Was sollen Sie bis dahin machen?'
    ],
    keyPhrases: [
      'Guten Tag, hier spricht ..., Ihr Mieter aus der ...',
      'Ich rufe an, weil die Heizung nicht funktioniert.',
      'Seit gestern ist die Heizung kalt.',
      'Es ist sehr kalt in der Wohnung.',
      'Können Sie bitte einen Handwerker schicken?',
      'Wann kann jemand vorbeikommen?',
      'Ich bin den ganzen Tag zu Hause.',
      'Vielen Dank, ich warte auf Ihren Anruf.'
    ],
    timeLimit: 60,
    tips: [
      'Identify yourself as a tenant and give your address.',
      'Describe the problem clearly and say when it started.',
      'Ask when a repair person can come.',
      'Mention your availability so they can schedule a visit.'
    ]
  },
  {
    id: 'sp-woh-t2-002',
    theme: 'wohnen',
    type: 'alltagssituation',
    teil: 2,
    title: 'Wohnungsanzeige anrufen',
    scenario: 'Sie haben eine Wohnungsanzeige in der Zeitung gelesen. Sie rufen an und fragen nach Details: Wie groß ist die Wohnung? Was kostet die Miete? Wann können Sie die Wohnung besichtigen?',
    questions: [
      'Warum rufen Sie an?',
      'Welche Informationen brauchen Sie?',
      'Wann möchten Sie die Wohnung sehen?',
      'Haben Sie noch andere Fragen?'
    ],
    keyPhrases: [
      'Guten Tag, ich rufe wegen der Wohnungsanzeige an.',
      'Wie groß ist die Wohnung?',
      'Wie hoch ist die Miete?',
      'Sind die Nebenkosten inklusive?',
      'Wann kann ich die Wohnung besichtigen?',
      'Gibt es einen Balkon oder eine Terrasse?',
      'Ich interessiere mich sehr für die Wohnung.',
      'Können wir einen Termin vereinbaren?'
    ],
    timeLimit: 60,
    tips: [
      'State immediately why you are calling.',
      'Ask about the key details: size, rent, utilities.',
      'Request a viewing appointment.',
      'Be polite and express genuine interest in the apartment.'
    ]
  },
  {
    id: 'sp-ein-t2-001',
    theme: 'einkaufen',
    type: 'alltagssituation',
    teil: 2,
    title: 'Hemd umtauschen',
    scenario: 'Sie haben ein Hemd gekauft, aber es ist zu klein. Sie gehen zurück ins Geschäft und möchten das Hemd in einer größeren Größe umtauschen. Sie haben den Kassenbon dabei.',
    questions: [
      'Was ist das Problem?',
      'Was möchten Sie machen?',
      'Haben Sie den Kassenbon?',
      'Welche Größe brauchen Sie?'
    ],
    keyPhrases: [
      'Guten Tag, ich habe dieses Hemd hier gekauft.',
      'Leider ist es zu klein.',
      'Kann ich es bitte umtauschen?',
      'Ich brauche eine Nummer größer.',
      'Hier ist der Kassenbon.',
      'Haben Sie das Hemd auch in Größe ...?',
      'Kann ich es anprobieren?',
      'Vielen Dank für Ihre Hilfe.'
    ],
    timeLimit: 60,
    tips: [
      'Greet the staff and explain the situation calmly.',
      'Have your receipt ready to show.',
      'Clearly state what size you need instead.',
      'Ask if you can try on the replacement before deciding.'
    ]
  },
  {
    id: 'sp-ein-t2-002',
    theme: 'einkaufen',
    type: 'alltagssituation',
    teil: 2,
    title: 'Neues Handy kaufen',
    scenario: 'Sie sind im Elektronikgeschäft und möchten ein neues Handy kaufen. Fragen Sie nach Preisen, Funktionen und Garantie.',
    questions: [
      'Was für ein Handy suchen Sie?',
      'Wie viel möchten Sie ausgeben?',
      'Welche Funktionen sind wichtig?',
      'Fragen Sie nach der Garantie?'
    ],
    keyPhrases: [
      'Ich suche ein neues Handy.',
      'Was können Sie mir empfehlen?',
      'Wie viel kostet dieses Modell?',
      'Hat das Handy eine gute Kamera?',
      'Wie lange ist die Garantie?',
      'Gibt es das auch in einer anderen Farbe?',
      'Kann ich auch in Raten bezahlen?',
      'Ich nehme dieses Modell, bitte.'
    ],
    timeLimit: 60,
    tips: [
      'Tell the salesperson what you are looking for.',
      'Ask about specific features that matter to you.',
      'Always ask about warranty and return policy.',
      'Compare at least two options before deciding.'
    ]
  },
  {
    id: 'sp-ess-t2-001',
    theme: 'essen',
    type: 'alltagssituation',
    teil: 2,
    title: 'Essen ist kalt – Beschwerde',
    scenario: 'Sie sind in einem Restaurant. Ihr Essen ist leider kalt. Sie rufen den Kellner und beschweren sich höflich. Bitten Sie um ein neues Gericht.',
    questions: [
      'Was ist das Problem?',
      'Wie sagen Sie es dem Kellner?',
      'Was möchten Sie stattdessen?',
      'Wie bleiben Sie höflich?'
    ],
    keyPhrases: [
      'Entschuldigung, können Sie bitte kommen?',
      'Mein Essen ist leider kalt.',
      'Könnten Sie mir bitte ein neues Gericht bringen?',
      'Das tut mir leid, aber das Essen ist nicht warm genug.',
      'Ich hätte gerne ein frisches Gericht.',
      'Wäre es möglich, das noch einmal zu erwärmen?',
      'Vielen Dank, das ist sehr nett.',
      'Ich warte gerne, kein Problem.'
    ],
    timeLimit: 60,
    tips: [
      'Stay polite even when complaining - use Konjunktiv II forms.',
      'Clearly describe the problem without being aggressive.',
      'Suggest a solution (new dish or reheat).',
      'Thank the waiter for helping resolve the issue.'
    ]
  },
  {
    id: 'sp-ess-t2-002',
    theme: 'essen',
    type: 'alltagssituation',
    teil: 2,
    title: 'Essen für eine Party bestellen',
    scenario: 'Sie möchten Essen für eine Geburtstagsparty bestellen. Sie rufen beim Restaurant an und fragen nach dem Menü, den Preisen und der Lieferung.',
    questions: [
      'Für wie viele Personen bestellen Sie?',
      'Was möchten Sie bestellen?',
      'Wann soll das Essen geliefert werden?',
      'Wie viel kostet es?'
    ],
    keyPhrases: [
      'Guten Tag, ich möchte gerne Essen für eine Party bestellen.',
      'Wir sind ungefähr 15 Personen.',
      'Was können Sie für eine Gruppe empfehlen?',
      'Haben Sie auch vegetarische Gerichte?',
      'Was kostet das pro Person?',
      'Können Sie das Essen am Samstag liefern?',
      'Um wie viel Uhr können Sie liefern?',
      'Kann ich im Voraus bezahlen?'
    ],
    timeLimit: 60,
    tips: [
      'State clearly what the occasion is and how many guests.',
      'Ask about group menus or catering options.',
      'Clarify delivery time, location, and payment.',
      'Ask about dietary options for different guests.'
    ]
  },
  {
    id: 'sp-arb-t2-001',
    theme: 'arbeit',
    type: 'alltagssituation',
    teil: 2,
    title: 'Einen Tag frei nehmen',
    scenario: 'Sie müssen morgen einen Tag frei nehmen. Sie gehen zu Ihrem Chef und bitten um einen freien Tag. Erklären Sie den Grund.',
    questions: [
      'Warum brauchen Sie frei?',
      'Wie fragen Sie Ihren Chef?',
      'Wer kann Ihre Arbeit übernehmen?',
      'Wann kommen Sie zurück?'
    ],
    keyPhrases: [
      'Entschuldigung, hätten Sie kurz Zeit?',
      'Ich möchte Sie um einen freien Tag bitten.',
      'Ich habe morgen einen wichtigen Arzttermin.',
      'Könnte ich morgen freinehmen?',
      'Mein Kollege kann meine Aufgaben übernehmen.',
      'Ich bin übermorgen wieder da.',
      'Ich hole die Arbeit nächste Woche nach.',
      'Vielen Dank, das ist sehr nett von Ihnen.'
    ],
    timeLimit: 60,
    tips: [
      'Be respectful and ask if your boss has a moment to talk.',
      'Give a clear reason for needing the day off.',
      'Offer a solution for your workload while you are away.',
      'Thank your boss for their understanding.'
    ]
  },
  {
    id: 'sp-arb-t2-002',
    theme: 'arbeit',
    type: 'alltagssituation',
    teil: 2,
    title: 'Verspätung bei der Arbeit',
    scenario: 'Sie kommen heute zu spät zur Arbeit, weil Ihr Zug Verspätung hat. Sie rufen Ihren Kollegen an und erklären die Situation.',
    questions: [
      'Was ist passiert?',
      'Wie spät kommen Sie?',
      'Was soll Ihr Kollege machen?',
      'Wie entschuldigen Sie sich?'
    ],
    keyPhrases: [
      'Hallo, hier ist .... Ich komme heute leider später.',
      'Mein Zug hat 30 Minuten Verspätung.',
      'Ich bin wahrscheinlich erst um ... Uhr im Büro.',
      'Könntest du bitte dem Chef Bescheid sagen?',
      'Ich habe um 9 Uhr ein Meeting – kannst du dort anfangen?',
      'Es tut mir wirklich leid.',
      'Ich komme so schnell wie möglich.',
      'Danke, dass du mir hilfst!'
    ],
    timeLimit: 60,
    tips: [
      'Call as soon as you know you will be late.',
      'Explain the reason briefly and clearly.',
      'Ask your colleague to cover for you if needed.',
      'Apologize and give an estimated arrival time.'
    ]
  },
  {
    id: 'sp-fre-t2-001',
    theme: 'freizeit',
    type: 'alltagssituation',
    teil: 2,
    title: 'Fitnesskurs anmelden',
    scenario: 'Sie möchten sich für einen Fitnesskurs im Sportzentrum anmelden. Fragen Sie nach Zeiten, Kosten und was Sie mitbringen müssen.',
    questions: [
      'Welchen Kurs möchten Sie besuchen?',
      'Wann findet der Kurs statt?',
      'Was kostet der Kurs?',
      'Was müssen Sie mitbringen?'
    ],
    keyPhrases: [
      'Guten Tag, ich interessiere mich für einen Fitnesskurs.',
      'Welche Kurse bieten Sie an?',
      'Wann findet der Yoga-Kurs / Pilates-Kurs statt?',
      'Was kostet die Mitgliedschaft pro Monat?',
      'Kann ich eine Probestunde machen?',
      'Was muss ich zum Kurs mitbringen?',
      'Gibt es auch Abendkurse?',
      'Ich möchte mich gerne anmelden.'
    ],
    timeLimit: 60,
    tips: [
      'Ask about available courses and schedules.',
      'Inquire about trial sessions before committing.',
      'Ask what equipment or clothing you need to bring.',
      'Clarify membership costs and cancellation policy.'
    ]
  },
  {
    id: 'sp-fre-t2-002',
    theme: 'freizeit',
    type: 'alltagssituation',
    teil: 2,
    title: 'Konzertkarten kaufen',
    scenario: 'Sie möchten Konzertkarten für ein Konzert am Wochenende kaufen. Rufen Sie an und fragen Sie nach verfügbaren Terminen, Preisen und Plätzen.',
    questions: [
      'Für welches Konzert möchten Sie Karten?',
      'Wie viele Karten brauchen Sie?',
      'Welche Plätze möchten Sie?',
      'Wie möchten Sie bezahlen?'
    ],
    keyPhrases: [
      'Guten Tag, ich möchte gerne Konzertkarten kaufen.',
      'Gibt es noch Karten für Samstag?',
      'Ich brauche zwei Karten, bitte.',
      'Was kosten die Plätze in der Mitte?',
      'Gibt es auch günstigere Plätze?',
      'Kann ich die Karten online bezahlen?',
      'Wann beginnt das Konzert?',
      'Kann ich die Karten auch an der Abendkasse abholen?'
    ],
    timeLimit: 60,
    tips: [
      'Specify which event and date you are interested in.',
      'Ask about seat categories and their prices.',
      'Clarify payment and ticket pickup options.',
      'Ask about the start time and any other practical details.'
    ]
  },
  {
    id: 'sp-rei-t2-001',
    theme: 'reisen',
    type: 'alltagssituation',
    teil: 2,
    title: 'Zug ausgefallen – Alternativen fragen',
    scenario: 'Sie sind am Bahnhof und Ihr Zug ist ausgefallen. Gehen Sie zur Information und fragen Sie nach Alternativen. Wann fährt der nächste Zug? Gibt es einen Bus?',
    questions: [
      'Was ist passiert?',
      'Wann fährt der nächste Zug?',
      'Gibt es eine Alternative?',
      'Bekommen Sie Ihr Geld zurück?'
    ],
    keyPhrases: [
      'Entschuldigung, mein Zug nach ... ist ausgefallen.',
      'Wann fährt der nächste Zug nach ...?',
      'Gibt es einen anderen Zug oder einen Bus?',
      'Von welchem Gleis fährt der Zug?',
      'Muss ich umsteigen?',
      'Kann ich mein Ticket für den nächsten Zug benutzen?',
      'Bekomme ich eine Erstattung?',
      'Wo kann ich mich beschweren?'
    ],
    timeLimit: 60,
    tips: [
      'Go to the information desk and explain your situation.',
      'Ask about the next available connection.',
      'Clarify if your current ticket is still valid.',
      'Ask about refund options if there is a long delay.'
    ]
  },
  {
    id: 'sp-rei-t2-002',
    theme: 'reisen',
    type: 'alltagssituation',
    teil: 2,
    title: 'Hotel-Reservierung nicht gefunden',
    scenario: 'Sie kommen im Hotel an, aber Ihre Reservierung kann nicht gefunden werden. Erklären Sie die Situation an der Rezeption. Zeigen Sie Ihre Bestätigung und bitten Sie um Hilfe.',
    questions: [
      'Was ist das Problem?',
      'Haben Sie eine Bestätigung?',
      'Was erwarten Sie vom Hotel?',
      'Wie reagieren Sie, wenn es kein Zimmer gibt?'
    ],
    keyPhrases: [
      'Guten Tag, ich habe eine Reservierung auf den Namen ...',
      'Ich habe online gebucht und eine Bestätigung bekommen.',
      'Hier ist meine Buchungsbestätigung.',
      'Es muss ein Fehler sein.',
      'Können Sie bitte noch einmal nachschauen?',
      'Haben Sie vielleicht ein anderes Zimmer frei?',
      'Ich brauche ein Zimmer für zwei Nächte.',
      'Können Sie mir bitte helfen, eine Lösung zu finden?'
    ],
    timeLimit: 60,
    tips: [
      'Stay calm and polite even if frustrated.',
      'Show your booking confirmation as evidence.',
      'Ask the receptionist to check again or find an alternative.',
      'Be flexible and open to alternative solutions.'
    ]
  },
  {
    id: 'sp-ges-t2-001',
    theme: 'gesundheit',
    type: 'alltagssituation',
    teil: 2,
    title: 'Arzttermin vereinbaren',
    scenario: 'Sie fühlen sich nicht gut und rufen bei einer Arztpraxis an. Sie möchten einen Termin machen und beschreiben kurz Ihre Beschwerden.',
    questions: [
      'Was fehlt Ihnen?',
      'Seit wann haben Sie die Beschwerden?',
      'Wann hätten Sie gerne einen Termin?',
      'Waren Sie schon einmal in dieser Praxis?'
    ],
    keyPhrases: [
      'Guten Tag, ich möchte gerne einen Termin machen.',
      'Ich habe seit zwei Tagen starke Kopfschmerzen.',
      'Ich habe auch Fieber und Husten.',
      'Haben Sie heute noch einen Termin frei?',
      'Wann ist der nächste freie Termin?',
      'Ich bin ein neuer Patient / eine neue Patientin.',
      'Soll ich meine Versichertenkarte mitbringen?',
      'Vielen Dank, bis morgen dann.'
    ],
    timeLimit: 60,
    tips: [
      'Greet the receptionist and state that you need an appointment.',
      'Briefly describe your symptoms at A2 level.',
      'Ask about available times and what to bring.',
      'Confirm the appointment details before hanging up.'
    ]
  },
  {
    id: 'sp-ges-t2-002',
    theme: 'gesundheit',
    type: 'alltagssituation',
    teil: 2,
    title: 'In der Apotheke – Medikamente kaufen',
    scenario: 'Sie sind in der Apotheke und brauchen Medikamente gegen Kopfschmerzen und Erkältung. Fragen Sie nach den richtigen Medikamenten und nach der Dosierung.',
    questions: [
      'Was brauchen Sie?',
      'Haben Sie ein Rezept?',
      'Wie sollen Sie das Medikament nehmen?',
      'Gibt es etwas, das Sie beachten müssen?'
    ],
    keyPhrases: [
      'Guten Tag, ich brauche etwas gegen Kopfschmerzen.',
      'Ich habe auch eine Erkältung und Schnupfen.',
      'Haben Sie etwas ohne Rezept?',
      'Was können Sie mir empfehlen?',
      'Wie oft soll ich die Tabletten nehmen?',
      'Gibt es Nebenwirkungen?',
      'Wie viel kostet das Medikament?',
      'Darf ich das Medikament auch auf nüchternen Magen nehmen?'
    ],
    timeLimit: 60,
    tips: [
      'Describe your symptoms clearly to the pharmacist.',
      'Ask if the medicine is available without a prescription.',
      'Always ask about dosage and possible side effects.',
      'Ask about any restrictions (e.g., taking with food).'
    ]
  },
  {
    id: 'sp-med-t2-001',
    theme: 'medien',
    type: 'alltagssituation',
    teil: 2,
    title: 'Internet funktioniert nicht',
    scenario: 'Ihr Internet funktioniert seit gestern nicht mehr. Sie rufen bei Ihrem Internetanbieter an und beschreiben das Problem. Fragen Sie, wann das Problem gelöst wird.',
    questions: [
      'Was ist das Problem?',
      'Seit wann funktioniert es nicht?',
      'Was haben Sie schon versucht?',
      'Wann wird das Problem gelöst?'
    ],
    keyPhrases: [
      'Guten Tag, mein Internet funktioniert nicht mehr.',
      'Das Problem ist seit gestern Abend.',
      'Ich habe den Router schon neu gestartet.',
      'Aber es funktioniert immer noch nicht.',
      'Können Sie das Problem von dort aus prüfen?',
      'Muss ein Techniker kommen?',
      'Wann kann das Problem gelöst werden?',
      'Meine Kundennummer ist ...'
    ],
    timeLimit: 60,
    tips: [
      'Have your customer number ready before calling.',
      'Describe the problem and what you have already tried.',
      'Ask if they can diagnose the issue remotely.',
      'Get a timeline for when the issue will be fixed.'
    ]
  },
  {
    id: 'sp-med-t2-002',
    theme: 'medien',
    type: 'alltagssituation',
    teil: 2,
    title: 'Zeitungsabo kündigen',
    scenario: 'Sie möchten Ihr Zeitungsabonnement kündigen. Rufen Sie bei der Zeitung an und erklären Sie, dass Sie kündigen möchten. Fragen Sie nach dem Ablauf.',
    questions: [
      'Warum möchten Sie kündigen?',
      'Wie ist die Kündigungsfrist?',
      'Ab wann gilt die Kündigung?',
      'Müssen Sie etwas schriftlich machen?'
    ],
    keyPhrases: [
      'Guten Tag, ich möchte mein Abonnement kündigen.',
      'Meine Kundennummer ist ...',
      'Ich lese die Zeitung leider nicht mehr.',
      'Wie ist die Kündigungsfrist?',
      'Ab wann gilt die Kündigung?',
      'Muss ich die Kündigung auch schriftlich schicken?',
      'Bekomme ich eine Bestätigung?',
      'Vielen Dank für die Informationen.'
    ],
    timeLimit: 60,
    tips: [
      'State clearly that you want to cancel your subscription.',
      'Have your customer number or subscription details ready.',
      'Ask about the cancellation period and effective date.',
      'Request a written confirmation of the cancellation.'
    ]
  },
  {
    id: 'sp-nat-t2-001',
    theme: 'natur',
    type: 'alltagssituation',
    teil: 2,
    title: 'Schild im Park nicht verstehen',
    scenario: 'Sie sind in einem Park und sehen ein Schild, das Sie nicht verstehen. Fragen Sie eine andere Person, was das Schild bedeutet und ob Hunde im Park erlaubt sind.',
    questions: [
      'Was steht auf dem Schild?',
      'Wie sprechen Sie die Person an?',
      'Was möchten Sie wissen?',
      'Wie bedanken Sie sich?'
    ],
    keyPhrases: [
      'Entschuldigung, können Sie mir helfen?',
      'Was bedeutet dieses Schild?',
      'Ich verstehe das leider nicht.',
      'Sind Hunde hier erlaubt?',
      'Muss der Hund an der Leine sein?',
      'Gibt es hier eine Hundewiese?',
      'Vielen Dank für Ihre Hilfe!',
      'Das ist gut zu wissen.'
    ],
    timeLimit: 60,
    tips: [
      'Politely approach someone and excuse yourself for bothering them.',
      'Point to the sign and ask what it means.',
      'Ask specific follow-up questions about rules.',
      'Thank the person warmly for their help.'
    ]
  },
  {
    id: 'sp-nat-t2-002',
    theme: 'natur',
    type: 'alltagssituation',
    teil: 2,
    title: 'Wandergruppe beitreten',
    scenario: 'Sie möchten einer Wandergruppe beitreten. Rufen Sie an und fragen Sie nach der nächsten Wanderung, dem Schwierigkeitsgrad und was Sie mitbringen müssen.',
    questions: [
      'Wann ist die nächste Wanderung?',
      'Wie schwer ist die Tour?',
      'Was müssen Sie mitbringen?',
      'Wie melden Sie sich an?'
    ],
    keyPhrases: [
      'Guten Tag, ich interessiere mich für Ihre Wandergruppe.',
      'Wann findet die nächste Wanderung statt?',
      'Wie lang ist die Tour ungefähr?',
      'Ist die Wanderung auch für Anfänger geeignet?',
      'Was sollte ich mitbringen?',
      'Brauche ich spezielle Wanderschuhe?',
      'Wo ist der Treffpunkt?',
      'Ich möchte mich gerne anmelden.'
    ],
    timeLimit: 60,
    tips: [
      'Express interest and ask about upcoming events.',
      'Ask about difficulty level to make sure it suits you.',
      'Clarify what equipment and supplies you need.',
      'Ask about the meeting point and how to register.'
    ]
  }
];
