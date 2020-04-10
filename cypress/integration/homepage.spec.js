context("Homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Navigation Tests", () => {
    it(".should() - Exist on the page", () => {
      cy.get("nav").should("exist");
    });
  });
});
