# **Project Notes**

## **Plan Overview**

I'm setting out to create a project that showcases my understanding of **TDD**, **BDD**, **REST conventions**, and working with an **Object-Oriented Language** (OOL). The goal is to automate tests around the **CRUD cycle** for a chosen endpoint (I’ll probably stick to the Pet endpoint), using the **PetStore API** as a base.

The overall plan is to:
1. Write **unit tests** (TDD) for the CRUD cycle using **Jest**.
2. Implement **BDD** testing with **Cucumber.js** to simulate user behavior and actions via **Gherkin syntax**.
3. Apply **best practices** like **clean code** (DRY principles) and organize everything neatly.
4. Maybe stretch into learning Java and use **Appium** for mobile testing.
5. Set up a **CI/CD pipeline** to automate the testing and deployment process.
6. Above all else, I need to understand every tool I use, why I'm using it, and how I’m applying **REST principles**.

---

## **Reasoning Behind Tools**

### **Jest for TDD:**
- Jest is a great testing framework for **JavaScript**, and since I’m most comfortable with JavaScript, it makes sense to use it. I’ll start by using Jest for **unit tests**. These will verify if my CRUD operations (Create, Read, Update, Delete) are working properly. TDD is important here because I want to write tests first, fail them, and then write code that makes the tests pass (red-green-refactor cycle).

### **Cucumber.js for BDD:**
- I'm using Cucumber.js for **BDD** (Behavior-Driven Development) because I can write my test cases in plain English using **Gherkin** syntax, which makes it more user-friendly. BDD focuses on simulating how an actual user would interact with the API. This will let me build more **reliable, reusable, and insightful tests** based on real-world scenarios.

### **Axios for HTTP Requests:**
- **Axios** is my go-to for making HTTP requests. It’s simple to use and works well with **promises**, which I’ll use to handle responses from the PetStore API. Axios will handle all the CRUD operations, such as creating new pets or retrieving pet data by ID.

### **GitHub Actions for CI/CD Pipeline:**
- I'll set up **GitHub Actions** to run my tests automatically on each push to the main branch. This will make sure my app is always tested and ready to deploy without manual intervention, saving time and catching errors early.

---

## **Key Concepts to Keep in Mind**

- **Test-Driven Development (TDD)**: Start by writing tests, watch them fail, then build the functionality. This helps me ensure that I’m focusing on the necessary features and avoiding over-engineering.
- **Behavior-Driven Development (BDD)**: With Cucumber.js, I can write tests in a natural language style (Gherkin). This makes the tests easier to understand and ensures I’m developing from the perspective of how the API is used.
- **Best Practices**:
   - Keep my code **DRY** (Don’t Repeat Yourself) by creating reusable functions and classes.
   - **Clean code**: Clear variable names, properly structured logic, and comments where necessary.
   - Stick to **REST principles** when working with the API (i.e., using proper HTTP verbs: GET, POST, PUT, DELETE).

---

## **File Structure Plan**

I want my files and folders to be organized logically so everything is easy to navigate. Here’s my proposed file structure:

/project-root  

│
├── /src                     # Core application files  

│   ├── /api                  # API-related files  

│   │   └── petAPI.js         # Handles CRUD operations for PetStore   
API (via Axios)  

│   ├── /helpers              # Utility functions  

│   │   └── apiHelper.js      # Reusable Axios request functions (e.g., GET, POST)  

│   └── index.js              # Entry point (if I need one for app)  

│
├── /tests                    # All test-related files  

│   ├── /unit                 # Jest unit tests  

│   │   └── pet.test.js       # Unit tests for CRUD operations on pets  

│   ├── /bdd                  # BDD feature and step files  

│   │   ├── pet.feature       # Cucumber feature file (Gherkin syntax)  

│   │   └── petSteps.js       # Step definitions for Cucumber (BDD tests)  

│   └── /mocks                # Mock data for testing (if needed)  

│       └── mockPetData.json  # Mock data for pets (e.g., example pet objects)  

│
├── /ci-cd                    # Pipeline-related files  

│   └── .github/workflows     # GitHub Actions configuration  

