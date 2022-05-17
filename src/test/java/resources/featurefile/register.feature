Feature: Register
#done
  Scenario: User should create account successfully
    Given I am on homepage
    When I click on register link
    And I see the Register Text

# done
  Scenario: User should verify That FirstName LastName Email Password And Confirm Password Fields Are Mandatory
    Given I am on homepage
    When I click on register link
    And I can click register Button
    Then I should verify the error message for mandatory field

#done
  Scenario:  verify That User Should Create Account Successfully
    Given I am on homepage
    When I click on register link
    And I can fill mandetory field "Male","Mehir","shah","26","January","2018","Mahi","Ni45678","Ni45678"
    And I can click register Button
    Then I can Verify message Your registration completed
