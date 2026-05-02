export interface PhraseTemplate {
  id: string;
  german: string;
  english: string;
  usage: string;
}

export interface PhraseCategory {
  id: string;
  name: string;
  germanName: string;
  icon: string;
  phrases: PhraseTemplate[];
}

export interface ThemePhrases {
  themeId: string;
  categories: PhraseCategory[];
}

export const generalPhrases: PhraseCategory[] = [
  {
    id: "greetings-closings",
    name: "Greetings & Closings",
    germanName: "Begrüßung & Abschluss",
    icon: "👋",
    phrases: [
      { id: "g1", german: "Liebe/Lieber ...,", english: "Dear ... (informal)", usage: "Start of an informal letter or email" },
      { id: "g2", german: "Hallo ...,", english: "Hello ...,", usage: "Casual greeting for friends" },
      { id: "g3", german: "Sehr geehrte Damen und Herren,", english: "Dear Sir or Madam,", usage: "Formal letter/email opening" },
      { id: "g4", german: "Vielen Dank für Ihre/deine E-Mail.", english: "Thank you very much for your email.", usage: "Reply to an email" },
      { id: "g5", german: "Ich schreibe dir/Ihnen, weil ...", english: "I am writing to you because ...", usage: "State the reason for your email" },
      { id: "g6", german: "Es tut mir leid, dass ...", english: "I am sorry that ...", usage: "Apologize for something" },
      { id: "g7", german: "Ich freue mich auf deine/Ihre Antwort.", english: "I look forward to your reply.", usage: "Polite closing before sign-off" },
      { id: "g8", german: "Viele Grüße / Liebe Grüße", english: "Best regards / Kind regards", usage: "Informal sign-off" },
      { id: "g9", german: "Mit freundlichen Grüßen", english: "Yours sincerely", usage: "Formal sign-off" },
      { id: "g10", german: "Bis bald! / Bis dann!", english: "See you soon! / See you then!", usage: "Casual farewell" },
      { id: "g11", german: "Alles Gute!", english: "All the best!", usage: "Wish someone well" },
    ],
  },
  {
    id: "connectors",
    name: "Connectors & Transitions",
    germanName: "Verbindungswörter",
    icon: "🔗",
    phrases: [
      { id: "c1", german: "Zuerst ... / Dann ... / Danach ... / Zum Schluss ...", english: "First ... / Then ... / After that ... / Finally ...", usage: "Sequence events in order" },
      { id: "c2", german: "Außerdem ... / Auch ...", english: "Furthermore ... / Also ...", usage: "Add more information" },
      { id: "c3", german: "Aber ... / Trotzdem ...", english: "But ... / Nevertheless ...", usage: "Introduce a contrast" },
      { id: "c4", german: "Deshalb ... / Deswegen ...", english: "Therefore ... / That is why ...", usage: "Show a consequence" },
      { id: "c5", german: "Weil ... / Denn ...", english: "Because ...", usage: "Give a reason (weil = verb at end)" },
      { id: "c6", german: "Wenn ... / Als ...", english: "When/If ... / When (past) ...", usage: "Conditional or past events" },
      { id: "c7", german: "Obwohl ...", english: "Although ...", usage: "Concede a point" },
      { id: "c8", german: "Zum Beispiel ...", english: "For example ...", usage: "Give an example" },
      { id: "c9", german: "Einerseits ... andererseits ...", english: "On the one hand ... on the other hand ...", usage: "Present two sides" },
      { id: "c10", german: "Nicht nur ... sondern auch ...", english: "Not only ... but also ...", usage: "Emphasize an addition" },
    ],
  },
  {
    id: "opinions",
    name: "Opinions & Preferences",
    germanName: "Meinungen & Vorlieben",
    icon: "💭",
    phrases: [
      { id: "o1", german: "Ich finde, dass ...", english: "I think that ...", usage: "Express your opinion" },
      { id: "o2", german: "Ich denke / glaube, dass ...", english: "I think / believe that ...", usage: "Share what you believe" },
      { id: "o3", german: "Meiner Meinung nach ...", english: "In my opinion ...", usage: "State your viewpoint" },
      { id: "o4", german: "Ich bin der Meinung, dass ...", english: "I am of the opinion that ...", usage: "Formal way to give an opinion" },
      { id: "o5", german: "Ich finde es gut/schlecht/wichtig, dass ...", english: "I think it is good/bad/important that ...", usage: "Evaluate something" },
      { id: "o6", german: "Am liebsten ... / Am besten ...", english: "Most of all ... / Best of all ...", usage: "Express a strong preference" },
      { id: "o7", german: "Ich mag ... / Ich mag ... nicht", english: "I like ... / I do not like ...", usage: "Simple likes and dislikes" },
      { id: "o8", german: "... gefällt mir (sehr gut / nicht so gut)", english: "... appeals to me (a lot / not so much)", usage: "Express how you feel about something" },
      { id: "o9", german: "Ich interessiere mich für ...", english: "I am interested in ...", usage: "Talk about your interests" },
      { id: "o10", german: "Ich bin dafür / dagegen", english: "I am for it / against it", usage: "Agree or disagree with a proposal" },
    ],
  },
  {
    id: "asking",
    name: "Asking & Requesting",
    germanName: "Fragen & Bitten",
    icon: "❓",
    phrases: [
      { id: "a1", german: "Können Sie mir bitte sagen, ...?", english: "Can you please tell me ...?", usage: "Politely ask for information" },
      { id: "a2", german: "Könnten Sie mir helfen?", english: "Could you help me?", usage: "Ask for help (polite)" },
      { id: "a3", german: "Ich hätte gerne ...", english: "I would like ...", usage: "Politely request something" },
      { id: "a4", german: "Ich möchte gerne wissen, ...", english: "I would like to know ...", usage: "Ask for specific information" },
      { id: "a5", german: "Darf ich fragen, ...?", english: "May I ask ...?", usage: "Very polite way to ask" },
      { id: "a6", german: "Wann / Wo / Wie viel / Wie lange ...?", english: "When / Where / How much / How long ...?", usage: "Common question starters" },
      { id: "a7", german: "Gibt es auch ...?", english: "Is there also ...?", usage: "Ask about availability" },
      { id: "a8", german: "Ist es möglich, dass ...?", english: "Is it possible that ...?", usage: "Ask if something can be done" },
    ],
  },
  {
    id: "agreeing-disagreeing",
    name: "Agreeing & Disagreeing",
    germanName: "Zustimmen & Ablehnen",
    icon: "🤝",
    phrases: [
      { id: "ad1", german: "Das finde ich auch.", english: "I think so too.", usage: "Agree with someone" },
      { id: "ad2", german: "Gute Idee! / Das ist eine gute Idee.", english: "Good idea! / That is a good idea.", usage: "Enthusiastically agree" },
      { id: "ad3", german: "Ja, das stimmt.", english: "Yes, that is right.", usage: "Confirm something is correct" },
      { id: "ad4", german: "Einverstanden! / Okay, machen wir das so.", english: "Agreed! / Okay, let us do it that way.", usage: "Accept a plan" },
      { id: "ad5", german: "Das sehe ich anders.", english: "I see it differently.", usage: "Politely disagree" },
      { id: "ad6", german: "Ich bin nicht sicher, ob ...", english: "I am not sure if ...", usage: "Express uncertainty" },
      { id: "ad7", german: "Vielleicht können wir ...", english: "Maybe we can ...", usage: "Suggest a compromise" },
      { id: "ad8", german: "Wie wäre es, wenn wir ...?", english: "How about if we ...?", usage: "Propose an alternative" },
    ],
  },
  {
    id: "describing",
    name: "Describing & Narrating",
    germanName: "Beschreiben & Erzählen",
    icon: "📖",
    phrases: [
      { id: "d1", german: "Es gibt ... / Es gibt viele ...", english: "There is ... / There are many ...", usage: "Describe what exists" },
      { id: "d2", german: "... ist/sind sehr ...", english: "... is/are very ...", usage: "Describe a quality" },
      { id: "d3", german: "Man kann dort / hier ...", english: "One can ... there / here ...", usage: "Talk about what can be done" },
      { id: "d4", german: "Normalerweise ... / Meistens ... / Manchmal ...", english: "Usually ... / Most of the time ... / Sometimes ...", usage: "Describe frequency" },
      { id: "d5", german: "Jeden Tag / Jede Woche / Einmal im Monat ...", english: "Every day / Every week / Once a month ...", usage: "Specify how often" },
      { id: "d6", german: "Letztes Jahr / Letzte Woche / Gestern ...", english: "Last year / Last week / Yesterday ...", usage: "Narrate past events" },
      { id: "d7", german: "Früher ... / Heute ... / In Zukunft ...", english: "In the past ... / Today ... / In the future ...", usage: "Compare time periods" },
      { id: "d8", german: "Ich erinnere mich, dass ...", english: "I remember that ...", usage: "Recall a memory" },
    ],
  },
  {
    id: "suggestions",
    name: "Making Suggestions & Planning",
    germanName: "Vorschläge & Planen",
    icon: "📋",
    phrases: [
      { id: "s1", german: "Sollen wir ...?", english: "Shall we ...?", usage: "Suggest doing something together" },
      { id: "s2", german: "Wie wäre es mit ...?", english: "How about ...?", usage: "Propose an idea" },
      { id: "s3", german: "Ich schlage vor, dass ...", english: "I suggest that ...", usage: "Make a formal suggestion" },
      { id: "s4", german: "Wir könnten ...", english: "We could ...", usage: "Offer a possibility" },
      { id: "s5", german: "Lass uns ... / Lasst uns ...", english: "Let us ...", usage: "Invite others to join" },
      { id: "s6", german: "Hast du Lust, ... zu ...?", english: "Do you feel like ... -ing?", usage: "Ask if someone wants to do something" },
      { id: "s7", german: "Wann passt es dir? / Wann hast du Zeit?", english: "When suits you? / When do you have time?", usage: "Find a time to meet" },
      { id: "s8", german: "Wir treffen uns um ... Uhr bei/am/in ...", english: "We will meet at ... o'clock at ...", usage: "Confirm meeting details" },
      { id: "s9", german: "Ich bringe ... mit. / Kannst du ... mitbringen?", english: "I will bring ... / Can you bring ...?", usage: "Organize who brings what" },
    ],
  },
];