│       └── ci-pipeline.yml   # CI/CD pipeline to run tests and deploy  

│
├── README.md                 # Project setup instructions and info  

├── package.json              # Project dependencies (Jest, Cucumber, Axios, etc.)  

└── jest.config.js            # Jest configuration file  




### **File Details**:
- **`petAPI.js`**: Contains the core Axios logic to interact with the PetStore API. This will include functions like `createPet()`, `getPetById()`, `updatePet()`, and `deletePet()`.
- **`pet.test.js`**: Unit tests using Jest for each CRUD operation.
- **`pet.feature`**: Cucumber feature file in Gherkin syntax, containing user behavior scenarios like adding a pet or deleting one.
- **`petSteps.js`**: Step definitions for BDD, where I’ll map Gherkin steps to actual JavaScript code that performs API operations.

---

## **Example Workflow**

### **Step 1: Jest Unit Testing**
- Write the first unit test for creating a new pet using `createPet()` (TDD cycle). The test will fail initially since the function isn’t implemented yet.
- Write the function `createPet()` using Axios to send a POST request to the API.
- Run the test again to make sure it passes.
- Repeat for **READ**, **UPDATE**, and **DELETE** operations.

### **Step 2: Cucumber BDD Testing**
- Write a **Gherkin feature** file for creating a pet (BDD cycle).
- Implement the **step definitions** in `petSteps.js` that map to the functions in `petAPI.js`.
- Run the tests to simulate real-world interactions with the API.

---

## **Stretch Goals**

- **Java Stretch**: Once my JavaScript project is complete, I’ll start experimenting with a **Java version** of the same project. This will help me start getting comfortable with the syntax and concepts, since I’ll be working with Java in future roles.
  
- **Mobile App (Expo + Appium)**: If I have the time, I’ll use **Expo** to make a simple mobile version of the API (maybe adding, updating, or deleting pets). I’ll automate the mobile testing using **Appium** to test how the app interacts with the PetStore API.

- **CI/CD Pipeline**: If I can, I’ll set up a **GitHub Actions pipeline** that runs all tests (both Jest and Cucumber) and automates the deployment process.

---

## **Command Notes**

**Run Unit Tests**:

npm run test:

**Run BDD Tests**:

npx cucumber-js


---

## **Final Thoughts**
- Focus on **reliable** and **reusable** tests. I want my test suite to not only pass but provide insightful feedback if something goes wrong.
- Keep my code **clean** and **well-organized** so anyone reviewing the project can easily follow along.
- Understand the **why** behind every decision, from tools to file structure, so I can confidently explain my choices in interviews or reviews.

# MVP 1: Basic CRUD Operations and Testing

### Goal: 
Set up core API functionality for CRUD operations with unit testing

### Tasks:
- Set up project structure for a Node.js application.✅
- Install dependencies like `jest`, `axios`, and `supertest`.✅
  - Use Axios for HTTP requests to the PetStore API.
  - Use Jest for unit testing.
- Create basic CRUD operations for interacting with the PetStore API (`src/api/petAPI.js`):
  - `GET` a pet by ID.
  - `POST` to add a new pet.
  - `PUT` to update a pet's details.
  - `DELETE` to remove a pet.
- Write unit tests with Jest to verify the CRUD operations work as expected (`tests/unit/pet.test.js`).
  - Test cases for each CRUD function (success and error scenarios).

### Deliverables:
- Basic CRUD operations that interact with the API.
- Unit tests ensuring those operations work.

---

# MVP 2: Implement BDD Tests Using Cucumber

### Goal: 
Implement behavior-driven development (BDD) tests with Cucumber

### Tasks:
- Install `cucumber.js` for writing BDD tests and Gherkin syntax.
- Create feature files for one of the CRUD operations (e.g., "Managing Pets").
  - `pet.feature`: Write test scenarios in Gherkin for adding, updating, retrieving, and deleting a pet.
- Create step definitions that tie Gherkin syntax to JavaScript functions.
  - `petSteps.js`: Implement step definitions that interact with the CRUD methods from `petAPI.js`.
