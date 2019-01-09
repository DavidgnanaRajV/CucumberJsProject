Feature: Login to facebook application

@tag1
Scenario: To verify Login onto facebook application with invalid credentials

  Given Home page of facebook
  When I enter Invalid email in user id field
  When I enter Invalid password in password field
  When I click on Submit button
  Then I verify error message
