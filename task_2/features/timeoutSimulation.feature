Feature: Timeout Simulation
    Scenario: Test Timeout
        Given test timeout is configured
        Then User waits longer than timeout
    Scenario: Action Timeout
        Given User navigates to login page
        Then User clicks missing element
    Scenario: Expect Timeout
        Given User navigates to login page
        Then User verifies invisible element
