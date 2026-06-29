import { Given, When, Then, DataTable} from '@cucumber/cucumber'
import {FormPage} from '../pages/FormPage'
let  formPage: FormPage;
Given('User is on the form page', async function(){
    await this.formPage.navigateToSite();
});
When('User fills the form with the following data:',async function(dataTable: DataTable){
    await this.formPage.fillForm(dataTable);
    
});
When('User submits the form',async function(){
    await this.formPage.submitForm();
})
Then('form should be submitted successfully',async function(){
    await this.formPage.verifySubmission();
})