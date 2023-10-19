describe("Modal Overlay Tests", () => {
  it("Should open modal window and check its content", () => {
    cy.visit("pages/modal-overlays/dialog");
    const modal = "//nb-dialog-container";
    cy.contains("Enter Name").click();

    cy.xpath(modal).should("be.visible");

    cy.xpath(`${modal}//nb-card-header`).should("have.text", "Enter your name");

    cy.xpath(`${modal}//input[@placeholder="Name"]`).should("exist");

    cy.xpath(`${modal}//button[1]`)
      .should("exist")
      .should("have.text", "Cancel");
    cy.xpath(`${modal}//button[2]`)
      .should("exist")
      .should("have.text", "Submit");
  });
});
