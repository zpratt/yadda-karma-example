Feature: Create a thought
  As a person with a thought, I would like
  to be able to receive a list of the ones I have created.
  Scenario: Author a thought

    Given An authenticated user
    When a GET request on /thought is performed
    Then a thought is returned