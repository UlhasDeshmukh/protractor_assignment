import shopAdminHomePage from '../pages/shopAdminHomePage';
import systemSettingsPage from '../pages/systemSettingsPage';
import statisticsPage from '../pages/statisticsPage';
var testData = require('../test_data/address.json');

describe("enter and save form data", function () {

    beforeEach(function () {
        // navigate to the shop admin tool
        browser.driver.ignoreSynchronization = true 
        shopAdminHomePage.navigateToHomePage()
    });


    it('should save entered form data', function () {
        //Step 1 and 2 Click on Settings, Click on System Settings.
        shopAdminHomePage.clickOnSettings();
        
        var address = testData.address
        var contactDetails = testData.contactDetails
        var storeDetails = testData.storeDetails
        
        // Step 3 Enter the form data and save
        systemSettingsPage.fillForm(address, contactDetails, storeDetails);

        /* Step 3 assert that the changed data is persisted
        * asserted few fields not all
        */
        expect(systemSettingsPage.firstName).toEqual(address.firstName);
        expect(systemSettingsPage.lastName).toEqual(address.lastName);
        expect(systemSettingsPage.country).toEqual(address.country);
        expect(systemSettingsPage.zip).toEqual(address.zipCode);
        
        expect(systemSettingsPage.storeName).toEqual(storeDetails.storeName);
        expect(systemSettingsPage.companyCode).toEqual(storeDetails.companyCode);
        expect(systemSettingsPage.storePhone).toEqual(storeDetails.phone);
        
    });

    it('should display numbers on the charts', function () {
        //Step 1 and 2 Click on Settings, Click on statistics
        shopAdminHomePage.clickOnStatistics();
        statisticsPage.waitTillStaticsPageLoad()

        //Step 3 Verify the various numbers that are displayed on the charts.
        expect(statisticsPage.overAllSytemUptime).toEqual('83')
        expect(statisticsPage.distinctUsersperMonth).toEqual('80\n150\n400\n200');
        expect(statisticsPage.costsForUpgradedStorage).toEqual('120\n-67\n250\n-80');    
    });

});
