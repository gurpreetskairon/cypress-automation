describe("Read from JSON", () => {
  it("read data from JSON", () => {
    cy.fixture("objects/contact").then((contactElements) => {
      cy.log(contactElements.obj);
    });
  });
});
