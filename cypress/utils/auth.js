export function login({ email, password, rememberMe } = {}) {
  cy.visit("auth/login");

  cy.xpath('//input[@id="input-email"]').type(email);
  cy.xpath('//input[@id="input-password"]').type(password);

  if (rememberMe) {
    cy.xpath('//span[@class="custom-checkbox"]').click();
  }

  cy.xpath('//button[@status="primary"]').click();

  cy.url().should("contain", "/pages");
}
