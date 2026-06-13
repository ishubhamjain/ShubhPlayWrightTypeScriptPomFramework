Feature: ecommerce test

  @Regression
  Scenario: cart validation
    Given Open the website
    When add product to cart
    Then validate the same product is added to the cart