import{ Given, Then,setDefaultTimeout} from '@cucumber/cucumber'
import {expect} from'@playwright/test';
Given('test timeout is configured',async function(){
    setDefaultTimeout(2000);
})
Then('User waits longer than timeout',async function(){
    await this.page.waitForTimeout(5000);
})
Then('User clicks missing element', async function(){
    await this.page.locator('#missingElement').click({timeout:2000})
})
Then('User verifies invisible element',async function(){
    await expect(this.page.locator('#missingElement')).toBeVisible({timeout:2000})
})