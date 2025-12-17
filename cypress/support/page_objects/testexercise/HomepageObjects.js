import BaseUtils from "../BaseUtils";

/* Object Repository
 * And Methods
 * For the Elements in the Homepage
 */
class HomepageObjects extends BaseUtils {
  elements = {
    lblCareers: () =>cy.xpath("(//div[@data-qa='mobile_nav']//a[contains(@href,'career')])[1]"),
    lblVacancies: () =>cy.xpath("(//div[@data-qa='mobile_nav']//a[contains(@href,'vacancies')])[1]"),
    btnAcceptCookies: () => cy.xpath("//button[@id='onetrust-accept-btn-handler']"),
    iconMobileNavigation: () => cy.get('a[data-qa="mobile_nav_trigger"]'),
  };

  // Method to click on Careers link
  clickOnCareers() {
    cy.log("Clicking on Careers link")
    this.elements.lblCareers().scrollIntoView().should('be.visible')
    this.elements.lblCareers().click()
    cy.log("Clicked on Careers link")
  }

  // Method to click on Vacancies link
  clickOnVacancies() {
    this.elements.lblVacancies().scrollIntoView().should('be.visible')
    this.elements.lblVacancies().click()
    cy.log("Clicked on Vacancies link")
  }

  // Click on OK button from the "Accept Cookies popup", which comes first time when we open the AOE URL.
  ClickOnAcceptCookiesIfPresent() {
    if (this.elements.btnAcceptCookies) {
      cy.log("Accept Cookies Popup found")
      this.elements.btnAcceptCookies().click()
      cy.log("Clicked on Ok button from Accept Cookies popup")
    } else {
      cy.log("Accept Cookies Popup not found")
    }
  }

  // Method to open the left navigation panel
  ClickOnMobileNavigationMenuIfPresent() {
    if (this.elements.iconMobileNavigation) {
      cy.log("Left/mobile menu navigation icon is present")
      this.elements.iconMobileNavigation().click()
      cy.log("Left navigation panel opened")
    } else {
      cy.log("Left/mobile menu navigation icon is not present")
    }
  }
}
export default HomepageObjects;
