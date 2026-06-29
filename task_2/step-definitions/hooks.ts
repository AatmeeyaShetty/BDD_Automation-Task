import { Before, After } from '@cucumber/cucumber'
import { BasePage } from '../pages/BasePage';
import { FormPage } from '../pages/FormPage';
import { LoginPage } from '../pages/LoginPage';
declare module '@cucumber/cucumber'{
    interface World{
        basePage: BasePage;
        formPage: FormPage;
        loginPage: LoginPage;
    }
}
Before(async function(){
    this.basePage = new BasePage();
    this.page = await this.basePage.init();
    this.formPage = new FormPage(this.page);
    this.loginPage = new LoginPage(this.page);

})
After (async function({result}){
    await this.basePage.cleanupAndCLose(result?.status);
});
