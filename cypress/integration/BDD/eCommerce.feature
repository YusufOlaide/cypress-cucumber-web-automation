Feature: e2e ecommerce validation

    Pangaea Ecommerce Application Regression

    Scenario: Add Classic Maintenance Bundle Product to Cart
    Given I open the product page
    When I click on filter button
    And I select options by category, concern and price
    And I apply filter
    Then I verify and click on Classic Maintenance Bundle product card

    Scenario: Product Checkout
    When I add product to cart
    And I click on proceed to checkout
    Then I verify the shipping information page
