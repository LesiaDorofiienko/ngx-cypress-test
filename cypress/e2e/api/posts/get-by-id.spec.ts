describe("Posts", () => {
  it("get by id", () => {
    const id = 7;
    const body = {
      userId: 1,
      id,
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    };

    cy.api({
      url: `/posts/${id}`,
      method: "GET",
      //   body,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).as("getById");

    cy.get("@getById").its("status").should("equal", 200);

    cy.get("@getById").its("body").should("deep.include", body);
  });
});
