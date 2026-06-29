Feature: Form Submission
    Scenario: Submit form with multiple fields
        Given User is on the form page
        When User fills the form with the following data:
        | field            | value         |
        | name             | John Doe      |
        | email            | john@test.com |
        | currentAddress   | Mumbai        |
        | permanentAddress | India         |
        Then form should be submitted successfully

       