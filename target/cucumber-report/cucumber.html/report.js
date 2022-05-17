$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11200064500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;verify-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter email \"Palak4581@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter password \"palak4581\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should verify logout link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 422645000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1682120000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Palak4581@yahoo.com",
      "offset": 15
    }
  ],
  "location": "LoginPageSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 342267100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "palak4581",
      "offset": 18
    }
  ],
  "location": "LoginPageSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 204874100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1064309400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iShouldVerifyLogoutLinkIsDisplay()"
});
formatter.result({
  "duration": 148184400,
  "status": "passed"
});
formatter.after({
  "duration": 1734190500,
  "status": "passed"
});
});