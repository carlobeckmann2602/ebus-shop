export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageAlt: string;
};
export type CartItem = Product & { quantity: number };

export const ALL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Der Einstieg ins E-Business",
    description:
      "Der Einstieg ins E-Business ist ein Paket, das dir die Grundlagen von E-Business in einer Videoreihe erklärt. E-Business ist die Abwicklung von Geschäftsprozessen über das Internet, wie zum Beispiel Online-Handel, Online-Marketing oder Online-Kommunikation. Mit dem Paket lernst du, wie du dein eigenes E-Business aufbauen, betreiben und optimieren kannst. Du erfährst, welche Vorteile und Herausforderungen E-Business mit sich bringt, welche Strategien und Tools du anwenden kannst und welche rechtlichen und technischen Aspekte du beachten musst. Das Paket besteht aus mehreren Videos.",
    price: "49.99",
    imageUrl: "src/assets/images/products/einstieg-ebus.jpeg",
    imageAlt: "Cover von 'Der Einstieg ins E-Business'",
  },
  {
    id: 2,
    name: "Die Kunst des E-Business",
    description:
      "Die Kunst des E-Business ist ein Paket, das dir die schönen Seiten des E-Business in einer Videoreihe erklärt. E-Business ist die Abwicklung von Geschäftsprozessen über das Internet, wie zum Beispiel Online-Handel, Online-Marketing oder Online-Kommunikation. Mit dem Paket erfährst du, wie du dein E-Business kreativ, innovativ und erfolgreich gestalten kannst. Du lernst, wie du deine Kunden begeisterst, deine Marke stärkst und deine Wettbewerbsfähigkeit erhöhst.",
    price: "25.00",
    imageUrl: "src/assets/images/products/die-kunst-des-ebus.jpeg",
    imageAlt: "Cover von 'Die Kunst des E-Business'",
  },
  {
    id: 3,
    name: "E-Business und die Welt von Morgen",
    description:
      "E-Business und die Welt von Morgen ist ein Paket, das dir die Neuerungen im Bereich des E-Business und die Verbindung mit KI in einer Videoreihe erklärt. E-Business ist die Abwicklung von Geschäftsprozessen über das Internet, wie zum Beispiel Online-Handel, Online-Marketing oder Online-Kommunikation. Mit dem Paket erfährst du, wie du dein E-Business an die Herausforderungen und Chancen der digitalen Transformation anpassen kannst. Du lernst, wie du künstliche Intelligenz (KI) sinnvoll und verantwortungsvoll in dein E-Business integrieren kannst. Das Paket besteht aus mehreren Videos, die jeweils ein bestimmtes Thema behandeln.",
    price: "69.95",
    imageUrl: "src/assets/images/products/ebus-und-die-welt-von-morgen.jpeg",
    imageAlt: "Cover von 'E-Business und die Welt von Morgen'",
  },
  {
    id: 4,
    name: "E-Business für Fortgeschrittene",
    description:
      "E-Business für Fortgeschrittene ist ein Paket, das auf dem Kurs “Der Einstieg ins E-Business” aufbaut und weiterführende Inhalte im Bereich E-Business behandelt in einer Videoreihe. E-Business ist die integrierte Ausführung aller automatisierbaren Geschäftsprozesse eines Unternehmens mit Hilfe von Informations- und Kommunikationstechnik (IuK). Mit dem Paket vertiefst du dein Wissen und deine Fähigkeiten im E-Business und lernst, wie du dich den Herausforderungen und Chancen der digitalen Transformation stellst. Das Paket besteht aus mehreren Videos, die jeweils ein bestimmtes Thema behandeln.",
    price: "29.99",
    imageUrl: "src/assets/images/products/ebus-für-fortgeschrittene.jpeg",
    imageAlt: "Cover von 'E-Business für Fortgeschrittene'",
  },
];
