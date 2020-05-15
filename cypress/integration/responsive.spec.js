const cyView = require("cy-view");

const devices = [
  {
    model: "Macbook 15",
    width: 1440,
    height: 900,
  },
  {
    model: "iPad 2",
    width: 768,
    height: 1024,
  },
  {
    model: "iPhone 5/SE",
    width: 320,
    height: 568,
  },
  {
    model: "Pixel 2",
    width: 411,
    height: 731,
  },
  {
    model: "Pixel 2 XL",
    width: 411,
    height: 823,
  },
  {
    model: "iPhone X",
    width: 375,
    height: 812,
  },
  {
    model: "iPhone 6",
    width: 375,
    height: 667,
  },
  {
    model: "iPhone 6+",
    width: 414,
    height: 736,
  },
];

context("Responsive Tests", () => {
  cyView(devices)(
    ["/", "/blog", "/blog/building-desktop-app-svelte-electron"],
    () => {
      describe("The user opens the page on multiple devices", () => {
        it("shouldn't overflow horizontally", () => {
          Cypress.$("html").scrollLeft(1);

          const isPageOverflowing = Cypress.$("html").scrollLeft() !== 0;

          expect(isPageOverflowing).to.be.false;
        });
      });
    }
  );
});
