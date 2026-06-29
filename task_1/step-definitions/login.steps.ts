import { Given,Then,Before,After} from '@cucumber/cucumber'
import {When} from '@cucumber/cucumber'
import { Browser,Page } from 'playwright'
import { chromium } from 'playwright';
import { setDefaultTimeout } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage'
import { loginData } from '../utils/testData';
setDefaultTimeout(60000);
let browser:Browser;
let page:Page;
let loginPage:LoginPage;
Before(async () =>{
    browser = await chromium.launch({headless:false});
    page = await browser.newPage();
    loginPage = new LoginPage(page);

});
After(async()=>{
    await browser.close()

});
Given('User is on the login page', async () =>{
    await loginPage.navigate();
}
);
When ('User enters the valid Username and the password', async ()=>{
    await loginPage.login(loginData.validUser.Username,loginData.validUser.password)

});
When ('User enters invalid credentials', async()=>{
    await loginPage.login('invalidUser','wrongPassword')


});
When ('User enters valid Username and password', async ()=>{
    await loginPage.login(loginData.validUser.Username,loginData.validUser.password)


});
Then ('User should be navigated to the dashboard',async()=>{
    await loginPage.verifySuccessfulLogin();
});
Then ('error message should be displayed',async()=>{
    await loginPage.verifyErrorMessage();
});
Then ('User logs out successfully',async()=>{
    await loginPage.logout();
    await loginPage.verifyLogout();
})
When ('User enters {string} and {string}',async(Username,password)=>{
    await loginPage.login(Username,password)
});
Then ('login result should be {string}',async(result)=>{
    if (result==='success'){
        await loginPage.verifySuccessfulLogin();
    }
    else{
        await loginPage.verifyErrorMessage()
    }
});
When ('User enters invalid Username and password', async()=>{
    await loginPage.login(loginData.invalidUser.Username,loginData.invalidUser.password)
});