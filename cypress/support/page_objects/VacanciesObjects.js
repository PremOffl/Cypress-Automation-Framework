import BaseUtils from "./BaseUtils";

/* Object Repository
 * And Methods
 * For the Elements in the 'Vacancies' page
 */
class VacanciesObjects extends BaseUtils {
  elements = {
    txtFilterByKeyword: () => cy.get("#filter-keyword"),
    listFrontEndDevelopmentResults: () =>cy.get('tr[data-category-id="Frontend Development"]'),
    linkFirstAvailableResult: () =>cy.xpath('(//tr[@data-category-id="Frontend Development"])[1]/td[1]/a[1]'),
  };

  // To enter a value in the 'keyword' search box
  enterKeyword(keyword) {
    this.elements.txtFilterByKeyword().scrollIntoView().should('be.visible')
    this.elements.txtFilterByKeyword().click()
    this.elements.txtFilterByKeyword().type(keyword)
    cy.log("Entered keyword '" + keyword + "'")
  }

  // To Verify the searched keyword available in the search results
  verifyKeywordAvailableInTheResults(keyword) {
    cy.log("Verifying if the keyword '" + keyword + "' is present in results")
    this.elements
      .listFrontEndDevelopmentResults()
      .first()
      .contains(keyword, { matchCase: false })
    cy.log("Keyword '" + keyword + "' is present in the search results")
  }

  // To click on the First search result
  clickOnFirstAvailableResult() {
    this.elements.linkFirstAvailableResult().click()
    cy.log("Clicked on the first available result")
  }
}
export default VacanciesObjects;
