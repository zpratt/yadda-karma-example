Feature: Deere dependency loader
  Scenario: Should inject dependencies

    Given A module to inject
    When A module depends on a module that has not been loaded
    Then Load the module asynchronously
