import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import LoginPage from '../page_objects/checkout/LoginPage';
import InventoryPage from '../page_objects/checkout/InventoryPage';
import CartPage from '../page_objects/checkout/CartPage';
import CheckoutPage from '../page_objects/checkout/CheckoutPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

Given('I open the SauceDemo application', () => {
  cy.visit('/');
});

Given('I login with valid credentials', () => {
  loginPage.login(
    Cypress.env('username'),
    Cypress.env('password')
  );
});

When('I add the first product to the cart', () => {
  inventoryPage.addFirstProductToCart();
});

When('I navigate to the cart', () => {
  inventoryPage.goToCart();
});

When('I proceed to checkout', () => {
  cartPage.checkout();
});

When('I enter checkout details', () => {
  checkoutPage.fillDetails(
    Cypress.env('firstName'),
    Cypress.env('lastName'),
    Cypress.env('zipCode')
  );
});

Then('the order should be placed successfully', () => {
  checkoutPage.verifyOrderSuccess();
});
