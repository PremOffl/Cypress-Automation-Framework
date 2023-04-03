class BaseUtils {
    
    // Navigating to particular page in the AOE website depending upon the given "path" value
    navigate(path) {
        cy.fixture("config.json").then((data) => {
            cy.visit(data.baseUrl + path)
            cy.log("Navigated to "+data.baseUrl + path)
        })
    }

    // To get the Ttitle of the webpage
    getPageTitle() {
        return cy.title();
    }
}
export default BaseUtils;