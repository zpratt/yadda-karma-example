Feature: Create a thought
  As a person with a thought, I would like
  to be able to enter them and have them persisted.
  Scenario: Author a thought

    Given An authenticated user
    When A thought is created with title "some title" with a body of "some body"
    Then An http status code of 201 should be received
    And The total number of thoughts should increase by 1
