describe("Contact_Suite", () => {
  let pageTitle = "";

  beforeEach(() => {
    cy.fixture("app").then((appData) => {
      cy.visit("/");
      pageTitle = appData.title;
    });
  });

  it.only("Verify title of the page", () => {
    cy.title().should("eq", pageTitle);
  });

  it("testcase 1 - Verify error messages of mandatory fields.", () => {
    cy.fixture("objects/contact").then((contactPage) => {
      cy.get(contactPage.elements.contactMenu).click();
      cy.get(contactPage.elements.submitButton).click();
      cy.get(contactPage.elements.forenameErrorLabel).should(
        "have.text",
        contactPage.expected.forenameErrorMessage
      );
      cy.get(contactPage.elements.emailErrorLabel).should(
        "have.text",
        contactPage.expected.emailErrorMessage
      );
      cy.get(contactPage.elements.mesageErrorLabel).should(
        "have.text",
        contactPage.expected.messageErrorMessage
      );
      cy.get(contactPage.elements.forenameTextbox).type(contactPage.data.name);
      cy.get(contactPage.elements.emailTextbox).type(contactPage.data.email);
      cy.get(contactPage.elements.messageTextbox).type(
        contactPage.data.message
      );

      cy.get(contactPage.elements.forenameErrorLabel).should("not.exist");
      cy.get(contactPage.elements.emailErrorLabel).should("not.exist");
      cy.get(contactPage.elements.messageErrorLabel).should("not.exist");
    });
  });

  Cypress._.times(5, () => {
    it("testcase 2 - Validate successful submission message.", () => {
      cy.fixture("objects/contact").then((contactPage) => {
        cy.get(contactPage.elements.contactMenu).click();
        cy.get(contactPage.elements.forenameTextbox).type(
          contactPage.data.name
        );
        cy.get(contactPage.elements.emailTextbox).type(contactPage.data.email);
        cy.get(contactPage.elements.messageTextbox).type(
          contactPage.data.message
        );

        cy.get(contactPage.elements.submitButton).click();
        cy.get(contactPage.elements.backButton, { timeout: 60000 });

        cy.contains(
          contactPage.expected.successMessage.replace(
            "<name>",
            contactPage.data.name
          )
        );
      });
    });
  });
});
