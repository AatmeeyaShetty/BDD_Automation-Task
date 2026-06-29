import {Page,expect} from '@playwright/test'
export class LoginPage{
    private page:Page;
    constructor (page: Page){
        this.page = page;
    }
    async navigate(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
    async login(Username : string, password:string){
        await this.page.locator('#Username').fill(Username);
        await this.page.locator('#password').fill(password);
        // Navigate implicitly by clicking a link.
        await this.page.locator('button.radius').click();
        

    }
    async verifySuccessfulLogin(){
        await expect(this.page.locator('h2')).toContainText('Secure Area')
        await expect(this.page.locator('h4')).toContainText('Welcome to the Secure Area. When you are done click logout below.')
    }
    async verifyErrorMessage(){
        await expect(this.page.locator('#flash')).toBeVisible();
    }
    async logout(){
        await this.page.locator('a.button').click();
    }
    async verifyLogout(){
        await expect(this.page.locator('h2')).toContainText('Login Page');
    }

}