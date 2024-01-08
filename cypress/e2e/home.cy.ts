// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

describe("homepage tests", () => {
  beforeEach(() => {
    cy.visit("localhost:5173");
  });

  it("should have popup on init", () => {
    cy.get(".modal-box").should("be.visible");
  });

  it("should have close button on popup", () => {
    cy.get(".modal-box").find("button").click();
    cy.get(".modal-box").should("not.be.visible");
  });

  it("should have four product card", () => {
    cy.get(".card").not(".card-compact").should("have.length", 4);
  });

  it("should have all four cards equipped with image, title, text and price", () => {
    cy.get(".card")
      .not(".card-compact")
      .each((card) => {
        cy.wrap(card).find("img.h-full").should("exist"); // image
        cy.wrap(card).find("h2.card-title").should("exist"); // title
        cy.wrap(card).find("p").should("exist"); // description
        cy.wrap(card).find("span.stat-value.text-primary").should("exist"); // price
      });
  });
});
