
function getWebElement(locator) {
    cy.logStepInfo(`Get element with locator value '${locator}''`)
    return cy.get(locator);
}

function clickOnElement(locator, options) {
    getWebElement(locator).should('be.visible').click(options)
    cy.logStepInfo(`Succesfully clicked on the element with locator value '${locator}''`)
}

function enterText(locator, text) {
    cy.logStepInfo(`Set text ${text} on locator ${locator}`)
    getWebElement(locator).should('be.enabled').type(text)
}

module.exports = {
    getWebElement,
    clickOnElement,
    enterText
}