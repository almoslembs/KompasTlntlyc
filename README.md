Here is a `README.md` file in markdown format that describes the project, how to set up, run the tests, and explains the scripts available in `package.json`.

```markdown
# Playwright Testing Project

This project is a Playwright-based testing framework for automated testing of web applications.

## Table of Contents

- [Setup](#setup)
- [Running Tests](#running-tests)
- [Environment Configuration](#environment-configuration)
- [Scripts](#scripts)
- [Project Structure](#project-structure)

## Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Install the Playwright**

   ```bash
   npm install playwright
   ```

3. **Running Tests**

   ```bash
   npm run test-dev kompasBerita.spec.ts
   ```

4. **Reinstall Playwright Browsers**

   Install the necessary Playwright browsers:

   ```bash
   npm run reinstall
   ```

## Running Tests

```bash
npx playwright test
```


### Running All Tests

```bash
npx playwright test
```

### Running Specific Projects

- **Chrome**

  ```bash
  npm run chrome
  ```

- **Firefox**

  ```bash
  npm run firefox
  ```

- **Webkit**

  ```bash
  npm run webkit
  ```

### Running Tests in Different Environments

- **Development Environment**

  ```bash
  npm run test-dev
  ```

- **UAT Environment**

  ```bash
  npm run test-utt
  ```

### Running Tests with Accessibility Checks

```bash
npm run a11y
```

### Running Tests with Browser UI

```bash
npm run test-head
```

## Environment Configuration

Environment variables are configured using `.env` files. The following environments are supported:

- **Development** (`dev`)
- **User Acceptance Testing** (`utt`)
- **Pre-production** (`pre`)

## Scripts

- **generate:accounts**: `node libs/generate_accounts.js`
- **generate:env**: `node libs/generate_env.mjs`
- **generate:encrypt**: `node libs/generate_decoded_string.js`
- **clean**: `rimraf allure-results && rimraf allure-report && rimraf test-results && rimraf playwright-report && rimraf junit-results && rimraf lighthouse`
- **play-report**: `npx playwright show-report`
- **allure-report**: `allure generate ./allure-results --clean`
- **open-report**: `npm run allure-report && allure open ./allure-report`
- **firefox**: `npm run clean && npx playwright test --project=firefox`
- **chrome**: `npx playwright test --project=chrome`
- **a11y**: `npm run clean && npx playwright test tests/a11y.lighthouse.spec.ts --project=chrome`
- **webkit**: `npx playwright test --project=webkit`
- **test-dev**: `npm run generate:accounts && npm run clean && cross-env ENV=dev npx playwright test --project=chrome`
- **test-utt**: `npm run generate:accounts && npm run clean && cross-env ENV=utt npx playwright test --project=chrome`
- **test-head**: `npm run clean && npx playwright test --headed`
- **reinstall**: `npx playwright install`
- **install-deps**: `npx playwright install-deps`

## Project Structure

- **tests**: Contains the test specifications.
- **pageobjects**: Contains the Page Object Model (POM) classes.
- **libs**: Contains scripts for generating accounts and environment variables.
- **config**: Configuration files for different environments.
- **json**: Contains JSON files used in tests.