- Run BDD tests and ensure they pass.

### Deliverables:
- `pet.feature` with BDD scenarios.
- Step definitions using Cucumber, tied to CRUD functions.
- Passing BDD tests for CRUD operations.

---

# MVP 3: CI/CD Pipeline Integration

### Goal: 
Automate the testing process and ensure code quality with CI/CD

### Tasks:
- Set up GitHub Actions (or Jenkins) for Continuous Integration (CI).
  - Create `.github/workflows/ci-pipeline.yml` for automatic testing.
  - Ensure the pipeline runs Jest unit tests and Cucumber BDD tests on every push or pull request.
- Configure test coverage for Jest to track code quality and coverage.
- Set up Continuous Deployment (CD) if applicable, to automatically deploy or update the app (optional if you want a deployed API).

### Deliverables:
- CI/CD pipeline that automatically runs unit and BDD tests.
- Report showing test results and coverage after each commit/push.

---

# MVP 4: Reusable Code and Refactoring

### Goal: 
Ensure clean, maintainable, and reusable code

### Tasks:
- Refactor the codebase to ensure it follows clean code principles:
  - DRY (Don’t Repeat Yourself) principle.
  - Abstracting common logic into utility functions (e.g., reusable Axios calls).
- Organize file structure:
  - Keep helper functions in the `/helpers` folder (e.g., `apiHelper.js`).
  - Make sure code is easy to follow, with clear separation of concerns.
- Improve error handling in API calls and tests to cover more edge cases.
- Update the README to clearly document the project setup, running tests, and structure.

### Deliverables:
- Clean, well-organized code following best practices.
- `README.md` with clear instructions.

---

# MVP 5: Stretch Goals - Mobile App Integration

### Goal: 
Explore adding a mobile interface with basic functionality (optional)

### Tasks:
- Create a simple mobile app using Expo (React Native framework).
  - Basic functionality to perform CRUD operations on the PetStore API.
  - Integrate it with the API you’ve built.
- Write mobile-specific tests using Appium (for automated mobile testing).
  - Automate testing of CRUD operations on the mobile app.

### Deliverables:
- Basic mobile app that interacts with the same API.
- Automated tests to ensure functionality on mobile.

Things to consider when testing databases:
-Development servers are different from production servers
-Wouldn't want to affect real user data on a database
  -Use test database (e.g docker- create containers for testing database, CICD pipelines can have specific seperate test databses that are reset after each test run)
  -Transactions and Rollbacks. Changes made due to test are rolled back afterwards/ reset databse.
  -Database migrations. Test database and development schema have same schema (tools like Knex to manage this)
  -Seed test data- seed with known data you can run tests against. Fixtures can fascilitate this

  jest.mock('axios'); is mocking the axios module, which means replacing it with a mock version. This allows you to simulate API calls without making real HTTP requests.

Supertest is useful when you want to test your HTTP endpoints

-I can either use supertest or use jest.mock(axios)
-->ARE WE FOLLOWING THE ENDPOINTS
or
-->ARE WE TESTING THE ENDPOINTS 


DELETE THIS AFTERWARDS:
Axios Mocking: This is used when you're testing internal API logic, focusing on mocking API calls without making real HTTP requests. In your example, you're using axios to interact with an external API (PetStore API), so mocking axios makes sense if:

You want to test the behavior of your internal code (e.g., the CRUD operations in petAPI.js).
You don't want your tests to rely on real network requests (making tests faster and more controlled).
You want to simulate different API responses (success, error, etc.) without hitting an actual API endpoint.
This is great for unit tests focused on whether your functions (like getPetById, addPet, etc.) correctly handle responses and errors from the PetStore API.

Supertest: This tool is used for testing HTTP endpoints in your Express server (i.e., testing actual routes). If you were testing how your Express server handles HTTP requests, then Supertest would be the better fit. Supertest is best for:

Simulating real HTTP requests to your app's API endpoints (like /pets/:id).
Testing the end-to-end behavior of your routes (from receiving a request to sending a response).
Verifying the behavior of the entire stack, including middleware, routes, and response handling.