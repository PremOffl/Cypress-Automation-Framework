
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomepageObjects from "../page_objects/HomepageObjects";
import JobDetailsObjects from "../page_objects/JobDetailsObjects";
import VacanciesObjects from "../page_objects/VacanciesObjects";

const homePage = new HomepageObjects();
const jobdetails = new JobDetailsObjects
const vacancies = new VacanciesObjects();

Given(`I navigate to the AOE Homepage`, () => {
    homePage.navigate("");
    homePage.ClickOnAcceptCookiesIfPresent();
})

When(`I navigate to the Vacancies page of the Career section`, () => {
    homePage.ClickOnMobileNavigationMenuIfPresent()
    homePage.clickOnCareers()
    homePage.clickOnVacancies()
})

Given(`I verify that the content of the job offering is been displayed and not empty`, () => {
    jobdetails.verifyTheTextIsNotEmpty()
})

When(`Filter the offerings by entering {string} as keyword`, (keyword) => {
    vacancies.enterKeyword(keyword)
})

Then(`I verify the keyword {string} is available in the returned list`, (keyword) => {
    vacancies.verifyKeywordAvailableInTheResults(keyword)
})

Then(`I open the first entry which is displayed`, () => {
    vacancies.clickOnFirstAvailableResult()
})



