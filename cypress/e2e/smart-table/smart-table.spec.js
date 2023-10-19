describe("Smart Table Page", () => {
  const getTextXpath = (text) => `//div[text()="${text}"]`;

  it("Shoud creat a new user and update", () => {
    // inputs
    const idInput = '//input[@ng-reflect-name="id"]';
    const firstNameInput = '//input[@ng-reflect-name="firstName"]';
    const lastNameInput = '//input[@ng-reflect-name="lastName"]';
    const usernameInput = '//input[@ng-reflect-name="username"]';
    const emailInput = '//input[@ng-reflect-name="email"]';
    const ageInput = '//input[@ng-reflect-name="age"]';
    // buttons
    const startCreatingButton = "//th [@ng2-st-add-button]";
    const createButton = "//ng2-st-actions/a[1]";
    const startEditingButton = "//tr[1]//ng2-st-tbody-edit-delete/a[1]";
    const editButton = "//ng2-st-tbody-create-cancel/a[1]";
    // variables
    const id = "0";
    const newId = "111";

    const firstName = "Lesia";
    const newFirstName = "Lessssssia";

    const lastName = "Dorofiienko";
    const newLastName = "Matveychyk";

    const username = "LessssiaD";
    const newUsername = "LesiaD.";

    const email = "test@test.test";
    const newEmail = "testerittttt@test.test";

    const age = "26";
    const newAge = "30";

    cy.visit("pages/tables/smart-table");

    // open create "modal"
    cy.xpath(startCreatingButton).click();
    // Fill inputs
    cy.xpath(idInput).type(id);
    cy.xpath(firstNameInput).type(firstName);
    cy.xpath(lastNameInput).type(lastName);
    cy.xpath(usernameInput).type(username);
    cy.xpath(emailInput).type(email);
    cy.xpath(ageInput).type(age);
    // save
    cy.xpath(createButton).click();
    // Check
    cy.xpath(getTextXpath(id)).should("exist");
    cy.xpath(getTextXpath(firstName)).should("exist");
    cy.xpath(getTextXpath(lastName)).should("exist");
    cy.xpath(getTextXpath(username)).should("exist");
    cy.xpath(getTextXpath(email)).should("exist");
    cy.xpath(getTextXpath(age)).should("exist");

    // Enter edit mode
    cy.xpath(startEditingButton).click();
    // change inputs
    cy.xpath(idInput).clear().type(newId);
    cy.xpath(firstNameInput).clear().type(newFirstName);
    cy.xpath(lastNameInput).clear().type(newLastName);
    cy.xpath(usernameInput).clear().type(newUsername);
    cy.xpath(emailInput).clear().type(newEmail);
    cy.xpath(ageInput).clear().type(newAge);

    // save
    cy.xpath(editButton).click();
    // check
    cy.xpath(getTextXpath(newId)).should("exist");
    cy.xpath(getTextXpath(newFirstName)).should("exist");
    cy.xpath(getTextXpath(newLastName)).should("exist");
    cy.xpath(getTextXpath(newUsername)).should("exist");
    cy.xpath(getTextXpath(newEmail)).should("exist");
    cy.xpath(getTextXpath(newAge)).should("exist");
  });
});
// cy.xpath(input
