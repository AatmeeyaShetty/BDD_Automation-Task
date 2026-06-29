import { chromium, Browser,Page } from 'playwright'
export class BasePage{
    private browser!: Browser
    public page!: Page;
    async init(){
        this.browser = await chromium.launch({headless: false});
        this.page = await this.browser.newPage();
        return this.page;
    }
    async cleanupAndCLose(testStatus: string | undefined){
        if (testStatus === 'FAILED' && this.page){
            await this.page.screenshot({path: `test-results/${Date.now()}.png`})
        }
        if (this.browser){
            await this.browser.close();
        }
    }
}