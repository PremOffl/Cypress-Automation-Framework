import BaseUtils from "../BaseUtils";

/*
 *Object Repository
 *And Methods
 *For the Elemenst in the 'Job Details' page
 */
class JobDetailsObjects extends BaseUtils {
  elements = {
    lblFirstParagraph: () => cy.xpath('//div[@class="ce-bodytext"]/p[1]'),
  };

  // To verify the page is not empty and having texts
  verifyTheTextIsNotEmpty() {
    cy.log("Validating if the Job details page is not empty")
    this.elements.lblFirstParagraph().find("p").should("not.be.empty")
    cy.log("Job details page is not empty")
  }
}
export default JobDetailsObjects;
