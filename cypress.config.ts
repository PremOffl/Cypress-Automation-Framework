import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";


export default defineConfig({
  e2e: {

    specPattern: "**/*.feature",
    video: true,

    baseUrl: "https://www.saucedemo.com",

    env: {
      // SauceDemo credentials
      username: "standard_user",
      password: "secret_sauce",

      // Checkout test data
      firstName: "Premnath",
      lastName: "Ayyadurai",
      zipCode: "2716",
    },

    // ----------------------------
    // Cucumber + Esbuild setup
    // ----------------------------
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
