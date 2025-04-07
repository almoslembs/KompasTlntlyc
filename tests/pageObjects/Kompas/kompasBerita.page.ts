import { expect, Page } from "@playwright/test";
// import dotenv from "dotenv";
// dotenv.config();

export class Kompas {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  //FRONT PAGE

  get titleKompas() {return this.page.getByRole('link', { name: '29 Tahun Kompas.com, Jernih' });}
  get searchBar() {return this.page.getByPlaceholder('cari tokoh, topik atau');}
  get kompasLangganan() {return this.page.getByRole('link', { name: 'Langganan Kompas' });}
  get kompasAturMode() {return this.page.getByLabel('Atur mode');}
  get kompasCom() {return this.page.getByLabel('Kompas.com+');}

  async findStringValueBerita(stringValue?: string) {
    const searchInputField = this.page.getByPlaceholder('cari tokoh, topik atau');
    await expect(searchInputField).toBeVisible();
    await searchInputField.isEnabled();
    await searchInputField.click();
    await searchInputField.fill(stringValue);
    await searchInputField.press("Enter");
  }

  async validateKompas()
  {
    await expect(this.titleKompas).toBeVisible();
    await expect(this.searchBar).toBeVisible();
    await expect(this.kompasLangganan).toBeVisible();
    await expect(this.kompasAturMode).toBeVisible();
    await expect(this.kompasCom).toBeVisible();
  } 

  async validateAndClickBeritaKedua() {
    const beritaKedua = this.page.locator('div:nth-child(2) > .gs-webResult > .gsc-table-result > div > .gs-image-box > a');
    await beritaKedua.scrollIntoViewIfNeeded();

    const exists = await beritaKedua.isVisible();
    if (!exists) {
      throw new Error(`"berita kedua" is not visible.`);
    }

    // Click the locator
    await beritaKedua.click();

    console.log(`"berita kedua" clicked successfully.`);
  }
}
