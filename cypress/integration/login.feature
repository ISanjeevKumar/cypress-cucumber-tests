Feature: Login feature

    As an user I should be able to login with valid credentials

    @smoke
    Scenario: Should be able to login with valid credentials
        Given I navigate to login page
        And I enter username 'standard_user'
        And I enter password 'secret_sauce'
        When I click login button
        Then I will be logged in

    @regression
    Scenario: Should not be able to login with invalid credentials
        Given I navigate to login page
        And I enter username 'standard_user'
        And I enter password 'invalidPassword'
        When I click login button
        Then I will get an error message 'Username and password do not match any user in this service'