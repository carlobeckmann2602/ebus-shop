describe("homepage tests", () => {
  beforeEach(() => {
    cy.visit("localhost:5173/checkout");
    window.localStorage.setItem(
      "cart",
      '[{"id":1,"name":"Der Einstieg ins E-Business ist ein Paket, das ihnen die Grundlagen von E-Business in einer Videoreihe erklärt. E-Business ist die Abwicklung von Geschäftsprozessen über das Internet, wie zum Beispiel Online-Handel, Online-Marketing oder Online-Kommunikation. Mit dem Paket lernen sie, wie sie ihr eigenes E-Business aufbauen, betreiben und optimieren können. Sie erfahren, welche Vorteile und Herausforderungen E-Business mit sich bringt, welche Strategien und Tools sie anwenden können und welche rechtlichen und technischen Aspekte sie beachten müssen. Das Paket besteht aus mehreren Videos.","price":"49.99","imageAlt":"Cover von \'Der Einstieg ins E-Business\'","imageUrl":"einstieg-ebus.jpeg","quantity":4}]'
    );
  });

  it("should feature 5 payment methods", () => {
    cy.get('input[name="my-accordion-1"]').should("have.length", 4);
  });

  it("should feature all payment methods", () => {
    const allPayments = ["PayPal", "Kreditkarte", "Apple Pay", "Google Pay"];
    const payments = cy.get(".collapse-title");
    payments.should("have.length", 4);
    payments.each((pay, index) => {
      cy.wrap(pay).contains(allPayments[index]);
    });
  });

  it("should show correct demo on selection", () => {
    cy.get("button").eq(0).click();
    const allPayments = ["PayPal", "Kreditkarte", "Apple Pay", "Google Pay"];
    const payments = cy.get('input[name="my-accordion-1"]');
    payments.each((pay, index) => {
      cy.wrap(pay).click();
      cy.get(
        "h1.w-full.flex.flex-row.justify-center.items-center.text-4xl.font-bold"
      ).contains(allPayments[index]);
    });
  });
});
