describe("Stepper Page Test", () => {
  beforeEach(() => {
    cy.visit("pages/layout/stepper");
  });

  it("Stepper should display correct title", () => {
    const titleSelector = '//nb-stepper[@orientation="horizontal"]/div[2]/h3';
    const nextButtonSelector =
      '//nb-stepper[@orientation="horizontal"]/div[2]/button[2]';

    cy.xpath(titleSelector).should("have.text", "Step content #1");
    cy.xpath(nextButtonSelector).click();

    cy.xpath(titleSelector).should("have.text", "Step content #2");
    cy.xpath(nextButtonSelector).click();

    cy.xpath(titleSelector).should("have.text", "Step content #3");
    cy.xpath(nextButtonSelector).click();

    cy.xpath(titleSelector).should("have.text", "Step content #4");
    cy.xpath(nextButtonSelector).should("be.disabled");
  });
});
