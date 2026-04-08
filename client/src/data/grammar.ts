export interface GrammarExercise {
  id: string;
  theme: string;
  topic: string;
  instruction: string;
  sentence: string;
  correctAnswer: string;
  options: string[];
  explanation: string;
}

export const grammarExercises: GrammarExercise[] = [
  // ==================== PERFEKT (haben/sein) ====================
  {
    id: "perf-001",
    theme: "freizeit",
    topic: "Perfekt (haben/sein)",
    instruction: "Wählen Sie die richtige Form des Perfekts.",
    sentence: "Ich ___ gestern ins Kino gegangen.",
    correctAnswer: "bin",
    options: ["bin", "habe", "hat", "ist"],
    explanation:
      "The verb 'gehen' (to go) is a verb of movement, so it uses 'sein' in the Perfekt. First person singular: ich bin gegangen.",
  },
  {
    id: "perf-002",
    theme: "freizeit",
    topic: "Perfekt (haben/sein)",
    instruction: "Wählen Sie die richtige Form des Perfekts.",
    sentence: "Wir ___ einen Film gesehen.",
    correctAnswer: "haben",
    options: ["haben", "sind", "hat", "ist"],
    explanation:
      "The verb 'sehen' (to see) uses 'haben' in the Perfekt because it is not a movement or state-change verb. First person plural: wir haben gesehen.",
  },
  {
    id: "perf-003",
    theme: "reisen",
    topic: "Perfekt (haben/sein)",
    instruction: "Wählen Sie die richtige Form des Perfekts.",
    sentence: "Er ___ nach Berlin gefahren.",
    correctAnswer: "ist",
    options: ["hat", "ist", "bin", "sind"],
    explanation:
      "The verb 'fahren' (to drive/travel) uses 'sein' in the Perfekt because it indicates movement from one place to another. Third person singular: er ist gefahren.",
  },
  {
    id: "perf-004",
    theme: "essen",
    topic: "Perfekt (haben/sein)",
    instruction: "Wählen Sie die richtige Form des Perfekts.",
    sentence: "Sie ___ eine Suppe gekocht.",
    correctAnswer: "hat",
    options: ["ist", "hat", "haben", "bin"],
    explanation:
      "The verb 'kochen' (to cook) uses 'haben' in the Perfekt. Third person singular feminine: sie hat gekocht.",
  },
  {
    id: "perf-005",
    theme: "familie",
    topic: "Perfekt (haben/sein)",
    instruction: "Wählen Sie die richtige Form des Perfekts.",
    sentence: "Die Kinder ___ im Garten gespielt.",
    correctAnswer: "haben",
    options: ["sind", "haben", "hat", "ist"],
    explanation:
      "The verb 'spielen' (to play) uses 'haben' in the Perfekt. Third person plural: die Kinder haben gespielt.",
  },
  {
    id: "perf-006",
    theme: "gesundheit",
    topic: "Perfekt (haben/sein)",
    instruction: "Wählen Sie die richtige Form des Perfekts.",
    sentence: "Meine Großmutter ___ gestern eingeschlafen.",
    correctAnswer: "ist",
    options: ["hat", "ist", "sind", "bin"],
    explanation:
      "The verb 'einschlafen' (to fall asleep) uses 'sein' in the Perfekt because it indicates a change of state. Third person singular: sie ist eingeschlafen.",
  },
  {
    id: "perf-007",
    theme: "arbeit",
    topic: "Perfekt (haben/sein)",
    instruction: "Wählen Sie die richtige Form des Perfekts.",
    sentence: "Ich ___ den ganzen Tag gearbeitet.",
    correctAnswer: "habe",
    options: ["bin", "habe", "hat", "ist"],
    explanation:
      "The verb 'arbeiten' (to work) uses 'haben' in the Perfekt. First person singular: ich habe gearbeitet.",
  },
  {
    id: "perf-008",
    theme: "reisen",
    topic: "Perfekt (haben/sein)",
    instruction: "Wählen Sie die richtige Form des Perfekts.",
    sentence: "Wir ___ um 8 Uhr aufgestanden.",
    correctAnswer: "sind",
    options: ["haben", "sind", "ist", "hat"],
    explanation:
      "The verb 'aufstehen' (to get up) uses 'sein' in the Perfekt because it indicates a change of state. First person plural: wir sind aufgestanden.",
  },

  // ==================== MODALVERBEN ====================
  {
    id: "mod-001",
    theme: "arbeit",
    topic: "Modalverben",
    instruction: "Wählen Sie das richtige Modalverb.",
    sentence: "Ich ___ morgen arbeiten.",
    correctAnswer: "muss",
    options: ["muss", "musst", "müssen", "müsst"],
    explanation:
      "The modal verb 'müssen' (must/have to) is conjugated as 'muss' for the first person singular (ich).",
  },
  {
    id: "mod-002",
    theme: "freizeit",
    topic: "Modalverben",
    instruction: "Wählen Sie das richtige Modalverb.",
    sentence: "___ du Gitarre spielen?",
    correctAnswer: "Kannst",
    options: ["Kannst", "Könnt", "Können", "Kann"],
    explanation:
      "The modal verb 'können' (can/to be able to) is conjugated as 'kannst' for the second person singular (du).",
  },
  {
    id: "mod-003",
    theme: "reisen",
    topic: "Modalverben",
    instruction: "Wählen Sie das richtige Modalverb.",
    sentence: "Wir ___ im Sommer nach Spanien fahren.",
    correctAnswer: "wollen",
    options: ["wollt", "wollen", "will", "willst"],
    explanation:
      "The modal verb 'wollen' (to want) is conjugated as 'wollen' for the first person plural (wir).",
  },
  {
    id: "mod-004",
    theme: "gesundheit",
    topic: "Modalverben",
    instruction: "Wählen Sie das richtige Modalverb.",
    sentence: "Du ___ mehr Wasser trinken.",
    correctAnswer: "sollst",
    options: ["soll", "sollst", "sollt", "sollen"],
    explanation:
      "The modal verb 'sollen' (should/ought to) is conjugated as 'sollst' for the second person singular (du).",
  },
  {
    id: "mod-005",
    theme: "einkaufen",
    topic: "Modalverben",
    instruction: "Wählen Sie das richtige Modalverb.",
    sentence: "Hier ___ man nicht rauchen.",
    correctAnswer: "darf",
    options: ["dürft", "darf", "darfst", "dürfen"],
    explanation:
      "The modal verb 'dürfen' (may/to be allowed to) is conjugated as 'darf' for the third person singular and 'man'.",
  },
  {
    id: "mod-006",
    theme: "essen",
    topic: "Modalverben",
    instruction: "Wählen Sie das richtige Modalverb.",
    sentence: "Ich ___ einen Kaffee, bitte.",
    correctAnswer: "möchte",
    options: ["möchte", "möchten", "möchtest", "möchtet"],
    explanation:
      "The modal verb 'möchten' (would like) is conjugated as 'möchte' for the first person singular (ich). It is commonly used for polite requests.",
  },
  {
    id: "mod-007",
    theme: "medien",
    topic: "Modalverben",
    instruction: "Wählen Sie das richtige Modalverb.",
    sentence: "Die Kinder ___ nicht so viel fernsehen.",
    correctAnswer: "sollen",
    options: ["soll", "sollst", "sollen", "sollt"],
    explanation:
      "The modal verb 'sollen' (should) is conjugated as 'sollen' for the third person plural (die Kinder).",
  },

  // ==================== WECHSELPRÄPOSITIONEN ====================
  {
    id: "wech-001",
    theme: "wohnen",
    topic: "Wechselpräpositionen",
    instruction:
      "Wählen Sie den richtigen Artikel. Achten Sie auf Dativ oder Akkusativ.",
    sentence: "Das Buch liegt auf ___ Tisch.",
    correctAnswer: "dem",
    options: ["dem", "den", "der", "das"],
    explanation:
      "'Liegen' indicates a location (where something is), so we use Dativ. 'Tisch' is masculine, so Dativ = dem.",
  },
  {
    id: "wech-002",
    theme: "wohnen",
    topic: "Wechselpräpositionen",
    instruction:
      "Wählen Sie den richtigen Artikel. Achten Sie auf Dativ oder Akkusativ.",
    sentence: "Ich lege das Buch auf ___ Tisch.",
    correctAnswer: "den",
    options: ["dem", "den", "der", "das"],
    explanation:
      "'Legen' indicates a direction (where something is being placed), so we use Akkusativ. 'Tisch' is masculine, so Akkusativ = den.",
  },
  {
    id: "wech-003",
    theme: "wohnen",
    topic: "Wechselpräpositionen",
    instruction:
      "Wählen Sie den richtigen Artikel. Achten Sie auf Dativ oder Akkusativ.",
    sentence: "Die Lampe hängt über ___ Esstisch.",
    correctAnswer: "dem",
    options: ["den", "dem", "der", "das"],
    explanation:
      "'Hängen' (intransitive, location) indicates where the lamp is, so we use Dativ. 'Esstisch' is masculine, so Dativ = dem.",
  },
  {
    id: "wech-004",
    theme: "wohnen",
    topic: "Wechselpräpositionen",
    instruction:
      "Wählen Sie den richtigen Artikel. Achten Sie auf Dativ oder Akkusativ.",
    sentence: "Ich stelle die Blumen auf ___ Fensterbank.",
    correctAnswer: "die",
    options: ["der", "die", "dem", "das"],
    explanation:
      "'Stellen' indicates a direction (placing something somewhere), so we use Akkusativ. 'Fensterbank' is feminine, so Akkusativ = die.",
  },
  {
    id: "wech-005",
    theme: "natur",
    topic: "Wechselpräpositionen",
    instruction:
      "Wählen Sie den richtigen Artikel. Achten Sie auf Dativ oder Akkusativ.",
    sentence: "Die Katze sitzt unter ___ Baum.",
    correctAnswer: "dem",
    options: ["den", "dem", "der", "das"],
    explanation:
      "'Sitzen' indicates a location (where the cat is), so we use Dativ. 'Baum' is masculine, so Dativ = dem.",
  },
  {
    id: "wech-006",
    theme: "wohnen",
    topic: "Wechselpräpositionen",
    instruction:
      "Wählen Sie den richtigen Artikel. Achten Sie auf Dativ oder Akkusativ.",
    sentence: "Er hängt das Bild an ___ Wand.",
    correctAnswer: "die",
    options: ["der", "die", "dem", "das"],
    explanation:
      "'Hängen' (transitive, direction — he is hanging the picture) uses Akkusativ. 'Wand' is feminine, so Akkusativ = die.",
  },
  {
    id: "wech-007",
    theme: "freizeit",
    topic: "Wechselpräpositionen",
    instruction:
      "Wählen Sie den richtigen Artikel. Achten Sie auf Dativ oder Akkusativ.",
    sentence: "Die Kinder spielen in ___ Garten.",
    correctAnswer: "dem",
    options: ["den", "dem", "der", "das"],
    explanation:
      "'Spielen' with 'in' indicates a location (where the children play), so we use Dativ. 'Garten' is masculine, so Dativ = dem.",
  },

  // ==================== NEBENSÄTZE MIT WEIL ====================
  {
    id: "neb-001",
    theme: "gesundheit",
    topic: "Nebensätze mit weil",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'weil'. Das Verb steht am Ende.",
    sentence: "Ich bleibe zu Hause, weil ich krank ___.",
    correctAnswer: "bin",
    options: ["bin", "ist", "sind", "bist"],
    explanation:
      "In a 'weil' clause, the conjugated verb goes to the end. The subject is 'ich', so the verb 'sein' is conjugated as 'bin'.",
  },
  {
    id: "neb-002",
    theme: "arbeit",
    topic: "Nebensätze mit weil",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'weil'. Das Verb steht am Ende.",
    sentence: "Er ist müde, weil er viel ___ hat.",
    correctAnswer: "gearbeitet",
    options: ["gearbeitet", "arbeiten", "arbeitet", "arbeitete"],
    explanation:
      "In a 'weil' clause with Perfekt, the auxiliary verb (hat) goes to the end, and the past participle (gearbeitet) comes before it.",
  },
  {
    id: "neb-003",
    theme: "einkaufen",
    topic: "Nebensätze mit weil",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'weil'. Das Verb steht am Ende.",
    sentence: "Wir gehen einkaufen, weil wir nichts im Kühlschrank ___.",
    correctAnswer: "haben",
    options: ["haben", "hat", "habt", "habe"],
    explanation:
      "In a 'weil' clause, the verb goes to the end. The subject is 'wir', so 'haben' is the correct conjugation.",
  },
  {
    id: "neb-004",
    theme: "reisen",
    topic: "Nebensätze mit weil",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'weil'. Das Verb steht am Ende.",
    sentence: "Sie lernt Deutsch, weil sie in Deutschland ___ möchte.",
    correctAnswer: "arbeiten",
    options: ["arbeiten", "arbeitet", "gearbeitet", "arbeitest"],
    explanation:
      "In a 'weil' clause with a modal verb, the modal verb (möchte) goes to the end and the infinitive (arbeiten) comes before it.",
  },
  {
    id: "neb-005",
    theme: "essen",
    topic: "Nebensätze mit weil",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'weil'. Das Verb steht am Ende.",
    sentence: "Ich esse keinen Kuchen, weil ich eine Diät ___.",
    correctAnswer: "mache",
    options: ["mache", "machen", "macht", "machst"],
    explanation:
      "In a 'weil' clause, the conjugated verb goes to the end. The subject is 'ich', so 'machen' is conjugated as 'mache'.",
  },
  {
    id: "neb-006",
    theme: "freizeit",
    topic: "Nebensätze mit weil",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'weil'. Das Verb steht am Ende.",
    sentence: "Er geht nicht schwimmen, weil das Wetter schlecht ___.",
    correctAnswer: "ist",
    options: ["ist", "bin", "sind", "seid"],
    explanation:
      "In a 'weil' clause, the verb goes to the end. The subject is 'das Wetter' (third person singular), so 'sein' is conjugated as 'ist'.",
  },

  // ==================== NEBENSÄTZE MIT DASS ====================
  {
    id: "dass-001",
    theme: "familie",
    topic: "Nebensätze mit dass",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'dass'. Das Verb steht am Ende.",
    sentence: "Ich denke, dass er morgen ___.",
    correctAnswer: "kommt",
    options: ["kommt", "kommen", "kommst", "komme"],
    explanation:
      "In a 'dass' clause, the conjugated verb goes to the end. The subject is 'er' (third person singular), so 'kommen' becomes 'kommt'.",
  },
  {
    id: "dass-002",
    theme: "arbeit",
    topic: "Nebensätze mit dass",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'dass'. Das Verb steht am Ende.",
    sentence: "Der Chef sagt, dass wir pünktlich sein ___.",
    correctAnswer: "müssen",
    options: ["müssen", "muss", "müsst", "musst"],
    explanation:
      "In a 'dass' clause with a modal verb, the modal goes to the end. The subject is 'wir', so 'müssen' is the correct form.",
  },
  {
    id: "dass-003",
    theme: "gesundheit",
    topic: "Nebensätze mit dass",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'dass'. Das Verb steht am Ende.",
    sentence: "Der Arzt sagt, dass ich mehr Sport treiben ___.",
    correctAnswer: "soll",
    options: ["soll", "sollst", "sollen", "sollt"],
    explanation:
      "In a 'dass' clause with a modal verb, the modal goes to the end. The subject is 'ich', so 'sollen' becomes 'soll'.",
  },
  {
    id: "dass-004",
    theme: "medien",
    topic: "Nebensätze mit dass",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'dass'. Das Verb steht am Ende.",
    sentence: "Ich habe gehört, dass der Film sehr gut ___.",
    correctAnswer: "ist",
    options: ["ist", "bin", "sind", "seid"],
    explanation:
      "In a 'dass' clause, the verb goes to the end. The subject is 'der Film' (third person singular), so 'sein' becomes 'ist'.",
  },
  {
    id: "dass-005",
    theme: "familie",
    topic: "Nebensätze mit dass",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'dass'. Das Verb steht am Ende.",
    sentence: "Meine Mutter hofft, dass ich sie bald ___.",
    correctAnswer: "besuche",
    options: ["besuche", "besucht", "besuchen", "besuchst"],
    explanation:
      "In a 'dass' clause, the conjugated verb goes to the end. The subject is 'ich', so 'besuchen' becomes 'besuche'.",
  },
  {
    id: "dass-006",
    theme: "einkaufen",
    topic: "Nebensätze mit dass",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'dass'. Das Verb steht am Ende.",
    sentence: "Es ist wichtig, dass man die Rechnung ___.",
    correctAnswer: "bezahlt",
    options: ["bezahlt", "bezahlen", "bezahlst", "bezahle"],
    explanation:
      "In a 'dass' clause, the verb goes to the end. The subject is 'man' (third person singular), so 'bezahlen' becomes 'bezahlt'.",
  },

  // ==================== NEBENSÄTZE MIT WENN ====================
  {
    id: "wenn-001",
    theme: "natur",
    topic: "Nebensätze mit wenn",
    instruction:
      "Ergänzen Sie den Satz mit 'wenn'. Das Verb steht am Ende des Nebensatzes.",
    sentence: "Wenn es regnet, ___ ich zu Hause.",
    correctAnswer: "bleibe",
    options: ["bleibe", "bleiben", "bleibt", "bleibst"],
    explanation:
      "In the main clause after a 'wenn' clause, the verb comes first (verb-second rule inverted). Subject is 'ich', so 'bleiben' becomes 'bleibe'.",
  },
  {
    id: "wenn-002",
    theme: "freizeit",
    topic: "Nebensätze mit wenn",
    instruction:
      "Ergänzen Sie den Satz mit 'wenn'. Das Verb steht am Ende des Nebensatzes.",
    sentence: "Wenn ich Zeit habe, ___ ich ein Buch.",
    correctAnswer: "lese",
    options: ["lese", "liest", "lesen", "lest"],
    explanation:
      "In the main clause after a 'wenn' clause, the verb comes in second position. Subject is 'ich', so 'lesen' becomes 'lese'.",
  },
  {
    id: "wenn-003",
    theme: "reisen",
    topic: "Nebensätze mit wenn",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'wenn'. Das Verb steht am Ende.",
    sentence: "Ich fahre ans Meer, wenn das Wetter schön ___.",
    correctAnswer: "ist",
    options: ["ist", "sind", "bin", "bist"],
    explanation:
      "In a 'wenn' clause, the verb goes to the end. The subject is 'das Wetter' (third person singular), so 'sein' becomes 'ist'.",
  },
  {
    id: "wenn-004",
    theme: "essen",
    topic: "Nebensätze mit wenn",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'wenn'. Das Verb steht am Ende.",
    sentence: "Wenn du Hunger ___, können wir etwas essen.",
    correctAnswer: "hast",
    options: ["hast", "hat", "haben", "habe"],
    explanation:
      "In a 'wenn' clause, the verb goes to the end. The subject is 'du', so 'haben' becomes 'hast'.",
  },
  {
    id: "wenn-005",
    theme: "arbeit",
    topic: "Nebensätze mit wenn",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'wenn'. Das Verb steht am Ende.",
    sentence: "Wenn ich die Prüfung ___, feiere ich mit meinen Freunden.",
    correctAnswer: "bestehe",
    options: ["bestehe", "besteht", "bestehen", "bestehst"],
    explanation:
      "In a 'wenn' clause, the verb goes to the end. The subject is 'ich', so 'bestehen' becomes 'bestehe'.",
  },
  {
    id: "wenn-006",
    theme: "gesundheit",
    topic: "Nebensätze mit wenn",
    instruction:
      "Ergänzen Sie den Nebensatz mit 'wenn'. Das Verb steht am Ende.",
    sentence: "Wenn man krank ___, soll man zum Arzt gehen.",
    correctAnswer: "ist",
    options: ["ist", "bin", "bist", "sind"],
    explanation:
      "In a 'wenn' clause, the verb goes to the end. The subject is 'man' (third person singular), so 'sein' becomes 'ist'.",
  },

  // ==================== KOMPARATIV UND SUPERLATIV ====================
  {
    id: "komp-001",
    theme: "reisen",
    topic: "Komparativ und Superlativ",
    instruction: "Wählen Sie die richtige Komparativ- oder Superlativform.",
    sentence: "Berlin ist ___ als München.",
    correctAnswer: "größer",
    options: ["größer", "großer", "am größten", "groß"],
    explanation:
      "The comparative of 'groß' is 'größer' (with umlaut). Comparative is used with 'als' for comparisons.",
  },
  {
    id: "komp-002",
    theme: "essen",
    topic: "Komparativ und Superlativ",
    instruction: "Wählen Sie die richtige Komparativ- oder Superlativform.",
    sentence: "Dieses Restaurant ist ___ als das andere.",
    correctAnswer: "teurer",
    options: ["teurer", "teuerer", "am teuersten", "teuer"],
    explanation:
      "The comparative of 'teuer' is 'teurer'. Note that the 'e' before 'r' is dropped in the comparative form.",
  },
  {
    id: "komp-003",
    theme: "familie",
    topic: "Komparativ und Superlativ",
    instruction: "Wählen Sie die richtige Komparativ- oder Superlativform.",
    sentence: "Mein Bruder ist ___ als ich.",
    correctAnswer: "älter",
    options: ["älter", "alter", "alt", "am ältesten"],
    explanation:
      "The comparative of 'alt' is 'älter' (with umlaut). Many common one-syllable adjectives take an umlaut in the comparative.",
  },
  {
    id: "komp-004",
    theme: "natur",
    topic: "Komparativ und Superlativ",
    instruction: "Wählen Sie die richtige Komparativ- oder Superlativform.",
    sentence: "Der Mount Everest ist ___ Berg der Welt.",
    correctAnswer: "der höchste",
    options: ["der höchste", "höher", "der hochste", "am höchsten"],
    explanation:
      "The superlative with a noun uses 'der/die/das + adjective + -ste'. 'Hoch' becomes 'höchst-' (with umlaut and 'c' dropped). With the masculine article: der höchste Berg.",
  },
  {
    id: "komp-005",
    theme: "freizeit",
    topic: "Komparativ und Superlativ",
    instruction: "Wählen Sie die richtige Komparativ- oder Superlativform.",
    sentence: "Fußball gefällt mir ___.",
    correctAnswer: "am besten",
    options: ["am besten", "besser", "am gutsten", "gut"],
    explanation:
      "The superlative of 'gut' is 'am besten' (irregular). 'Am besten' is used when no noun follows directly.",
  },
  {
    id: "komp-006",
    theme: "medien",
    topic: "Komparativ und Superlativ",
    instruction: "Wählen Sie die richtige Komparativ- oder Superlativform.",
    sentence: "Ich lese ___ als meine Schwester.",
    correctAnswer: "mehr",
    options: ["mehr", "viel", "am meisten", "vieler"],
    explanation:
      "The comparative of 'viel' is 'mehr' (irregular). Comparative is used with 'als' for comparisons.",
  },
  {
    id: "komp-007",
    theme: "einkaufen",
    topic: "Komparativ und Superlativ",
    instruction: "Wählen Sie die richtige Komparativ- oder Superlativform.",
    sentence: "Dieses Kleid ist ___ als die Hose.",
    correctAnswer: "billiger",
    options: ["billiger", "billig", "am billigsten", "billigste"],
    explanation:
      "The comparative of 'billig' is 'billiger'. Regular adjectives simply add '-er' for the comparative.",
  },

  // ==================== REFLEXIVE VERBEN ====================
  {
    id: "refl-001",
    theme: "freizeit",
    topic: "Reflexive Verben",
    instruction: "Wählen Sie die richtige Form des reflexiven Verbs.",
    sentence: "Ich ___ mich auf die Party.",
    correctAnswer: "freue",
    options: ["freue", "freust", "freut", "freuen"],
    explanation:
      "The reflexive verb 'sich freuen auf' (to look forward to) is conjugated as 'freue' for 'ich'. The reflexive pronoun 'mich' matches the subject.",
  },
  {
    id: "refl-002",
    theme: "gesundheit",
    topic: "Reflexive Verben",
    instruction: "Wählen Sie das richtige Reflexivpronomen.",
    sentence: "Er wäscht ___ die Hände.",
    correctAnswer: "sich",
    options: ["sich", "mich", "dich", "uns"],
    explanation:
      "The reflexive pronoun for 'er/sie/es' is 'sich'. 'Sich die Hände waschen' means to wash one's hands.",
  },
  {
    id: "refl-003",
    theme: "familie",
    topic: "Reflexive Verben",
    instruction: "Wählen Sie das richtige Reflexivpronomen.",
    sentence: "Wir treffen ___ um 10 Uhr.",
    correctAnswer: "uns",
    options: ["uns", "sich", "euch", "mich"],
    explanation:
      "The reflexive pronoun for 'wir' is 'uns'. 'Sich treffen' (to meet) requires a reflexive pronoun matching the subject.",
  },
  {
    id: "refl-004",
    theme: "arbeit",
    topic: "Reflexive Verben",
    instruction: "Wählen Sie die richtige Form des reflexiven Verbs.",
    sentence: "Du musst ___ beeilen!",
    correctAnswer: "dich",
    options: ["dich", "sich", "mich", "uns"],
    explanation:
      "The reflexive pronoun for 'du' is 'dich'. 'Sich beeilen' (to hurry) requires the reflexive pronoun matching the subject.",
  },
  {
    id: "refl-005",
    theme: "reisen",
    topic: "Reflexive Verben",
    instruction: "Wählen Sie die richtige Form des reflexiven Verbs.",
    sentence: "Ich ___ mich für den Kurs angemeldet.",
    correctAnswer: "habe",
    options: ["habe", "bin", "hat", "ist"],
    explanation:
      "Reflexive verbs always form the Perfekt with 'haben', never with 'sein'. 'Sich anmelden' → ich habe mich angemeldet.",
  },
  {
    id: "refl-006",
    theme: "medien",
    topic: "Reflexive Verben",
    instruction: "Wählen Sie das richtige Reflexivpronomen.",
    sentence: "Interessierst du ___ für Technik?",
    correctAnswer: "dich",
    options: ["dich", "sich", "mich", "euch"],
    explanation:
      "The reflexive pronoun for 'du' is 'dich'. 'Sich interessieren für' (to be interested in) is a reflexive verb.",
  },

  // ==================== KONJUNKTIV II (WÜRDE) ====================
  {
    id: "konj-001",
    theme: "reisen",
    topic: "Konjunktiv II (würde)",
    instruction: "Wählen Sie die richtige Form des Konjunktiv II.",
    sentence: "Ich ___ gern nach Italien fahren.",
    correctAnswer: "würde",
    options: ["würde", "würdest", "würden", "würdet"],
    explanation:
      "The Konjunktiv II with 'würde' expresses wishes or hypothetical situations. For 'ich', the form is 'würde'.",
  },
  {
    id: "konj-002",
    theme: "wohnen",
    topic: "Konjunktiv II (würde)",
    instruction: "Wählen Sie die richtige Form des Konjunktiv II.",
    sentence: "Wenn ich reich wäre, ___ ich ein großes Haus kaufen.",
    correctAnswer: "würde",
    options: ["würde", "würdest", "würden", "werde"],
    explanation:
      "In a hypothetical 'wenn' clause, the main clause uses 'würde' + infinitive. For 'ich', the form is 'würde'.",
  },
  {
    id: "konj-003",
    theme: "essen",
    topic: "Konjunktiv II (würde)",
    instruction: "Wählen Sie die richtige Form des Konjunktiv II.",
    sentence: "___ du mir bitte helfen?",
    correctAnswer: "Würdest",
    options: ["Würdest", "Würde", "Würden", "Würdet"],
    explanation:
      "The Konjunktiv II with 'würde' is used for polite requests. For 'du', the form is 'würdest'.",
  },
  {
    id: "konj-004",
    theme: "natur",
    topic: "Konjunktiv II (würde)",
    instruction: "Wählen Sie die richtige Form des Konjunktiv II.",
    sentence: "Wenn es nicht regnen ___, könnten wir spazieren gehen.",
    correctAnswer: "würde",
    options: ["würde", "würden", "würdest", "wird"],
    explanation:
      "In a hypothetical 'wenn' clause, the verb uses Konjunktiv II. 'Es' (third person singular) takes 'würde'.",
  },
  {
    id: "konj-005",
    theme: "arbeit",
    topic: "Konjunktiv II (würde)",
    instruction: "Wählen Sie die richtige Form des Konjunktiv II.",
    sentence: "An deiner Stelle ___ ich mit dem Chef sprechen.",
    correctAnswer: "würde",
    options: ["würde", "würdest", "würden", "werde"],
    explanation:
      "'An deiner Stelle' (in your place) is used to give advice with Konjunktiv II. For 'ich', the form is 'würde'.",
  },
  {
    id: "konj-006",
    theme: "einkaufen",
    topic: "Konjunktiv II (würde)",
    instruction: "Wählen Sie die richtige Form des Konjunktiv II.",
    sentence: "Wir ___ gern mehr Bio-Produkte kaufen, aber sie sind zu teuer.",
    correctAnswer: "würden",
    options: ["würden", "würde", "würdet", "würdest"],
    explanation:
      "For 'wir', the Konjunktiv II form is 'würden'. It expresses a wish that contrasts with reality.",
  },
  {
    id: "konj-007",
    theme: "familie",
    topic: "Konjunktiv II (würde)",
    instruction: "Wählen Sie die richtige Form des Konjunktiv II.",
    sentence: "Wenn ich mehr Zeit ___, würde ich meine Eltern öfter besuchen.",
    correctAnswer: "hätte",
    options: ["hätte", "habe", "hatte", "würde"],
    explanation:
      "For 'haben' in Konjunktiv II, we use the special form 'hätte' instead of 'würde haben'. For 'ich': hätte.",
  },
];
