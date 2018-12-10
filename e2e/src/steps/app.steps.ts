import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on the home page$/, async () => {
  await page.navigateTo();
});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('Welcome to angular-cli-cucumber-demo!');
});
