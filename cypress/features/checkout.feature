@smoke @checkout
Feature: Checkout flow on SauceDemo

  Scenario: User completes purchase successfully
    Given I open the SauceDemo application
    And I login with valid credentials
    When I add the first product to the cart
    And I navigate to the cart
    And I proceed to checkout
    And I enter checkout details
    Then the order should be placed successfully
