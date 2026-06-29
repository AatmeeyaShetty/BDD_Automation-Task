import {test,expect} from '@playwright/test'
test ('Assertion Failure',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login')
    await expect(page.locator('h2')).toHaveText('Incorrect Text');
});
test ('Element not found failure',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('#invalidLocator').click();
});
test ('Strict mode violation failure',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.locator('input').fill('test')
});
test ('Navigation failure',async({page})=>{
    await page.goto('https://the-invalidt.herokuapp.com/login');
    await page.locator('input').fill('test')
});
test ('Screenshot comparison failure',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page).toHaveScreenshot('non-existing-baseline.png')
});