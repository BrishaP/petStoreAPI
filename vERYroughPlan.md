ROUGH PLAN

-Understanding of best practices
-work independently from documentation
-How you approach the task as much as we are in your technical output
-automated tests that follow the CRUD cycle for one of the endpoint groups.
-OBJECT ORIENTED LANGUAGE

This documentation describes a well known sample API which is often used to demonstrate tools and REST conventions:
https://petstoresampleapi.apimatic.dev/

-COMMENTS to make explaining easier
-PLAN
-README - make sure you have good info, brief description, how to setup and run etc
-pipeline to build and deploy the application
-clean code, DRY code (avoid repetition- use functions if you can )
-organise the files and folders in a sensible order to make it easy to follow
-TDD

KEY BITS:
-AUTOMATED TESTS FOLLOWING CRUD CYCLE (for one endpoint group)
-REST conventions
-OOL
-BEST PRACTISE
-demo tools
-*****EXPLAIN AND KNOW WHY I AM USING EACH TOOL OR DEPENDENCY!!!!!! UNDERSTAND THAT I AM USING UNIUT TESTS AND WHY, BDD TESTS AND WHY ETC*******

-TDD-Jest for unit testing
-BDD-perhaps use: cucumber and writing scenarios in Gherkin
-Tests must be RELIABLE, INSIGHTFUL and REUSABLE

-Reusable classes for handling API requests
-Abstract test setup, API calls, assertions into diff methods and classes

STRETCH:
-Perhaps make a mini mobile app from this (expo dev https://expo.dev/ ) and use Appium for mobile testing 
-CI/CD pipeline ( Jenkins, GitHub Actions)
-Most comfortable with Javascript, so maybe create project in javascript (due to time) and begin to try to replicate this in Java just to stretch myself (junior project will be in Java, work with appium and Cucumber BDD)

MVP/AGILE APPROACH:
MVP1:
-Determine what endpoint I want to use
-Jest for TDD
-Set up tests for API CRUD operations (USE REST PRINCIPLES)

Jest: Testing framework for unit and integration tests.
Axios: HTTP client for making requests to the PetStore API.
Cucumber.js: To write BDD-style tests in Gherkin.
-Make sure I'm using proper error handling and status codes


STEPS:
-install dependenciesL jest,axios,cucumber,cucumber-jest
-Determine the rough endpoints and API calls I want to make: e.g add pet, update pet, get pet by ID, Delete pet
-Start with TDD for the CRUD tests that I intend to write JEST (UNIT TESTS):
 (should create new pet, get pet by Id, update pet etc)
-Tests come back red and failing
-Write out CRUD operations petAPI.js using Axios
-Tests should return green
-Note down the commadn to run these tests


MVP2:
-Cucumber.js for BDD tests, Gherkin syntax
-Feature files in plain English

-Read documentation: BDD, Cucumber, Gherkin syntax
-Do I need a features file --> pet.feature
                           -->Step_definitions --> petSteps.js
-Setup Gherkin feature file (Given when then plain english) in pet.feature
-In step definitions folder: do the cucumber BDD test file, make sure you're using petAPI folder with CRUD operations, using cucumber
-Note down the commands to run these tests

MVP3:
-CICD pipeline 


-Remember the difference between CommonJS and ESmodules
CommonJs: Uses require() for importing modules and module.exports or exports for exporting modules.
 system originally used in Node.js. Most older Node.js projects and libraries still use it.

ESModules:
Uses import for importing modules and export for exporting modules.

Usage: This is the modern JavaScript module system, and it's part of the official ECMAScript standard (since ES6/ES2015). Browsers use this, and Node.js now supports it as well, though you need to enable it explicitly in some cases.

BECAUSE I AM FOLLOWING MODERN PRACTISES I AM GOING TO USE ESModules 
ESModules:"type": "module" to package.json and use import and export.
When importing local files, always include the file extension (usually .js).
e.g import myFunction from './myModule.js';
import and export statements must be at the top level of the file
There are two types of exports: Named exports and Default exports.
Named exports: You can export multiple variables or functions from a module.
Default exports: Only one default export is allowed per module.
// Named export
export const myFunction = () => {};

// Default export
export default myFunction;
No require():

You can't use require() in ESModules. Use import instead.
