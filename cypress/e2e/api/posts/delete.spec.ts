describe("Posts", () => {
  it("delete by id", () => {
    const id = 7;
    const body = {};

    cy.api({
      url: `/posts/${id}`,
      method: "DELETE",
      //   body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).as("deleteById");

    cy.get("@deleteById").its("status").should("equal", 200);

    cy.get("@deleteById").its("body").should("deep.include", body);
  });
});
