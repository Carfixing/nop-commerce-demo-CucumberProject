Feature: Login Test
  As user I want to login into nop commerce website
#done
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on login link
    Then I should navigate to login page successfully
# done
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "<email>"
    And I enter password "<password>"
    And I click on login button
    Then I should verify the error message "<errormessage>"
    Examples:
      | email      | password  | errormessage                                                                                |
      | preme11524 | prime1123 | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | prime11253 | prime1145 | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |
      | prime11253 |           | Login was unsuccessful. Please correct the errors and try again.\nNo customer account found |

  @smoke
  Scenario: Verify User should login successfully with valid credentials
    Given I am on homepage
    When I click on login link
    And I enter email "Palak4581@yahoo.com"
    And I enter password "palak4581"
    And I click on login button
    Then I should verify logout link is display

  Scenario: Verify User should logOut Successfully
    Given I am on homepage
    When I click on login link
    And I enter email "Palak4581@yahoo.com"
    And I enter password "palak4581"
    And I click on login button
    And I click on logout button
    Then I should verify login link is display

