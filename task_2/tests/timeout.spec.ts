import { test,expect } from '@playwright/test'
test('Page Load Timeout', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login',{
    
        waitUntil: 'networkidle' ,
        timeout: 1
    }
    )
    
});
test('Action Timeout', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')
    await page.locator('#invalidLocator').click({timeout: 2000});
});
test('Expect Timeout', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')
    await expect (page.locator('#invalidLocator')).toBeVisible({timeout: 2000});
});

