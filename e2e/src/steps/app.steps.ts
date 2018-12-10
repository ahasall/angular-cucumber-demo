import { Given } from 'cucumber';

const { expect } = require('chai');
import { AppPage } from '../pages/app.po';

export default function() {
  let page: AppPage;
  this.Before(() => {
    page = new AppPage();
  });
  Given('I am on the home page', function() {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  this.When(/^I do nothing$/, () => console.log('doing nothing'));

  this.Then(/^I should see the title$/, async () => {
    console.log(page);
    expect(await page.getTitleText()).to.equal('amadousall.com');
  });
}
