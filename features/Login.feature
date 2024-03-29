Feature: Login state
    Background: 
        Given I navigate to the Which TV landing page 
        And I am not logged in

    Scenario: Check recommendation dropdown
        When I click on the Which recommendations dropdown
        Then I should see the filter by recommendations options disabled
    
    Scenario: Adding product to comparision pop up window
        When I click on the compare checkbox of a product
        Then The product should apppear in the comparision pop up window


    Scenario: Check that the test scores are not visible
        When I navigate to the products list
        Then I should not be able to see the test scores

    # Scenario: Check that the sort by dropdown does not let you filter by highest which score
    #     When I click on the sort by dropdown
    #     Then I should see the filter by highest which score disabled

    # Scenario: Check that the recommendation badge is not visible
    #     When I browser through the products
    #     Then I should not be able to see a recommendation badge
    
    # Scenario: Check that the sort by dropdown does not let you filter by highest which score
    #     When I click on the sort by more filters dropdown
    #     Then I should see the ALL the dropdown options disabled
    
