import { Given,Then} from '@cucumber/cucumber'
import{expect} from '@playwright/test'
Given('User navigates to login page',async function(){
    await this.page.goto('https://the-internet.herokuapp.com/login')
})
Then('User verifies incorrect heading', async function(){
    await expect(this.page.locator('h2')).toHaveText('Incorrect Heading')
})
Then('User clicks invalid locator', async function(){
    await this.page.locator('#invalidLocator').click();
})
Then('User performs action on multiple matching elements', async function(){
    await this.page.locator('input').fill('test');
})
Then('User compares with incorrect Screenshot',async function(){
    await expect(this.page).toHaveScreenshot('incorrect-baseline.png');
})
Then('User waits for non existing element', async function(){
    await this.page.locator('#elementDoesNotExist').click({ timeout:2000})
})