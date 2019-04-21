class SystemSettingsPage{
    constructor() {
        this.firstNameLocator = "#container-toolpageapp---detailSettings--firstNameInput-inner";
        this.formTitle = $("#__form0--Form--title");
        this.lastNameLocator = "#container-toolpageapp---detailSettings--lastNameInput-inner";
        this.addressStreetLocator = "#container-toolpageapp---detailSettings--addressStreetInput-inner";
        this.addressZipTownLocator = "#container-toolpageapp---detailSettings--addressTownInput-inner";
        this.addressCountryLocator = '#container-toolpageapp---detailSettings--addressCountryInput-inner'

        this.contactDetailsMobileLocator = '#container-toolpageapp---detailSettings--phoneNumberInput-inner'
        this.contactDetailsFaxLocator = '#container-toolpageapp---detailSettings--faxNumberInput-inner'
        this.contactDetailsEmailLocator = '#container-toolpageapp---detailSettings--emailInput-inner'

        this.shopSettingsTabLocator = '#container-toolpageapp---detailSettings--objectPageLayout-anchBar-__section1-anchor-BDI-content'
        
        this.storeNameLocator = '#container-toolpageapp---detailSettings--storeNameInput-inner'
        this.storeLangLocator = '#container-toolpageapp---detailSettings--storeDefaultLanguageInput-inner'
        this.companyCodeLocator = '#container-toolpageapp---detailSettings--storeCodeInput-inner'
        this.storeWebsiteLocator = '#container-toolpageapp---detailSettings--storeWebsiteInput-inner'
        this.shopPhoneLocator = '#container-toolpageapp---detailSettings--storePhoneNumberInput-inner'
        this.shopEmailLocator = '#container-toolpageapp---detailSettings--storeMailInput-inner'
        
        
        this.saveBtnLocator = "#container-toolpageapp---detailSettings--save-BDI-content"
        this.timeout_interval = 5000;
        
        

    }
    
    enterFisrtName (firstName) {
        browser.driver.findElement(by.css(this.firstNameLocator))
                 .then(function(elem) {
                    elem.clear() 
                    elem.sendKeys(firstName);
                    return true;
                 });

    };

    get firstName () {
        return browser.driver.findElement(by.css(this.firstNameLocator)).getAttribute("value");

    };
    enterLastName (lastName) {
        browser.driver.findElement(by.css(this.lastNameLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(lastName);
                        return true;
        });
    }
    get lastName () {
        return browser.driver.findElement(by.css(this.lastNameLocator)).getAttribute("value");
    }
    enterStreet (street) {
        browser.driver.findElement(by.css(this.addressStreetLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(street);
                        return true;
        });
    }

    enterZip (zipcode) {
        browser.driver.findElement(by.css(this.addressZipTownLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(zipcode);
                        return true;
        });
    }
  
    get zip () {
        return browser.driver.findElement(by.css(this.addressZipTownLocator)).getAttribute("value");
    }

    enterMobile (mobile) {
        browser.driver.findElement(by.css(this.contactDetailsMobileLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(mobile);
                        return true;
        });
    }

    enterFax (fax) {
        browser.driver.findElement(by.css(this.contactDetailsFaxLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(fax);
                        return true;
        });
    }
    enterEmail (email) {
        browser.driver.findElement(by.css(this.contactDetailsEmailLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(email);
                        return true;
        });
    }
    goToShopConfig () {
        browser.driver.findElement(by.css(this.shopSettingsTabLocator))
                        .then(function(elem) {
                            elem.click();
                        return true;
        });
    }

    enterCountry (country) {
        browser.driver.findElement(by.css(this.addressCountryLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(country);
                        return true;
        });
    }
    get country () {
        return browser.driver.findElement(by.css(this.addressCountryLocator)).getAttribute("value");
    }
    enterStoreName (storeName) {
        browser.driver.findElement(by.css(this.storeNameLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(storeName);
                        return true;
        });
    }
     get storeName () {
        return browser.driver.findElement(by.css(this.storeNameLocator)).getAttribute("value");
    }
    enterStoreLanguage (storeLanguage) {
        browser.driver.findElement(by.css(this.storeLangLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(storeLanguage);
                        return true;
        });
    }
    enterCompanyCode (companyCode) {
        browser.driver.findElement(by.css(this.companyCodeLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(companyCode);
                        return true;
        });
    }
    get companyCode () {
        return browser.driver.findElement(by.css(this.companyCodeLocator)).getAttribute("value");
    }
    enterStoreWebsite (storeWebsite) {
        browser.driver.findElement(by.css(this.storeWebsiteLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(storeWebsite);
                        return true;
        });
    }
    enterStorePhone (storePhone) {
        browser.driver.findElement(by.css(this.shopPhoneLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(storePhone);
                        return true;
        });
    }
    get storePhone () {
        return browser.driver.findElement(by.css(this.shopPhoneLocator)).getAttribute("value");
    }
    enterStoreEmail (storeEmail) {
        browser.driver.findElement(by.css(this.shopEmailLocator))
                        .then(function(elem) {
                            elem.clear() 
                            elem.sendKeys(storeEmail);
                        return true;
        });
    }
    /**
     * fill the form
     */
    fillForm(address, contactDetails, storeDetails) {
        browser.driver.wait(ExpectedConditions.visibilityOf(this.formTitle), this.timeout_interval);
        
        this.enterFisrtName(address.firstName)
        this.enterLastName(address.lastName)
        this.enterStreet(address.street)
        this.enterZip(address.zipCode)
        this.enterCountry(address.country)
        
        // Enter contract details
        this.enterMobile(contactDetails.mobile)
        this.enterFax(contactDetails.fax)
        this.enterEmail(contactDetails.email)

        this.goToShopConfig()

        this.enterStoreName(storeDetails.storeName)
        this.enterStoreLanguage(storeDetails.language)
        this.enterCompanyCode(storeDetails.companyCode)
        this.enterStoreWebsite(storeDetails.website)
        this.enterStorePhone(storeDetails.phone)
        this.enterStoreEmail(storeDetails.email)


        this.saveForm();
    }

    saveForm() {
        browser.driver.findElement(by.css(this.saveBtnLocator))
            .then(function (elem) {
                elem.click();
                return true;
            });
    }
}

export default new SystemSettingsPage();