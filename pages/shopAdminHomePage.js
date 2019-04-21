class ShopAdminHomePage{
    constructor() {
        this.siteURL = "https://openui5.hana.ondemand.com/test-resources/sap/tnt/demokit/toolpageapp/webapp/index.html";
        this.homePageImageLocator = $("img#__image0");
        this.settingsMenuLocator = "#__item1-__list0-1 > div > span.sapMText.sapMTextNoWrap.sapTntNavLIText";
        this.systemsettingLocator = '#__header1-innerTitle'
        this.statisticsMenuLocator = '#__item1-__list0-2 > div > span.sapMText.sapMTextNoWrap.sapTntNavLIText'
        this.timeout_interval = 5000
    }
    /**
     * navigate to home page 
     */
    navigateToHomePage() {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.get(this.siteURL);
        
        return browser.driver.wait(ExpectedConditions.visibilityOf(
            this.homePageImageLocator), this.timeout_interval);
        
    }
    
    /**
     * click on Settings menu
     */
    clickOnSettings() {
        var loc = this.settingsMenuLocator
        browser.driver.wait(function() {
            return browser.driver.findElement(by.css(loc))
                     .then(function(elem) {
                       elem.click();
                       return true;
                     });
         }, this.timeout_interval);
    }

    /**
     * click on Statistics menu
     */
    clickOnStatistics() {
        var loc = this.statisticsMenuLocator
        browser.driver.wait(function() {
            return browser.driver.findElement(by.css(loc))
                     .then(function(elem) {
                       elem.click();
                       return true;
                     });
         }, this.timeout_interval);
    }
}

export default new ShopAdminHomePage();
