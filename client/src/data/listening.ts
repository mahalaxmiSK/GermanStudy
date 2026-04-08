export interface ListeningExercise {
  id: string;
  theme: string;
  type: 'dialogue' | 'announcement' | 'phone-message' | 'conversation';
  title: string;
  transcript: string;
  audioFile?: string;
  questions: {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export const listeningExercises: ListeningExercise[] = [
  // ===== FAMILIE =====
  {
    id: 'ls-fam-001',
    theme: 'familie',
    type: 'dialogue',
    title: 'Opas Geburtstag',
    transcript: 'Mann: Hallo Mama! Wie geht es dir?\nFrau: Gut, danke! Ich rufe an, weil Opa am Sonntag 80 wird. Wir machen eine große Feier.\nMann: Oh, das ist schön! Wer kommt alles?\nFrau: Die ganze Familie! Tante Ingrid kommt aus Hamburg und Onkel Peter aus Wien.\nMann: Soll ich etwas mitbringen?\nFrau: Ja, kannst du bitte einen Kuchen backen? Opa mag Schokoladenkuchen am liebsten.\nMann: Klar, das mache ich gern! Um wie viel Uhr fängt die Feier an?\nFrau: Um 14 Uhr bei Opa im Garten.',
    questions: [
      {
        id: 'ls-fam-001-q1',
        question: 'Wie alt wird der Opa?',
        options: ['70 Jahre', '80 Jahre', '90 Jahre'],
        correctAnswer: 1,
      },
      {
        id: 'ls-fam-001-q2',
        question: 'Was soll der Mann mitbringen?',
        options: ['Einen Salat', 'Einen Schokoladenkuchen', 'Getränke'],
        correctAnswer: 1,
      },
      {
        id: 'ls-fam-001-q3',
        question: 'Wann beginnt die Feier?',
        options: ['Um 12 Uhr', 'Um 14 Uhr', 'Um 16 Uhr'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'ls-fam-002',
    theme: 'familie',
    type: 'phone-message',
    title: 'Nachricht von der Schwester',
    transcript: 'Hallo Stefan, hier ist deine Schwester Julia. Ich wollte dir sagen, dass ich nächstes Wochenende mit den Kindern zu euch kommen möchte. Wir kommen am Samstag gegen 11 Uhr und bleiben bis Sonntagnachmittag. Die Kinder freuen sich schon auf Tante Lisa und den Hund. Können wir bei euch übernachten? Sonst suchen wir ein Hotel. Ruf mich bitte heute Abend zurück. Bis dann!',
    questions: [
      {
        id: 'ls-fam-002-q1',
        question: 'Wann möchte Julia kommen?',
        options: ['Dieses Wochenende', 'Nächstes Wochenende', 'In zwei Wochen'],
        correctAnswer: 1,
      },
      {
        id: 'ls-fam-002-q2',
        question: 'Worauf freuen sich die Kinder?',
        options: ['Auf das Schwimmbad', 'Auf Tante Lisa und den Hund', 'Auf den Zoo'],
        correctAnswer: 1,
      },
      {
        id: 'ls-fam-002-q3',
        question: 'Was möchte Julia wissen?',
        options: ['Ob sie kochen soll', 'Ob sie übernachten können', 'Ob Stefan Urlaub hat'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== WOHNEN =====
  {
    id: 'ls-woh-001',
    theme: 'wohnen',
    type: 'dialogue',
    title: 'Wohnungsbesichtigung',
    transcript: 'Vermieter: Willkommen! Hier ist das Wohnzimmer. Es ist 25 Quadratmeter groß.\nMieterin: Oh, das ist sehr hell! Sind die Möbel dabei?\nVermieter: Nein, die Wohnung ist leer. Aber die Küche hat einen Herd und einen Kühlschrank.\nMieterin: Gibt es einen Keller?\nVermieter: Ja, jede Wohnung hat einen eigenen Keller im Erdgeschoss.\nMieterin: Und die Nebenkosten?\nVermieter: Die Miete ist 620 Euro warm, also inklusive Heizung und Wasser. Strom müssen Sie selbst anmelden.\nMieterin: Wann könnte ich einziehen?\nVermieter: Ab dem ersten nächsten Monats.',
    questions: [
      {
        id: 'ls-woh-001-q1',
        question: 'Wie groß ist das Wohnzimmer?',
        options: ['20 Quadratmeter', '25 Quadratmeter', '30 Quadratmeter'],
        correctAnswer: 1,
      },
      {
        id: 'ls-woh-001-q2',
        question: 'Was ist in der Miete inklusive?',
        options: ['Strom und Internet', 'Heizung und Wasser', 'Alle Nebenkosten'],
        correctAnswer: 1,
      },
      {
        id: 'ls-woh-001-q3',
        question: 'Hat die Wohnung Möbel?',
        options: ['Ja, komplett möbliert', 'Nein, aber die Küche hat Geräte', 'Ja, aber nur im Schlafzimmer'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== EINKAUFEN =====
  {
    id: 'ls-ein-001',
    theme: 'einkaufen',
    type: 'dialogue',
    title: 'Auf dem Markt',
    transcript: 'Verkäufer: Guten Morgen! Was darf es sein?\nKundin: Guten Morgen! Ich hätte gern ein Kilo Tomaten und 500 Gramm Erdbeeren.\nVerkäufer: Gern. Die Tomaten sind heute besonders frisch. Noch etwas?\nKundin: Ja, haben Sie auch Basilikum?\nVerkäufer: Natürlich, ein Bund kostet 1,50 Euro.\nKundin: Gut, einen Bund bitte. Was macht das zusammen?\nVerkäufer: Die Tomaten 2,80, die Erdbeeren 3,50 und das Basilikum 1,50. Das macht zusammen 7,80 Euro.\nKundin: Hier sind 10 Euro.\nVerkäufer: Und 2,20 Euro zurück. Vielen Dank und schönen Tag!',
    questions: [
      {
        id: 'ls-ein-001-q1',
        question: 'Wie viel kosten die Erdbeeren?',
        options: ['2,80 €', '3,50 €', '1,50 €'],
        correctAnswer: 1,
      },
      {
        id: 'ls-ein-001-q2',
        question: 'Wie viel muss die Kundin bezahlen?',
        options: ['6,80 €', '7,80 €', '8,80 €'],
        correctAnswer: 1,
      },
      {
        id: 'ls-ein-001-q3',
        question: 'Was kauft die Kundin außer Tomaten und Erdbeeren?',
        options: ['Petersilie', 'Basilikum', 'Salat'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== ESSEN =====
  {
    id: 'ls-ess-001',
    theme: 'essen',
    type: 'conversation',
    title: 'Im Restaurant bestellen',
    transcript: 'Kellner: Guten Abend! Haben Sie schon gewählt?\nFrau: Ja, ich nehme die Tomatensuppe als Vorspeise und dann das Hähnchen mit Reis.\nMann: Und ich hätte gern den gemischten Salat und die Spaghetti Carbonara.\nKellner: Sehr gern. Und was möchten Sie trinken?\nFrau: Ein Glas Weißwein bitte.\nMann: Für mich ein großes Mineralwasser.\nKellner: Mit oder ohne Kohlensäure?\nMann: Ohne bitte.\nKellner: Kommt sofort. Die Suppe und der Salat sind in etwa zehn Minuten fertig.',
    questions: [
      {
        id: 'ls-ess-001-q1',
        question: 'Was bestellt die Frau als Hauptgericht?',
        options: ['Spaghetti Carbonara', 'Hähnchen mit Reis', 'Einen Salat'],
        correctAnswer: 1,
      },
      {
        id: 'ls-ess-001-q2',
        question: 'Was trinkt der Mann?',
        options: ['Weißwein', 'Bier', 'Mineralwasser ohne Kohlensäure'],
        correctAnswer: 2,
      },
      {
        id: 'ls-ess-001-q3',
        question: 'Wie lange dauert es bis zur Vorspeise?',
        options: ['5 Minuten', '10 Minuten', '20 Minuten'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== ARBEIT =====
  {
    id: 'ls-arb-001',
    theme: 'arbeit',
    type: 'phone-message',
    title: 'Nachricht vom Arbeitgeber',
    transcript: 'Guten Tag, Frau Meier, hier spricht Herr Bauer von der Personalabteilung. Ich rufe an wegen Ihrer Bewerbung als Rezeptionistin. Wir möchten Sie gern zu einem Vorstellungsgespräch einladen. Passt Ihnen Mittwoch, der 8. Februar, um 10 Uhr? Das Gespräch findet in unserem Büro in der Berliner Straße 45, dritter Stock, statt. Bitte bringen Sie Ihren Lebenslauf und Ihre Zeugnisse mit. Falls der Termin nicht passt, rufen Sie mich bitte zurück unter 069-4455667. Auf Wiederhören!',
    questions: [
      {
        id: 'ls-arb-001-q1',
        question: 'Warum ruft Herr Bauer an?',
        options: ['Er möchte einen Termin absagen', 'Er lädt Frau Meier zum Vorstellungsgespräch ein', 'Er bietet Frau Meier eine Stelle an'],
        correctAnswer: 1,
      },
      {
        id: 'ls-arb-001-q2',
        question: 'Was soll Frau Meier mitbringen?',
        options: ['Ihren Personalausweis', 'Lebenslauf und Zeugnisse', 'Fotos und Referenzen'],
        correctAnswer: 1,
      },
      {
        id: 'ls-arb-001-q3',
        question: 'Wann ist das Vorstellungsgespräch?',
        options: ['Montag um 9 Uhr', 'Mittwoch um 10 Uhr', 'Freitag um 14 Uhr'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== FREIZEIT =====
  {
    id: 'ls-fre-001',
    theme: 'freizeit',
    type: 'dialogue',
    title: 'Pläne fürs Wochenende',
    transcript: 'Frau: Hast du am Samstag schon etwas vor?\nMann: Nein, noch nicht. Warum fragst du?\nFrau: Ich möchte ins Kino gehen. Der neue Film mit Daniel Brühl läuft.\nMann: Oh ja, den möchte ich auch sehen! Um wie viel Uhr?\nFrau: Die Vorstellung ist um 20:15 Uhr. Wollen wir vorher noch Pizza essen?\nMann: Gute Idee! Dann treffen wir uns um 18:30 bei der Pizzeria am Marktplatz.\nFrau: Super! Ich kaufe die Kinokarten schon online. Die kosten 11 Euro pro Person.\nMann: Perfekt, bis Samstag dann!',
    questions: [
      {
        id: 'ls-fre-001-q1',
        question: 'Wann ist die Kinovorstellung?',
        options: ['Um 18:30 Uhr', 'Um 20:15 Uhr', 'Um 21:00 Uhr'],
        correctAnswer: 1,
      },
      {
        id: 'ls-fre-001-q2',
        question: 'Was machen sie vor dem Kino?',
        options: ['Sie gehen spazieren', 'Sie essen Pizza', 'Sie gehen einkaufen'],
        correctAnswer: 1,
      },
      {
        id: 'ls-fre-001-q3',
        question: 'Wie viel kosten die Kinokarten?',
        options: ['9 Euro pro Person', '11 Euro pro Person', '13 Euro pro Person'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== REISEN =====
  {
    id: 'ls-rei-001',
    theme: 'reisen',
    type: 'announcement',
    title: 'Durchsage im Zug',
    transcript: 'Sehr geehrte Fahrgäste, willkommen im ICE 891 nach Berlin Hauptbahnhof. Nächster Halt: Hannover Hauptbahnhof. Ankunft in circa 15 Minuten. Ausstieg auf der rechten Seite. Reisende nach Bremen steigen bitte in Hannover um, Gleis 11, Abfahrt 14:35 Uhr. Das Bordrestaurant im Wagen 7 ist geöffnet und bietet warme und kalte Speisen an. Wir erreichen Berlin Hauptbahnhof voraussichtlich um 16:20 Uhr. Wir wünschen Ihnen eine angenehme Reise.',
    questions: [
      {
        id: 'ls-rei-001-q1',
        question: 'Wohin fährt der Zug?',
        options: ['Nach Hannover', 'Nach Berlin', 'Nach Bremen'],
        correctAnswer: 1,
      },
      {
        id: 'ls-rei-001-q2',
        question: 'Was sollen Reisende nach Bremen tun?',
        options: ['Im Zug bleiben', 'In Hannover umsteigen', 'Am nächsten Bahnhof aussteigen'],
        correctAnswer: 1,
      },
      {
        id: 'ls-rei-001-q3',
        question: 'In welchem Wagen ist das Bordrestaurant?',
        options: ['Wagen 5', 'Wagen 7', 'Wagen 9'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'ls-rei-002',
    theme: 'reisen',
    type: 'dialogue',
    title: 'Am Flughafen',
    transcript: 'Angestellte: Guten Tag! Ihren Reisepass und Ihre Bordkarte bitte.\nReisender: Hier bitte. Fliegt die Maschine pünktlich?\nAngestellte: Ja, Flug LH 234 nach Rom startet planmäßig um 14:50 Uhr. Haben Sie Gepäck zum Aufgeben?\nReisender: Ja, diesen Koffer bitte.\nAngestellte: Der wiegt 18 Kilo, das ist in Ordnung. Maximal sind 23 Kilo erlaubt. Möchten Sie einen Fensterplatz oder Gangplatz?\nReisender: Einen Fensterplatz bitte.\nAngestellte: Sie haben Platz 14A. Das Boarding beginnt um 14:20 Uhr am Gate B12. Guten Flug!',
    questions: [
      {
        id: 'ls-rei-002-q1',
        question: 'Wohin fliegt der Reisende?',
        options: ['Nach Paris', 'Nach Rom', 'Nach Madrid'],
        correctAnswer: 1,
      },
      {
        id: 'ls-rei-002-q2',
        question: 'Wie schwer ist der Koffer?',
        options: ['15 Kilo', '18 Kilo', '23 Kilo'],
        correctAnswer: 1,
      },
      {
        id: 'ls-rei-002-q3',
        question: 'Welchen Platz bekommt der Reisende?',
        options: ['Einen Gangplatz', 'Einen Fensterplatz', 'Einen Platz am Notausgang'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== GESUNDHEIT =====
  {
    id: 'ls-ges-001',
    theme: 'gesundheit',
    type: 'phone-message',
    title: 'Nachricht von der Arztpraxis',
    transcript: 'Guten Tag, hier ist die Praxis Dr. Schmidt. Leider müssen wir Ihren Termin am Dienstag um 10 Uhr absagen. Dr. Schmidt ist krank. Können Sie stattdessen am Mittwoch um 14 Uhr kommen? Wir haben auch noch einen Termin am Donnerstag um 9 Uhr frei. Bitte rufen Sie uns zurück unter 089-9876543, damit wir einen neuen Termin vereinbaren können. Die Praxis ist heute bis 17 Uhr erreichbar. Vielen Dank und auf Wiederhören!',
    questions: [
      {
        id: 'ls-ges-001-q1',
        question: 'Warum wird der Termin abgesagt?',
        options: ['Die Praxis wird renoviert', 'Dr. Schmidt ist krank', 'Der Patient hat abgesagt'],
        correctAnswer: 1,
      },
      {
        id: 'ls-ges-001-q2',
        question: 'Welche neuen Termine werden angeboten?',
        options: ['Montag und Dienstag', 'Mittwoch und Donnerstag', 'Freitag und Samstag'],
        correctAnswer: 1,
      },
      {
        id: 'ls-ges-001-q3',
        question: 'Bis wann ist die Praxis heute erreichbar?',
        options: ['Bis 15 Uhr', 'Bis 17 Uhr', 'Bis 19 Uhr'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== MEDIEN =====
  {
    id: 'ls-med-001',
    theme: 'medien',
    type: 'conversation',
    title: 'Über Fernsehen sprechen',
    transcript: 'Frau: Was hast du gestern Abend gemacht?\nMann: Ich habe eine neue Serie auf Netflix angefangen. Sie heißt „Dunkel" und spielt in einer kleinen Stadt in Deutschland.\nFrau: Ah ja, die kenne ich! Die ist wirklich spannend. Wie viele Folgen hast du gesehen?\nMann: Drei Folgen. Ich konnte nicht aufhören! Und du?\nFrau: Ich habe die Nachrichten gesehen und dann ein Buch gelesen. Ich schaue nicht so viel fern.\nMann: Wie viel Zeit verbringst du am Tag vor dem Bildschirm?\nFrau: Vielleicht eine Stunde. Ich höre lieber Podcasts, wenn ich koche oder Sport mache.',
    questions: [
      {
        id: 'ls-med-001-q1',
        question: 'Was hat der Mann gestern Abend gemacht?',
        options: ['Er hat ein Buch gelesen', 'Er hat eine Serie geschaut', 'Er hat Radio gehört'],
        correctAnswer: 1,
      },
      {
        id: 'ls-med-001-q2',
        question: 'Wie viele Folgen hat der Mann gesehen?',
        options: ['Eine Folge', 'Drei Folgen', 'Fünf Folgen'],
        correctAnswer: 1,
      },
      {
        id: 'ls-med-001-q3',
        question: 'Was macht die Frau lieber als fernsehen?',
        options: ['Im Internet surfen', 'Podcasts hören', 'Videospiele spielen'],
        correctAnswer: 1,
      },
    ],
  },

  // ===== NATUR =====
  {
    id: 'ls-nat-001',
    theme: 'natur',
    type: 'announcement',
    title: 'Wettervorhersage',
    transcript: 'Und nun die Wettervorhersage für morgen, Samstag, den 15. Juni. Im Norden bleibt es bewölkt mit Temperaturen um 18 Grad. Am Nachmittag kann es regnen, nehmen Sie also einen Regenschirm mit. Im Süden wird es sonnig und warm, bis zu 27 Grad. Ideal für einen Ausflug an den See! Am Abend ziehen überall Wolken auf. Am Sonntag wird es in ganz Deutschland wieder kühler, mit Höchsttemperaturen von 20 Grad. Genießen Sie also den Samstag!',
    questions: [
      {
        id: 'ls-nat-001-q1',
        question: 'Wie wird das Wetter im Süden am Samstag?',
        options: ['Bewölkt und kühl', 'Sonnig und warm', 'Regnerisch und kalt'],
        correctAnswer: 1,
      },
      {
        id: 'ls-nat-001-q2',
        question: 'Was soll man im Norden mitnehmen?',
        options: ['Sonnencreme', 'Einen Regenschirm', 'Eine warme Jacke'],
        correctAnswer: 1,
      },
      {
        id: 'ls-nat-001-q3',
        question: 'Wie wird das Wetter am Sonntag?',
        options: ['Wärmer als Samstag', 'Kühler als Samstag', 'Genauso wie Samstag'],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: 'ls-nat-002',
    theme: 'natur',
    type: 'dialogue',
    title: 'Wanderung planen',
    transcript: 'Frau: Hast du Lust, am Wochenende wandern zu gehen?\nMann: Ja, gern! Wohin denn?\nFrau: Ich kenne einen schönen Weg am Bodensee. Er ist 12 Kilometer lang und geht durch den Wald.\nMann: Wie lange braucht man dafür?\nFrau: Etwa drei Stunden. Unterwegs gibt es ein Gasthaus, wo wir Mittagessen können.\nMann: Klingt gut! Ist der Weg schwer?\nFrau: Nein, er ist leicht. Man braucht nur gute Wanderschuhe. Der Weg ist auch für Kinder geeignet.\nMann: Perfekt! Dann nehme ich meine Tochter mit. Wann treffen wir uns?\nFrau: Um 9 Uhr am Parkplatz bei der Kirche.',
    questions: [
      {
        id: 'ls-nat-002-q1',
        question: 'Wie lang ist der Wanderweg?',
        options: ['8 Kilometer', '12 Kilometer', '15 Kilometer'],
        correctAnswer: 1,
      },
      {
        id: 'ls-nat-002-q2',
        question: 'Ist der Weg schwer?',
        options: ['Ja, nur für erfahrene Wanderer', 'Nein, er ist leicht', 'Mittel, nicht für Kinder'],
        correctAnswer: 1,
      },
      {
        id: 'ls-nat-002-q3',
        question: 'Wann treffen sie sich?',
        options: ['Um 8 Uhr am Bahnhof', 'Um 9 Uhr am Parkplatz', 'Um 10 Uhr am See'],
        correctAnswer: 1,
      },
    ],
  },
];
