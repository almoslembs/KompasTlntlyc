import { test as base, BrowserContext, Page } from "@playwright/test";
import { Login } from "tests/pageObjects/Login/login.page";
// import fs from 'fs';
// import path from 'path';
// import dotenv from "dotenv";
import { Kompas } from "tests/pageObjects/Kompas/kompasBerita.page";
// dotenv.config();

let browserContext: BrowserContext;
let page: Page;
let pageLogin: Login;
let kompas: Kompas;

type StepFn = (title: string, fn: () => unknown, fullPage?: boolean) => unknown;

// Extend the test with the new functionality
const test = base.extend<{ step: StepFn }>({
  // eslint-disable-next-line no-empty-pattern
  step: async ({}, use, testInfo) => {
    await use(async (title, fn, fullPage = false) => {
      await test.step(title, async () => {
        try {
          await fn();
        } finally {
          await testInfo.attach(`screenshot after step "${title}"`, {
            body: await page.screenshot({fullPage}), // Conditional screenshot
            contentType: 'image/png',
          });
        }
      });
    });
  },
});
test.describe("kompas", () => {

  // maintain session untuk browser
  test.beforeAll(async ({ browser }) => {
    browserContext = await browser.newContext();
    page = await browserContext.newPage();
    pageLogin = new Login(page);
    kompas = new Kompas(page);
  });

  test.afterAll(async () => {
    await browserContext.close();
  });
  test("Login Kompas", async () => {
    await pageLogin.contohLogin();
    await kompas.validateKompas();
  });

  test("Berita Kedua Kompas", async () => {
    await pageLogin.contohLogin();
    await kompas.validateKompas();
    await kompas.findStringValueBerita("red");
    await kompas.validateAndClickBeritaKedua();
  });
});
