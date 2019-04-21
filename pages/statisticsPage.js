class statisticsPage{
    constructor() {
        this.formTitle = $("#__chart0");
        this.overAllSytemUptimeChartLocator = '#__chart0';
        this.distinctUsersperMonthChartLocator = '#__chart1';
        this.costsForUpgradedStorageChartLocator = '#__chart2';
        this.timeout_interval = 10000;
    }
    
    get overAllSytemUptime () {
        return browser.driver.findElement(by.css(this.overAllSytemUptimeChartLocator)).getAttribute("innerText");

    };
    get distinctUsersperMonth () {
        return browser.driver.findElement(by.css(this.distinctUsersperMonthChartLocator))
        .getAttribute("innerText");
    };
    get costsForUpgradedStorage () {
        return browser.driver.findElement(by.css(this.costsForUpgradedStorageChartLocator))
        .getAttribute("innerText");
    };
    
    async waitTillStaticsPageLoad(){
       return await Promise.resolve(browser.driver.wait(ExpectedConditions.presenceOf(this.formTitle), this.timeout_interval));
   }
}

export default new statisticsPage();