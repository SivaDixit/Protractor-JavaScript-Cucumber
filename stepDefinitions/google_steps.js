import Globals from '../support/Globals';
import {browser} from 'protractor';
import {Given} from 'cucumber';
import {Then} from 'cucumber';
import {When} from 'cucumber';
const GoogleHome = require('../pages/GoogleHome');
const GmailLogin = require('../pages/GmailLogin');

const globals = new Globals();
const expect = globals.expect;

    Given(/^I am on "(.*?)" home page$/,(title)=>{
    return expect(browser.getTitle()).to.eventually.equal(title);    
    
    });
    
    When(/^I type "(.*?)" in search Box$/,(text)=>{
      return GoogleHome.enterText(text);

    });
    
    Then(/^I click search button$/,()=>{
     return GoogleHome.clickSearchbutton();
    
    });
    
    Then(/^I click "(.*?)" link$/,(link)=>{
        return GmailLogin.clickGmailLink(link);
    });
