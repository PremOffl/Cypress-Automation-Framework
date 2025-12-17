class InventoryPage {
  addFirstProductToCart() {
    cy.get('.inventory_item').first().find('button').click();
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default InventoryPage;
