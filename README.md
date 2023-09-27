# Cypress API Test Automation Project with Cucumber BDD Framework

This project tests Jupiter Toys application using [Cypress](https://www.cypress.io/) as the testing framework.

## Table of Contents

- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Generating Reports](#generating-reports)
- [Contributing](#contributing)

## Project Overview

This project is designed to showcase a test automation framework using Cypress. The goal is to provide a structured framework that makes it easy to write and maintain automated tests for web applications.

## Prerequisites

Before getting started, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) - JavaScript runtime environment
- [npm](https://www.npmjs.com/) - Node Package Manager
- [VS Code](https://code.visualstudio.com/) - Visual Studio Code is code editor (IDE)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/gurpreetskairon/cypress-bdd-api.git
```

2. Navigate to the project directory:

```bash
cd cypress-automation
```

3. Install project dependencies:

a. cypress:

```bash
npm install cypress --save-dev
```

b. xpath plugin:

```bash
npm install -D cypress-xpath
```


## Project Structure

The project follows a structured layout to maintain clarity and scalability. Here's an overview of the key directories and files:

- `cypress/` - Contains Cypress-specific configurations and test files.
  - `e2e/` - Test scenarios written in Gherkin syntax using Cucumber.
  - `support/` - Custom Cypress commands and utility functions.
- `cypress-cucumber-json` - Configuration for JSON reports generation.
- `cypress-cucumber-html` - Configuration for HTML reports generation.
- `cypress.json` - Cypress configuration file.
- `package.json` - Project dependencies and scripts.
- `README.md` - This documentation.

## Writing Tests

1. Create new tests under cypress/e2e directory

2. Test data can be passed from files placed in the cypress/fixtures directory. For example, this project reads the base url from the config.json file placed int he fixtures directory.

3. Organize reusable utility functions in the `cypress/support` directory.

## Running Tests

To run the tests, use the following command:

```bash
npm cypress run
```


## Generating Reports

This project is configured to generate both JSON and HTML reports for test execution. Reports are generated in the `cypress/reports` directory. To generate the reports, run:

```bash
npm run generate:reports
```
