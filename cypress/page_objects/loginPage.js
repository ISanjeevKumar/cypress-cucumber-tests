/// <reference types="Cypress"/>
import {enterText, clickOnElement} from "../lib/elementHelper"

const locators = {
    EMAIL_INPT: '#user-name',
    PASSWORD_INPT: '[data-test=password]',
    LOGIN_BTN: '#login-button',
    ERROR_TOAST: '[data-test=error]'
}

function enterUserName(username) {
    enterText(locators.EMAIL_INPT, username)
    cy.logStepInfo(`successfully entered username: ${username}`)
}

function enterPassword(password) {
    enterText(locators.PASSWORD_INPT, password)
    cy.logStepInfo(`successfully entered password: ${password}`)
}

function clickLoginButton() {
    clickOnElement(locators.LOGIN_BTN)
    cy.logStepInfo(`successfully clicked logg-in button`)
}

function verifyErrorMessage(errorMessage) {
    cy.get(locators.ERROR_TOAST).should('not.be.empty')
        .and('contain.text', errorMessage)
}

module.exports = {
    enterUserName,
    enterPassword,
    clickLoginButton,
    verifyErrorMessage
}