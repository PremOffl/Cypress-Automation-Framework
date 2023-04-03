
import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.log("Executes before each Scenario/Test.")
    cy.clearLocalStorage()
})

After(() => {
    cy.log("Executes after each Scenario/Test.")
})

