class CheckoutPage {
  fillDetails(firstName, lastName, zipCode) {
    cy.get('#first-name').type(firstName);
    cy.get('#last-name').type(lastName);
    cy.get('#postal-code').type(zipCode);
    cy.get('#continue').click();
  }

  verifyOrderSuccess() {
    cy.get('#finish').click();
    cy.get('.complete-header')
      .should('have.text', 'Thank you for your order!');
  }
}

export default CheckoutPage;
