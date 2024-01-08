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
      "Der Einstieg ins E-Business ist ein Paket, das ihnen die Grundlagen von E-Business in einer Videoreihe erklärt. E-Business ist die Abwicklung von Geschäftsprozessen über das Internet, wie zum Beispiel Online-Handel, Online-Marketing oder Online-Kommunikation. Mit dem Paket lernen sie, wie sie ihr eigenes E-Business aufbauen, betreiben und optimieren können. Sie erfahren, welche Vorteile und Herausforderungen E-Business mit sich bringt, welche Strategien und Tools sie anwenden können und welche rechtlichen und technischen Aspekte sie beachten müssen. Das Paket besteht aus mehreren Videos.",
    price: "49.99",
    imageUrl: "einstieg-ebus.jpeg",
    imageAlt: "Cover von 'Der Einstieg ins E-Business'",
  },
  {
    id: 2,
    name: "Die Kunst des E-Business",
    description:
      "Die Kunst des E-Business ist ein Paket, das ihnen die schönen Seiten des E-Business in einer Videoreihe erklärt. E-Business ist die Abwicklung von Geschäftsprozessen über das Internet, wie zum Beispiel Online-Handel, Online-Marketing oder Online-Kommunikation. Mit dem Paket erfahren sie, wie sie ihr E-Business kreativ, innovativ und erfolgreich gestalten können. Sie lernen, wie sie ihre Kunden begeisterst, ihre Marke stärken und ihre Wettbewerbsfähigkeit erhöhen.",
    price: "25.00",
    imageUrl: "die-kunst-des-ebus.jpeg",
    imageAlt: "Cover von 'Die Kunst des E-Business'",
  },
  {
    id: 3,
    name: "E-Business und die Welt von Morgen",
    description:
      "E-Business und die Welt von Morgen ist ein Paket, das ihnen die Neuerungen im Bereich des E-Business und die Verbindung mit KI in einer Videoreihe erklärt. E-Business ist die Abwicklung von Geschäftsprozessen über das Internet, wie zum Beispiel Online-Handel, Online-Marketing oder Online-Kommunikation. Mit dem Paket erfahren sie, wie sie ihr E-Business an die Herausforderungen und Chancen der digitalen Transformation anpassen können. Sie lernen, wie sie künstliche Intelligenz (KI) sinnvoll und verantwortungsvoll in ihr E-Business integrieren können. Das Paket besteht aus mehreren Videos, die jeweils ein bestimmtes Thema behandeln.",
    price: "69.95",
    imageUrl: "ebus-und-die-welt-von-morgen.jpeg",
    imageAlt: "Cover von 'E-Business und die Welt von Morgen'",
  },
  {
    id: 4,
    name: "E-Business für Fortgeschrittene",
    description:
      "E-Business für Fortgeschrittene ist ein Paket, das auf dem Kurs “Der Einstieg ins E-Business” aufbaut und weiterführende Inhalte im Bereich E-Business behandelt in einer Videoreihe. E-Business ist die integrierte Ausführung aller automatisierbaren Geschäftsprozesse eines Unternehmens mit Hilfe von Informations- und Kommunikationstechnik (IuK). Mit dem Paket vertiefen sie ihr Wissen und ihre Fähigkeiten im E-Business und lernen, wie sie sich den Herausforderungen und Chancen der digitalen Transformation stellen. Das Paket besteht aus mehreren Videos, die jeweils ein bestimmtes Thema behandeln.",
    price: "29.99",
    imageUrl: "ebus-fuer-fortgeschrittene.jpeg",
    imageAlt: "Cover von 'E-Business für Fortgeschrittene'",
  },
];
