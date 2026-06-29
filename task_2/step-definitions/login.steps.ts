import { Given,Then,When} from '@cucumber/cucumber'
import { setDefaultTimeout } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage'
import { loginData } from '../utils/testData';
setDefaultTimeout(60000);
let loginPage:LoginPage;
Given('User is on the login page', async function (){
    // loginPage = new LoginPage(this.page);
    await this.loginPage.navigate();
}
);
When ('User enters the valid username and the password', async function (){
    await this.loginPage.login(loginData.validUser.username,loginData.validUser.password)
});
When ('User enters invalid credentials', async function(){
    await this.loginPage.login('invalidUser','wrongPassword')
});
When ('User enters valid username and password', async function(){
    await this.loginPage.login(loginData.validUser.username,loginData.validUser.password)
});
Then ('User should be navigated to the dashboard',async function(){
    await this.loginPage.verifySuccessfulLogin();
});
Then ('error message should be displayed',async function(){
    await this.loginPage.verifyErrorMessage();
});
Then ('User logs out successfully',async function(){
    await this.loginPage.logout();
    await this.loginPage.verifyLogout();
})
When ('User enters {string} and {string}',async function (username,password){
    await this.loginPage.login(username,password)
});
Then ('login result should be {string}',async function(result){
    await this.loginPage.verifyLoginResult(result);
});
When ('User enters invalid username and password', async function(){
    await this.loginPage.login(loginData.invalidUser.username,loginData.invalidUser.password)
});