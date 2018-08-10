const {$} = require('protractor');

const {browser} = require('protractor');

const {element} = require('protractor');

const {by} = require('protractor');

class GmailLogin{

static clickGmailLink(link){
let clicklink = element(by.linkText(link));
    browser.sleep(2000);
    return clicklink.click();


}

}

module.exports=GmailLogin;