Feature: ecommerce test

  @tagstest
  Scenario: checking tag working
    Given open the browser and navigate to the url
    When click on the tag "Apple"
    Then validate the products related to the tag "Apple" are displayed
    Then validate the same product is added to the cart