context("Homepage Desktop", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("The user opens the page on desktop", () => {
    it("shows the navigation", () => {
      //Is the navigation element itself visible
      cy.get("nav").should("be.visible");

      //Is the left-side title visible
      cy.contains("Josh Jackson").should("be.visible");

      //Are all of the social links visible
      cy.get('a[href="https://github.com/pjaerr"]').should("be.visible");
      cy.get(
        'a[href="https://www.linkedin.com/in/joshua-jackson-53b9bb14b/"]'
      ).should("be.visible");
      cy.get('a[href="https://twitter.com/Pjaerr"]').should("be.visible");

      //Is the theme switcher visible
      cy.get("input.theme-switcher-checkbox").should("be.visible");
    });
  });

  describe("The user switches themes", () => {
    it("changes the colour of all relevant elements", () => {
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(255, 255, 255)"
      );
      cy.contains("Josh Jackson").should(
        "have.css",
        "color",
        "rgb(42, 47, 54)"
      );
      cy.get('label[aria-label="toggle light theme"]').click();
      cy.get("body").should("have.css", "background-color", "rgb(40, 44, 53)");
      cy.contains("Josh Jackson").should(
        "have.css",
        "color",
        "rgb(255, 255, 255)"
      );
    });
  });

  describe("The user switches themes and reloads the page", () => {
    it("keeps the theme change across reloads", () => {
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(255, 255, 255)"
      );
      cy.contains("Josh Jackson").should(
        "have.css",
        "color",
        "rgb(42, 47, 54)"
      );
      cy.get('label[aria-label="toggle light theme"]').click();
      cy.get("body").should("have.css", "background-color", "rgb(40, 44, 53)");
      cy.contains("Josh Jackson").should(
        "have.css",
        "color",
        "rgb(255, 255, 255)"
      );

      cy.reload();

      cy.get("body").should("have.css", "background-color", "rgb(40, 44, 53)");
      cy.contains("Josh Jackson").should(
        "have.css",
        "color",
        "rgb(255, 255, 255)"
      );
    });
  });
});

context("Homepage Mobile", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("iphone-5");
  });

  describe("The user opens the page on desktop", () => {
    it("shows the closed navigation", () => {
      //Is the left-side title visible?
      cy.contains("Josh Jackson").should("be.visible");

      //Is the menu button visible?
      cy.get('button[aria-label="toggle mobile menu"]').should("be.visible");
    });
  });

  describe("The user clicks on the menu button", () => {
    it("opens the mobile navigation menu", () => {
      //Is the left-side title visible?
      cy.contains("Josh Jackson").should("be.visible");

      //Open mobile nav menu
      cy.get('button[aria-label="toggle mobile menu"]').click();

      //Is the navigation element itself visible
      cy.get("nav").should("be.visible");

      //Are all of the social links visible
      cy.get('a[href="https://github.com/pjaerr"]').should("be.visible");
      cy.get(
        'a[href="https://www.linkedin.com/in/joshua-jackson-53b9bb14b/"]'
      ).should("be.visible");
      cy.get('a[href="https://twitter.com/Pjaerr"]').should("be.visible");

      //Is the theme switcher visible
      cy.get('label[aria-label="toggle light theme"]').should("be.visible");
    });
  });
});
