Feature: Failure Simulation
    Scenario: Assertion Failure
        Given User navigates to login page
        Then User verifies incorrect heading
    Scenario: Element Not Found Failure
        Given User navigates to login page
        Then User clicks invalid locator
    Scenario: Strict mode violation
        Given User navigates to login page
        Then User performs action on multiple matching elements
    Scenario: Timeout Failure
        Given User navigates to login page
        Then User waits for non existing element
    Scenario: Screenshot comparison Failure
        Given User navigates to login page
        Then User compares with incorrect Screenshot