# 📘 Cypress Automation Framework (Cucumber BDD)

This repository contains a **Cypress automation framework** built using **Cucumber (Gherkin) BDD**.  
It demonstrates real-world automation practices such as **feature-based execution**, **tag-based runs**, **cross-browser testing**, and **parallel execution**.

---

## 🚀 Tech Stack

- **Cypress** (E2E Automation)
- **Cucumber / Gherkin** (`@badeball/cypress-cucumber-preprocessor`)
- **JavaScript**
- **Page Object Model (POM)**
- **Parallel execution** (`cypress-parallel`)
- **HTML / JSON / NDJSON reports**

---

## 📂 Project Structure

```
cypress/
├── features/
│   ├── checkout.feature
│   └── TestExercise.feature
│
├── support/
│   ├── step_definitions/
│   │   ├── checkout.steps.js
│   │   └── testExercise.steps.js
│   └── commands.js
│
├── page_objects/
│   └── checkout/
│       ├── LoginPage.js
│       ├── InventoryPage.js
│       ├── CartPage.js
│       └── CheckoutPage.js
│
├── reports/
│   ├── cucumber-html/
│   ├── cucumber-json/
│   └── cucumber-ndjson/
│
└── screenshots/
```

---

## 🧪 Test Scenarios Covered

### ✅ Checkout Flow (SauceDemo)
- Login with valid credentials
- Add product to cart
- Checkout and place order
- Verify order confirmation

### ✅ AOE Test Exercise
- Keyword filtering functionality
- UI validations

---

## 🏷️ Tags Supported

- `@smoke`
- `@regression`
- `@checkout`

Example:
```gherkin
@smoke @checkout
Scenario: User completes purchase successfully
```

---

## ⚙️ Configuration

Base URL and test data are configured in `cypress.config.ts`.

---

## ▶️ How to Run Tests

### Open Cypress Test Runner (headed)
```bash
npm run debug
```

### Run Checkout feature (headed)
```bash
npm run checkout-tests-chrome
```

### Run Checkout feature (headless)
```bash
npm run checkout-tests-chrome-headless
```

### Run tests by tag
```bash
npm run smoke-tests-headed
npm run regression-tests-headless
```

---

## 🌐 Cross-Browser Execution

Supported browsers:
- Chrome
- Edge
- Firefox
- Electron

---

## ⚡ Parallel Execution

Run multiple feature files in parallel:
```bash
npm run parallel-features
```

---

## 📊 Reports

Reports are generated automatically after execution:
- HTML: `cypress/reports/cucumber-html/`
- JSON: `cypress/reports/cucumber-json/`
- NDJSON: `cypress/reports/cucumber-ndjson/`

---

## 📸 Screenshots & Videos

- Screenshots captured on failure
- Videos recorded by default

---

## 🧠 Framework Highlights

✔ BDD with Gherkin  
✔ Page Object Model  
✔ Feature & tag-based execution  
✔ Cross-browser testing  
✔ Parallel execution  
✔ CI-ready structure  

---

## 👤 Author

**Premnath Ayyadurai**  
Automation Test Engineer  

---


