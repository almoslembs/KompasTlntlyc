/* eslint-disable @typescript-eslint/no-explicit-any */
import {Page, expect} from '@playwright/test';
export class Login {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async open(url?: string) {
    const targetUrl = url 
    await this.page.goto(targetUrl);
    await this.page.waitForURL(targetUrl, {waitUntil: 'load'});
    expect(this.page.url()).toBe(targetUrl);
  }

  async contohLogin() {
    await this.page.goto('https://account.kompas.com/login/');
    await this.page.getByPlaceholder('email').click();
    await this.page.getByPlaceholder('email').fill('jisoboy248@provko.com');
    await this.page.getByLabel('Password').click();
    await this.page.getByLabel('Password').fill('321klr321');
    await this.page.getByRole('button', { name: 'Login' }).click();
    await this.page.goto('https://www.kompas.com/');
  }
}
