import { type Locator,type Page,expect } from '@playwright/test'
import { type DataTable } from '@cucumber/cucumber';
export class FormPage {
    private readonly userNameInput = this.page.locator('#userName');
    private readonly userEmailInput = this.page.locator('#userEmail');
    private readonly currentAdderssInput = this.page.locator('#currentAddress');
    private readonly permanentAddressInput = this.page.locator('#permanentAddress');
    private readonly submitButton = this.page.locator('#submit');
    private readonly outputContainer = this.page.locator('#output');
    constructor(private readonly page: Page){}
    public get userName() {return this.userNameInput}
    public get userEmail() {return this.userEmailInput}

    public async navigateToSite(): Promise<void>{
        await this.page.goto('https://demoqa.com/text-box')
    }
    public async fillForm(dataTable:DataTable):Promise<void>{
        const rows = dataTable.hashes();
        for (const row of rows){
            const inputField = this.page.locator(`#${row.field}`);
            await inputField.fill(row.value);
        }

    }
    public async submitForm(): Promise<void>{
        await this.submitButton.click();
    }
    public async verifySubmission():Promise<void>{
        await expect( this.outputContainer).toBeVisible()
    }

    }