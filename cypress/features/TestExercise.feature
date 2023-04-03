@regression
Feature: AOE- Test Automation Exercise

    Background: Pre-condition
        Given I navigate to the AOE Homepage

    @smoke
    Scenario: Verify the Filter By Keyword funtionality
         When I navigate to the Vacancies page of the Career section
         And Filter the offerings by entering "frontend" as keyword
         Then I verify the keyword "frontend" is available in the returned list
         When I open the first entry which is displayed
         Then I verify that the content of the job offering is been displayed and not empty