export const themePhrases: ThemePhrases[] = [
  {
    themeId: "familie",
    categories: [
      {
        id: "familie-members",
        name: "Talking About Family Members",
        germanName: "Über Familienmitglieder sprechen",
        icon: "👨‍👩‍👧‍👦",
        phrases: [
          { id: "fm1", german: "Ich habe einen Bruder / eine Schwester.", english: "I have a brother / a sister.", usage: "Introduce siblings" },
          { id: "fm2", german: "Mein Vater arbeitet als ...", english: "My father works as ...", usage: "Talk about parents' jobs" },
          { id: "fm3", german: "Meine Mutter ist ... von Beruf.", english: "My mother is ... by profession.", usage: "Describe a parent's career" },
          { id: "fm4", german: "Meine Familie ist groß/klein.", english: "My family is big/small.", usage: "Describe your family size" },
          { id: "fm5", german: "Wir wohnen zusammen in ...", english: "We live together in ...", usage: "Say where you live" },
          { id: "fm6", german: "Ich verstehe mich gut mit ...", english: "I get along well with ...", usage: "Talk about relationships" },
          { id: "fm7", german: "Am Wochenende besuchen wir oft ...", english: "On weekends we often visit ...", usage: "Describe family routines" },
          { id: "fm8", german: "Meine Geschwister sind ... und ... Jahre alt.", english: "My siblings are ... and ... years old.", usage: "Give ages of family members" },
        ],
      },
      {
        id: "familie-events",
        name: "Family Events",
        germanName: "Familienfeiern",
        icon: "🎉",
        phrases: [
          { id: "fe1", german: "Wir feiern zusammen ...", english: "We celebrate ... together.", usage: "Talk about family celebrations" },
          { id: "fe2", german: "Zum Geburtstag gibt es ...", english: "For the birthday there is ...", usage: "Describe birthday traditions" },
          { id: "fe3", german: "Meine Großeltern kommen auch.", english: "My grandparents come too.", usage: "Mention other family at events" },
          { id: "fe4", german: "Wir essen immer ...", english: "We always eat ...", usage: "Describe traditional family meals" },
          { id: "fe5", german: "Es ist eine Tradition bei uns.", english: "It is a tradition with us.", usage: "Explain a family custom" },
          { id: "fe6", german: "An Weihnachten / Silvester machen wir ...", english: "At Christmas / New Year's Eve we do ...", usage: "Talk about holiday plans" },
          { id: "fe7", german: "Letztes Jahr haben wir ... gefeiert.", english: "Last year we celebrated ...", usage: "Narrate a past event" },
          { id: "fe8", german: "Das ganze Familie kommt zusammen.", english: "The whole family comes together.", usage: "Describe a family gathering" },
        ],
      },
    ],
  },
  {
    themeId: "wohnen",
    categories: [
      {
        id: "wohnen-home",
        name: "Describing Your Home",
        germanName: "Die Wohnung beschreiben",
        icon: "🏠",
        phrases: [
          { id: "wh1", german: "Ich wohne in einer Wohnung / einem Haus.", english: "I live in an apartment / a house.", usage: "Say where you live" },
          { id: "wh2", german: "Die Wohnung hat ... Zimmer.", english: "The apartment has ... rooms.", usage: "Describe the size" },
          { id: "wh3", german: "Mein Lieblingszimmer ist ...", english: "My favorite room is ...", usage: "Express a preference" },
          { id: "wh4", german: "Die Küche ist groß/klein.", english: "The kitchen is big/small.", usage: "Describe a room" },
          { id: "wh5", german: "Vom Balkon kann man ... sehen.", english: "From the balcony you can see ...", usage: "Describe the view" },
          { id: "wh6", german: "Die Miete kostet ... Euro.", english: "The rent costs ... euros.", usage: "Talk about rent" },
          { id: "wh7", german: "Wir haben auch einen Garten.", english: "We also have a garden.", usage: "Mention extra features" },
          { id: "wh8", german: "Ich wohne im ... Stock.", english: "I live on the ... floor.", usage: "Say which floor" },
        ],
      },
      {
        id: "wohnen-problems",
        name: "Housing Problems & Wishes",
        germanName: "Wohnungsprobleme & Wünsche",
        icon: "🔧",
        phrases: [
          { id: "wp1", german: "Leider ist ... kaputt.", english: "Unfortunately ... is broken.", usage: "Report a problem" },
          { id: "wp2", german: "Die Wohnung ist zu klein/dunkel.", english: "The apartment is too small/dark.", usage: "Complain about your home" },
          { id: "wp3", german: "Ich suche eine Wohnung mit ...", english: "I am looking for an apartment with ...", usage: "Describe what you want" },
          { id: "wp4", german: "Ich möchte gerne einen Garten haben.", english: "I would like to have a garden.", usage: "Express a housing wish" },
          { id: "wp5", german: "Die Nachbarn sind laut/nett.", english: "The neighbors are loud/nice.", usage: "Talk about neighbors" },
          { id: "wp6", german: "Die Heizung funktioniert nicht.", english: "The heating does not work.", usage: "Report a specific problem" },
          { id: "wp7", german: "Können Sie das bitte reparieren?", english: "Can you please repair that?", usage: "Ask landlord for repairs" },
          { id: "wp8", german: "Ich möchte gerne umziehen.", english: "I would like to move.", usage: "Talk about moving plans" },
        ],
      },
    ],
  },
  {
    themeId: "einkaufen",
    categories: [
      {
        id: "einkaufen-shopping",
        name: "Shopping Conversations",
        germanName: "Einkaufsgespräche",
        icon: "🛒",
        phrases: [
          { id: "es1", german: "Ich suche ... / Haben Sie ...?", english: "I am looking for ... / Do you have ...?", usage: "Ask for a product" },
          { id: "es2", german: "Was kostet ...?", english: "How much does ... cost?", usage: "Ask the price" },
          { id: "es3", german: "Das ist zu teuer / ein guter Preis.", english: "That is too expensive / a good price.", usage: "React to the price" },
          { id: "es4", german: "Kann ich mit Karte bezahlen?", english: "Can I pay by card?", usage: "Ask about payment" },
          { id: "es5", german: "Gibt es das in einer anderen Größe/Farbe?", english: "Is this available in another size/color?", usage: "Ask for options" },
          { id: "es6", german: "Ich nehme das.", english: "I will take it.", usage: "Confirm your purchase" },
          { id: "es7", german: "Wo finde ich ...?", english: "Where can I find ...?", usage: "Ask for directions in a store" },
          { id: "es8", german: "Das Geschäft hat von ... bis ... geöffnet.", english: "The shop is open from ... to ...", usage: "Talk about opening hours" },
        ],
      },
      {
        id: "einkaufen-complaints",
        name: "Complaints & Returns",
        germanName: "Beschwerden & Umtausch",
        icon: "🔄",
        phrases: [
          { id: "ec1", german: "Ich möchte das umtauschen.", english: "I would like to exchange this.", usage: "Return a product" },
          { id: "ec2", german: "Das funktioniert nicht.", english: "This does not work.", usage: "Report a defect" },
          { id: "ec3", german: "Kann ich mein Geld zurückbekommen?", english: "Can I get my money back?", usage: "Ask for a refund" },
          { id: "ec4", german: "Ich habe den Kassenbon dabei.", english: "I have the receipt with me.", usage: "Show proof of purchase" },
          { id: "ec5", german: "Das Produkt ist kaputt.", english: "The product is broken.", usage: "Explain the problem" },
          { id: "ec6", german: "Ich bin mit dem Produkt nicht zufrieden.", english: "I am not satisfied with the product.", usage: "Express dissatisfaction" },
          { id: "ec7", german: "Ich habe das gestern/letzte Woche gekauft.", english: "I bought this yesterday/last week.", usage: "Say when you bought it" },
          { id: "ec8", german: "Können Sie mir bitte helfen?", english: "Can you please help me?", usage: "Get attention from staff" },
        ],
      },
    ],
  },
  {
    themeId: "essen",
    categories: [
      {
        id: "essen-restaurant",
        name: "At a Restaurant",
        germanName: "Im Restaurant",
        icon: "🍽️",
        phrases: [
          { id: "er1", german: "Ich hätte gerne ...", english: "I would like ...", usage: "Order food or drinks" },
          { id: "er2", german: "Die Speisekarte, bitte.", english: "The menu, please.", usage: "Ask for the menu" },
          { id: "er3", german: "Was können Sie empfehlen?", english: "What can you recommend?", usage: "Ask for a recommendation" },
          { id: "er4", german: "Ich bin Vegetarier/Veganer.", english: "I am vegetarian/vegan.", usage: "Explain dietary needs" },
          { id: "er5", german: "Kann ich bitte die Rechnung haben?", english: "Can I have the bill, please?", usage: "Ask for the check" },
          { id: "er6", german: "Das Essen war sehr lecker.", english: "The food was very delicious.", usage: "Compliment the meal" },
          { id: "er7", german: "Stimmt so.", english: "Keep the change.", usage: "Leave a tip" },
          { id: "er8", german: "Haben Sie einen Tisch für ... Personen?", english: "Do you have a table for ... people?", usage: "Reserve or find a table" },
        ],
      },
      {
        id: "essen-food",
        name: "Talking About Food",
        germanName: "Über Essen sprechen",
        icon: "🍳",
        phrases: [
          { id: "ef1", german: "Ich koche gerne ...", english: "I like to cook ...", usage: "Talk about cooking" },
          { id: "ef2", german: "Mein Lieblingsessen ist ...", english: "My favorite food is ...", usage: "Share your favorite dish" },
          { id: "ef3", german: "Zum Frühstück esse ich meistens ...", english: "For breakfast I usually eat ...", usage: "Describe daily meals" },
          { id: "ef4", german: "In meinem Heimatland isst man ...", english: "In my home country people eat ...", usage: "Compare food cultures" },
          { id: "ef5", german: "Ich esse kein/keine ...", english: "I do not eat ...", usage: "Talk about food restrictions" },
          { id: "ef6", german: "Das schmeckt gut/lecker.", english: "That tastes good/delicious.", usage: "Comment on flavor" },
          { id: "ef7", german: "Ich versuche, gesund zu essen.", english: "I try to eat healthily.", usage: "Talk about eating habits" },
          { id: "ef8", german: "Am liebsten esse ich ...", english: "What I like to eat most is ...", usage: "Express your top preference" },
        ],
      },
    ],
  },
  {
    themeId: "arbeit",
    categories: [
      {
        id: "arbeit-talking",
        name: "Talking About Work",
        germanName: "Über Arbeit sprechen",
        icon: "💼",
        phrases: [
          { id: "at1", german: "Ich arbeite als ... bei ...", english: "I work as ... at ...", usage: "Introduce your job" },
          { id: "at2", german: "Ich arbeite seit ... Jahren dort.", english: "I have been working there for ... years.", usage: "Say how long" },
          { id: "at3", german: "Meine Arbeitszeit ist von ... bis ...", english: "My working hours are from ... to ...", usage: "Describe your schedule" },
          { id: "at4", german: "Mein Job gefällt mir, weil ...", english: "I like my job because ...", usage: "Explain why you enjoy it" },
          { id: "at5", german: "Ich möchte gerne ... werden.", english: "I would like to become ...", usage: "Talk about career goals" },
          { id: "at6", german: "Ich habe eine Ausbildung/ein Studium gemacht.", english: "I completed training/a degree.", usage: "Talk about qualifications" },
          { id: "at7", german: "Meine Kollegen sind sehr nett.", english: "My colleagues are very nice.", usage: "Describe your workplace" },
          { id: "at8", german: "Ich verdiene ... Euro im Monat.", english: "I earn ... euros per month.", usage: "Discuss salary" },
        ],
      },
      {
        id: "arbeit-situations",
        name: "Work Situations",
        germanName: "Arbeitssituationen",
        icon: "📅",
        phrases: [
          { id: "as1", german: "Ich kann heute leider nicht kommen, weil ...", english: "Unfortunately I cannot come today because ...", usage: "Call in sick or excuse yourself" },
          { id: "as2", german: "Ich brauche einen Tag frei.", english: "I need a day off.", usage: "Request time off" },
          { id: "as3", german: "Können wir einen Termin machen?", english: "Can we make an appointment?", usage: "Schedule a meeting" },
          { id: "as4", german: "Ich habe eine Frage zu ...", english: "I have a question about ...", usage: "Ask about a work topic" },
          { id: "as5", german: "Ich bin für ... zuständig.", english: "I am responsible for ...", usage: "Describe your duties" },
          { id: "as6", german: "Ich suche eine neue Stelle.", english: "I am looking for a new position.", usage: "Talk about job hunting" },
          { id: "as7", german: "Ich habe mich um die Stelle beworben.", english: "I applied for the position.", usage: "Discuss a job application" },
          { id: "as8", german: "Ich möchte an einer Fortbildung teilnehmen.", english: "I would like to attend a training course.", usage: "Ask about professional development" },
        ],
      },
    ],
  },
  {
    themeId: "freizeit",
    categories: [
      {
        id: "freizeit-hobbies",
        name: "Hobbies & Activities",
        germanName: "Hobbys & Aktivitäten",
        icon: "⚽",
        phrases: [
          { id: "fh1", german: "In meiner Freizeit ...", english: "In my free time ...", usage: "Start talking about hobbies" },
          { id: "fh2", german: "Am Wochenende ...", english: "On the weekend ...", usage: "Describe weekend plans" },
          { id: "fh3", german: "Ich spiele gerne ...", english: "I like to play ...", usage: "Talk about games or sports" },
          { id: "fh4", german: "Ich gehe oft ...", english: "I often go ...", usage: "Describe regular activities" },
          { id: "fh5", german: "Seit ... Jahren mache ich ...", english: "I have been doing ... for ... years.", usage: "Say how long you have had a hobby" },
          { id: "fh6", german: "Ich bin in einem Verein.", english: "I am in a club.", usage: "Talk about club membership" },
          { id: "fh7", german: "Das macht mir viel Spaß.", english: "That is a lot of fun for me.", usage: "Express enjoyment" },
          { id: "fh8", german: "Ich lese gerne Bücher / höre gerne Musik.", english: "I like to read books / listen to music.", usage: "Mention common hobbies" },
        ],
      },
      {
        id: "freizeit-invitations",
        name: "Invitations",
        germanName: "Einladungen",
        icon: "💌",
        phrases: [
          { id: "fi1", german: "Hast du am ... Zeit?", english: "Do you have time on ...?", usage: "Ask about availability" },
          { id: "fi2", german: "Möchtest du mitkommen?", english: "Would you like to come along?", usage: "Invite someone" },
          { id: "fi3", german: "Wir könnten zusammen ...", english: "We could ... together.", usage: "Suggest a joint activity" },
          { id: "fi4", german: "Das klingt toll!", english: "That sounds great!", usage: "Accept an invitation" },
          { id: "fi5", german: "Leider kann ich nicht, weil ...", english: "Unfortunately I cannot because ...", usage: "Decline with a reason" },
          { id: "fi6", german: "Vielleicht ein anderes Mal.", english: "Maybe another time.", usage: "Politely postpone" },
          { id: "fi7", german: "Ich lade dich zu ... ein.", english: "I invite you to ...", usage: "Formally invite someone" },
          { id: "fi8", german: "Wann und wo sollen wir uns treffen?", english: "When and where should we meet?", usage: "Arrange the details" },
        ],
      },
    ],
  },
  {
    themeId: "reisen",
    categories: [
      {
        id: "reisen-plans",
        name: "Travel Plans & Experiences",
        germanName: "Reisepläne & Erfahrungen",
        icon: "✈️",
        phrases: [
          { id: "rp1", german: "Ich fahre / fliege nach ...", english: "I am going / flying to ...", usage: "Talk about upcoming travel" },
          { id: "rp2", german: "Ich war letztes Jahr in ...", english: "I was in ... last year.", usage: "Describe past trips" },
          { id: "rp3", german: "Die Reise hat ... Stunden gedauert.", english: "The journey took ... hours.", usage: "Talk about travel duration" },
          { id: "rp4", german: "Wir haben im Hotel / bei Freunden übernachtet.", english: "We stayed at a hotel / with friends.", usage: "Describe accommodation" },
          { id: "rp5", german: "Am besten hat mir ... gefallen.", english: "I liked ... the most.", usage: "Share your highlight" },
          { id: "rp6", german: "Ich möchte gerne ... besuchen.", english: "I would like to visit ...", usage: "Talk about travel wishes" },
          { id: "rp7", german: "Wir haben viele Sehenswürdigkeiten besichtigt.", english: "We visited many sights.", usage: "Describe sightseeing" },
          { id: "rp8", german: "Die Stadt / Das Land ist sehr schön.", english: "The city / The country is very beautiful.", usage: "Describe a destination" },
        ],
      },
      {
        id: "reisen-station",
        name: "At the Station / Airport",
        germanName: "Am Bahnhof / Flughafen",
        icon: "🚂",
        phrases: [
          { id: "rs1", german: "Wann fährt der nächste Zug nach ...?", english: "When does the next train to ... leave?", usage: "Ask about departures" },
          { id: "rs2", german: "Von welchem Gleis?", english: "From which platform?", usage: "Find the right platform" },
          { id: "rs3", german: "Ich möchte eine Fahrkarte nach ...", english: "I would like a ticket to ...", usage: "Buy a ticket" },
          { id: "rs4", german: "Eine einfache Fahrt / Hin und zurück.", english: "A single trip / Round trip.", usage: "Specify ticket type" },
          { id: "rs5", german: "Gibt es eine Ermäßigung?", english: "Is there a discount?", usage: "Ask about reduced fares" },
          { id: "rs6", german: "Der Zug hat Verspätung.", english: "The train is delayed.", usage: "Report or mention a delay" },
          { id: "rs7", german: "Muss ich umsteigen?", english: "Do I need to change trains?", usage: "Ask about connections" },
          { id: "rs8", german: "Wo ist der Ausgang / die Haltestelle?", english: "Where is the exit / the stop?", usage: "Ask for directions" },
        ],
      },
    ],
  },
  {
    themeId: "gesundheit",
    categories: [
      {
        id: "gesundheit-doctor",
        name: "At the Doctor",
        germanName: "Beim Arzt",
        icon: "🏥",
        phrases: [
          { id: "gd1", german: "Ich habe Schmerzen in/am ...", english: "I have pain in/on ...", usage: "Describe where it hurts" },
          { id: "gd2", german: "Ich fühle mich nicht gut.", english: "I do not feel well.", usage: "Say you are unwell" },
          { id: "gd3", german: "Seit wann? Seit ... Tagen.", english: "Since when? For ... days.", usage: "Answer how long" },
          { id: "gd4", german: "Ich habe Fieber / Husten / Kopfschmerzen.", english: "I have a fever / cough / headache.", usage: "List symptoms" },
          { id: "gd5", german: "Ich brauche ein Rezept.", english: "I need a prescription.", usage: "Ask for medication" },
          { id: "gd6", german: "Wie oft muss ich die Tabletten nehmen?", english: "How often do I need to take the tablets?", usage: "Ask about dosage" },
          { id: "gd7", german: "Ich bin gegen ... allergisch.", english: "I am allergic to ...", usage: "Report allergies" },
          { id: "gd8", german: "Ich möchte einen Termin machen.", english: "I would like to make an appointment.", usage: "Book an appointment" },
          { id: "gd9", german: "Ich brauche eine Krankmeldung.", english: "I need a sick note.", usage: "Request documentation" },
        ],
      },
      {
        id: "gesundheit-lifestyle",
        name: "Healthy Lifestyle",
        germanName: "Gesunder Lebensstil",
        icon: "🥗",
        phrases: [
          { id: "gl1", german: "Ich versuche, gesund zu leben.", english: "I try to live healthily.", usage: "Talk about health goals" },
          { id: "gl2", german: "Ich treibe regelmäßig Sport.", english: "I exercise regularly.", usage: "Describe exercise habits" },
          { id: "gl3", german: "Ich esse viel Obst und Gemüse.", english: "I eat a lot of fruit and vegetables.", usage: "Describe diet" },
          { id: "gl4", german: "Ich schlafe ... Stunden pro Nacht.", english: "I sleep ... hours per night.", usage: "Talk about sleep" },
          { id: "gl5", german: "Ich sollte mehr/weniger ...", english: "I should do more/less ...", usage: "Reflect on habits" },
          { id: "gl6", german: "Stress ist nicht gut für die Gesundheit.", english: "Stress is not good for your health.", usage: "Discuss stress" },
          { id: "gl7", german: "Ich trinke viel Wasser.", english: "I drink a lot of water.", usage: "Mention healthy habits" },
          { id: "gl8", german: "Man sollte auf seine Gesundheit achten.", english: "One should take care of one's health.", usage: "Give general health advice" },
        ],
      },
    ],
  },
  {
    themeId: "medien",
    categories: [
      {
        id: "medien-tech",
        name: "Technology & Media",
        germanName: "Technik & Medien",
        icon: "📱",
        phrases: [
          { id: "mt1", german: "Ich benutze mein Handy für ...", english: "I use my phone for ...", usage: "Talk about phone usage" },
          { id: "mt2", german: "Ich bin oft im Internet.", english: "I am often on the internet.", usage: "Describe internet habits" },
          { id: "mt3", german: "Ich sehe gerne ... im Fernsehen.", english: "I like to watch ... on TV.", usage: "Talk about TV shows" },
          { id: "mt4", german: "Meine Lieblings-App ist ...", english: "My favorite app is ...", usage: "Share app preferences" },
          { id: "mt5", german: "Ich lese Nachrichten online.", english: "I read news online.", usage: "Describe media consumption" },
          { id: "mt6", german: "Ohne mein Handy kann ich nicht leben.", english: "I cannot live without my phone.", usage: "Express dependence on tech" },
          { id: "mt7", german: "Ich höre gerne Podcasts / Musik.", english: "I like to listen to podcasts / music.", usage: "Talk about audio media" },
          { id: "mt8", german: "Soziale Medien sind wichtig / gefährlich.", english: "Social media are important / dangerous.", usage: "Give an opinion on social media" },
        ],
      },
      {
        id: "medien-problems",
        name: "Problems & Complaints",
        germanName: "Probleme & Beschwerden",
        icon: "⚠️",
        phrases: [
          { id: "mp1", german: "Mein Internet funktioniert nicht.", english: "My internet is not working.", usage: "Report a tech problem" },
          { id: "mp2", german: "Ich möchte meinen Vertrag kündigen.", english: "I would like to cancel my contract.", usage: "End a subscription" },
          { id: "mp3", german: "Können Sie das Problem lösen?", english: "Can you solve the problem?", usage: "Ask for tech support" },
          { id: "mp4", german: "Seit wann? Seit gestern/vorgestern.", english: "Since when? Since yesterday/the day before.", usage: "Specify duration of issue" },
          { id: "mp5", german: "Ich habe schon versucht, ...", english: "I have already tried ...", usage: "Explain troubleshooting steps" },
          { id: "mp6", german: "Wann wird es repariert?", english: "When will it be repaired?", usage: "Ask for a timeline" },
          { id: "mp7", german: "Ich bin mit dem Service nicht zufrieden.", english: "I am not satisfied with the service.", usage: "Complain about service quality" },
          { id: "mp8", german: "Können Sie mich bitte verbinden mit ...?", english: "Can you please connect me to ...?", usage: "Ask to be transferred" },
        ],
      },
    ],
  },
  {
    themeId: "natur",
    categories: [
      {
        id: "natur-weather",
        name: "Weather & Seasons",
        germanName: "Wetter & Jahreszeiten",
        icon: "☀️",
        phrases: [
          { id: "nw1", german: "Heute ist es sonnig/bewölkt/regnerisch.", english: "Today it is sunny/cloudy/rainy.", usage: "Describe the weather" },
          { id: "nw2", german: "Im Sommer/Winter ist es ...", english: "In summer/winter it is ...", usage: "Talk about seasonal weather" },
          { id: "nw3", german: "Meine Lieblingsjahreszeit ist ..., weil ...", english: "My favorite season is ... because ...", usage: "Express a preference" },
          { id: "nw4", german: "Bei schönem Wetter gehe ich gerne ...", english: "In nice weather I like to go ...", usage: "Describe fair-weather activities" },
          { id: "nw5", german: "Wenn es regnet, bleibe ich lieber ...", english: "When it rains, I prefer to stay ...", usage: "Describe rainy-day plans" },
          { id: "nw6", german: "Es schneit / Es ist windig / Es ist kalt.", english: "It is snowing / It is windy / It is cold.", usage: "Describe specific weather" },
          { id: "nw7", german: "Die Temperaturen liegen bei ... Grad.", english: "Temperatures are around ... degrees.", usage: "Give temperature info" },
          { id: "nw8", german: "Im Frühling blühen die Blumen.", english: "In spring the flowers bloom.", usage: "Describe nature in spring" },
        ],
      },
      {
        id: "natur-environment",
        name: "Environment & Nature",
        germanName: "Umwelt & Natur",
        icon: "🌳",
        phrases: [
          { id: "ne1", german: "Ich finde Natur sehr wichtig.", english: "I think nature is very important.", usage: "Express an opinion about nature" },
          { id: "ne2", german: "Man sollte mehr Rad fahren.", english: "One should cycle more.", usage: "Suggest eco-friendly behavior" },
          { id: "ne3", german: "Recycling ist wichtig für die Umwelt.", english: "Recycling is important for the environment.", usage: "Talk about recycling" },
          { id: "ne4", german: "In meiner Stadt gibt es viele Parks.", english: "In my city there are many parks.", usage: "Describe local nature" },
          { id: "ne5", german: "Ich gehe gerne im Wald spazieren.", english: "I like to walk in the forest.", usage: "Talk about outdoor activities" },
          { id: "ne6", german: "Tiere sind mir wichtig.", english: "Animals are important to me.", usage: "Express care for animals" },
          { id: "ne7", german: "Wir sollten die Umwelt schützen.", english: "We should protect the environment.", usage: "Advocate for the environment" },
          { id: "ne8", german: "Ich trenne meinen Müll.", english: "I separate my waste.", usage: "Talk about recycling habits" },
        ],
      },
    ],
  },
];

export function getTotalPhraseCount(): number {
  const generalCount = generalPhrases.reduce((sum, cat) => sum + cat.phrases.length, 0);
  const themeCount = themePhrases.reduce(
    (sum, tp) => sum + tp.categories.reduce((s, cat) => s + cat.phrases.length, 0),
    0,
  );
  return generalCount + themeCount;
}
