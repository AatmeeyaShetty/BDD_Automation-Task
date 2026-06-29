Feature: Login functionality

  Scenario: Successful Login
    Given User is on the login page
    When User enters the valid Username and the password
    Then User should be navigated to the dashboard

  Scenario: Invalid login attempt
    Given User is on the login page
    When User enters invalid Username and password
    Then error message should be displayed

  Scenario: Verify error message visibility
    Given User is on the login page
    When User enters invalid credentials
    Then error message should be displayed

  Scenario: Verify logout functionality
    Given User is on the login page
    When User enters valid Username and password
    Then User logs out successfully

  Scenario Outline: Login with multiple credentials 
    Given User is on the login page 
    When User enters "<Username>" and "<password>" 
    Then login result should be "<result>" 

    Examples:

      | Username | password             | result  |
      | tomsmith | SuperSecretPassword! | success |
      | tomsmith | wrong123             | failure |