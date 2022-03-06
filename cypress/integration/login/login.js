import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import { loginPage } from '../../page_objects/app';

Given('I navigate to login page', () => {
    cy.visit('/')
})

And('I enter username {string}', (username) => {
    loginPage.enterUserName(username);
})

And('I enter password {string}', (password) => {
    loginPage.enterPassword(password);
})

When('I click login button', () => {
    loginPage.clickLoginButton();
})

Then('I will be logged in', () => {
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html')
})


Then('I will get an error message {string}', (errorMessage) => {
    loginPage.verifyErrorMessage(errorMessage);
})

