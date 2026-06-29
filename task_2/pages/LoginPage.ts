import {type Locator,type Page,expect} from '@playwright/test'
export class LoginPage{
    private readonly usernameInput = this.page.locator('#username');
    private readonly passwordInput = this.page.locator('#password');
    private readonly loginButton = this.page.locator('button[type="submit"]');
    private readonly logoutButton = this.page.locator('a.button.secondary');
    private readonly flashMessage = this.page.locator('#flash');
    private readonly headerTitle = this.page.locator('h2');

    constructor (private readonly page: Page){}
        public get username(){return this.usernameInput;}
        public get password(){return this.passwordInput;}
    
    public async navigate(): Promise<void>{
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }
    public async login(username : string, password:string): Promise<void>{
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        

    }
    public async verifyLoginResult(result: string):Promise<void>{
        if (result==='success'){
        await this.verifySuccessfulLogin();
    }
    else{
        await this.verifyErrorMessage()
    }
    }
    public async verifySuccessfulLogin():Promise<void>{
        await expect(this.flashMessage).toBeVisible();
        await expect(this.flashMessage).toContainText('You logged into a secure area!');

    }
    public async verifyErrorMessage():Promise<void>{
        await expect(this.flashMessage).toBeVisible();
    }
    public async logout():Promise<void>{
        await this.logoutButton.click();
    }
    public async verifyLogout():Promise<void>{
        await expect(this.headerTitle).toContainText('Login Page');
    }

}