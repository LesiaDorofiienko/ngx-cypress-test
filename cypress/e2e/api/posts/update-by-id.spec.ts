describe("Posts", () => {
  it("should update", () => {
    const id = 1;
    const body = {
      title: "Lorem",
      body: "ipsum",
      userId: 2,
    };

    cy.api({
      url: `/posts/${id}`,
      method: "PUT",
      body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).as("updatePost");

    cy.get("@updatePost").its("status").should("equal", 200);

    cy.get("@updatePost")
      .its("body")
      .should("deep.include", { id, ...body });
  });
});
