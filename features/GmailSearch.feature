Feature: To Search Gmail in Google Home page

@GmailSearchScenario
Scenario: Gmail search in google
Given I am on "Google" home page
When I type "Gmail" in search Box
Then I click search button
Then I click "Gmail - Google" link