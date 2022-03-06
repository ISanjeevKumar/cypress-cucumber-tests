import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I navigate to login page', () => {
    cy.visit('/')
})

And('I enter username {string}', (username) => {
    cy.get('#user-name').type(username);
})

And('I enter password {string}', (password) => {
    cy.get('#password').type(password);
})

When('I click login button', () => {
    cy.get('#login-button').click();
})

Then('I will be logged in', () => {
    cy.url().should('contain', 'https://www.saucedemo.com/inventory.html')
})


Then('I will get an error message {string}', (errorMessage) => {
    cy.get('[data-test=error]').should('not.be.empty')
        .and('contain.text', errorMessage)
})

