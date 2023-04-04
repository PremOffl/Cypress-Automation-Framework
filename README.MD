
**Cypress Cucumber Automation Framework:**

=> Author           : Premnath Ayyadurai
=> Description      : Cypress-Cucumber Automation Framework for AOE Test Automation Exercise
=> Cypress version  : 12.9.0
=> Node version     : 18.15.0
=> Last Modified    : 03/04/2023


**Framework Folder Structure:**

=> Dependencies and other configuration details => package.json
=> Feature file: cypress\features\TestExercise.feature
=> Page Objects: cypress\support\page_objects
=> Step Definitions: cypress\support\step_definitions
=> Base URL/ Common framework information => cypress\fixtures\config.json
=> Reports:
    cucumber-html report => cypress\reports\cucumber-html
    html-multi-report => cypress\reports\html-multi-report
    cucumber-json report => cypress\reports\cucumber-json


1. **How to execute the testcases:**

**Assumptions- Cypress is already setup in your project**

*=> To install the dependencies:*
    Step 1: Clone the github repo/ download as zip file
            Gihub repository: <https://github.com/PremOffl/Cypress-Automation-Framework.git>
            Extract the file and keep it in a folder if downloaded as zip file.
    Step 2: Open Gitbash in project directory 
            and Execute "npm install cypress --save-dev"
    Step 3: Execute the tests following the below instructions.

*=> Executing All Testcases inside on feature file*
    Step 1: Open gitbash in project location
    Step 2: Execute: "npm run <profile_name>"
            Note: Profile name available under 'scripts' section in package.json file
            Eg:
            Chrome headed mode      : "npm run aoe-tests-headed-chrome"
            Edge headed mode        : "npm run aoe-tests-headed-edge"
            Electron headed mode    : "npm run aoe-tests-headed-electron"
            Firefox headed mode     : "npm run aoe-tests-headed-firefox"

*=> Execution using tags:*
    Step 1: Open gitbash in project location
    Step 2: Execute: "npm run <profile_name>"
            Note: Profile name available under 'scripts' section in package.json file
            Eg:
            Smoke tags      : "npm run smoke-tests-headed"
            Regression tags : "npm run regression-tests-headed"

*=> Execution as 'headed' or 'headless' mode*
    Step 1: Open gitbash in project location
    Step 2: Execute: "npm run <profile_name>"
            Note: Profile name available under 'scripts' section in package.json file
            Eg:
            Headed      : "npm run smoke-tests-headed"
            Headless    : "npm run smoke-tests-headless"

*=> Executing in Debug Mode:*
    Step 1: Open gitbash in project location
    Step 2: Execute 'npx cypress open'


2. **Technologies Used in this framework:** 
    
=> Cypress              : 12.9.0
=> NodeJS               : 18.15.0
=> Gitbash              : 2.40.0
=> Java JDK             : 11.0.2
=> cypress-xpath        : 2.0.1
=> multiple-cucumber-html-reporter  : 3.3.0
=> cypress-cucumber-preprocessor    : 13.0.2
=> cypress-cucumber-attach-screenshots-to-failed-steps : 1.0.0
=> Visual Studio Code (any version. Latest one preferred)
=> Browsers    : Chrome, Edge, Electron, Firefox

3. **Demo Video**
=> Please request access, so that I can share access for the account..
    https://drive.google.com/drive/folders/1WaXFH-SN6Wfu4b8Z7lIeknEx329szCaY?usp=share_link

