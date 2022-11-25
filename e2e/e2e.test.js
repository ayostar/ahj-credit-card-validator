import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('shoud test credit card validator', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should test valid credit card by pressing Enter', async () => {
    await page.goto(baseUrl);

    const form = await page.$('[data-widget=creditCard-form-widget]');
    const input = await form.$('[data-id=creditCard-input]');

    await input.type('6011887534423704938');
    await input.press('Enter');

    await page.waitForSelector('.cardTitle');
  });

  test('should test valid credit card by mouse click', async () => {
    await page.goto(baseUrl);

    const form = await page.$('[data-widget=creditCard-form-widget]');
    const input = await form.$('[id=creditCard-input]');

    await input.type('6011887534423704938');
    const button = await form.$('[data-id=creditCard-submit]');
    button.click();

    await page.waitForSelector('.cardTitle');
  });

  test('should test invalid credit card by pressing Enter', async () => {
    await page.goto(baseUrl);

    const form = await page.$('[data-widget=creditCard-form-widget]');
    const input = await form.$('[data-id=creditCard-input]');

    await input.type('6011182724579612500');
    await input.press('Enter');

    await page.waitForSelector('.cardTitle');
  });

  test('should test invalid credit card by mouse click', async () => {
    await page.goto(baseUrl);

    const form = await page.$('[data-widget=creditCard-form-widget]');
    const input = await form.$('[id=creditCard-input]');

    await input.type('6011887534423704500');
    const button = await form.$('[data-id=creditCard-submit]');
    button.click();

    await page.waitForSelector('.cardTitle');
  });
});
