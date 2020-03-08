Feature: Login state
    Background: 
        Given I navigate to the Which TV landing page 
        And I am not logged in

    Scenario: Check recommendation dropdown
        When I click on the Which recommendations dropdown
        Then I should not be able to filter by recommendations

    #  Scenario: Check that the recommendation badge is not visible
    #     When I browser through the products
    #     Then I should not be able to see a recommendation badge

    # Scenario: Check that the test scores are not visible
    #     When I check the test score for each product
    #     Then I should not see the result

    # Scenario: Check that the sort by dropdown does not let you filter by highest which score
    #     When I click on the sort by dropdown
    #     Then I should not be able to filter by highest which score
    
    #  Scenario: Check that you can compare up to 4 products at any one time
    #     When I click on the compare button of 5 products
    #     Then I should get a pop up telling me I have exceeded the limit of 4 products
    
