const {$} = require('protractor');

const {browser} = require('protractor');

const {element} = require('protractor');

const {by} = require('protractor');

class GoogleHome{

    static enterText(searchtext){
        // browser.sleep(3000);
        var search_box = element(by.id('lst-ib'));
         return search_box.sendKeys(searchtext);
             
     }
     
     static clickSearchbutton(searchtext){
         //browser.sleep(3000);
       return browser.actions().sendKeys(protractor.Key.ENTER).perform();
       
        }
     


}

module.exports = GoogleHome;