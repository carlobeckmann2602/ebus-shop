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
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    price: "49.99",
    imageUrl: "src/assets/images/products/einstieg-ebus.jpeg",
    imageAlt: "Cover von 'Der Einstieg ins E-Business'",
  },
  {
    id: 2,
    name: "Die Kunst des E-Business",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    price: "25.00",
    imageUrl: "src/assets/images/products/die-kunst-des-ebus.jpeg",
    imageAlt: "Cover von 'Die Kunst des E-Business'",
  },
  {
    id: 3,
    name: "E-Business und die Welt von Morgen",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    price: "69.95",
    imageUrl: "src/assets/images/products/ebus-und-die-welt-von-morgen.jpeg",
    imageAlt: "Cover von 'E-Business und die Welt von Morgen'",
  },
  {
    id: 4,
    name: "E-Business für Fortgeschrittene",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    price: "29.99",
    imageUrl: "src/assets/images/products/ebus-für-fortgeschrittene.jpeg",
    imageAlt: "Cover von 'E-Business für Fortgeschrittene'",
  },
];
