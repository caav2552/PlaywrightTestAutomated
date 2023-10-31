Feature: Login

Scenario: Login with Netflix
  Given A user opens Netflix
  Then A user will print the Tittle
  Then A user change Language to English
  When A user clicks on the sign in button Home
  Then  A user enters a username
  Then A user enters a password
  When A user clicks on the sign in button
  Then A user enters to a Profile 
  Then Validation Netflix appear on the website


Scenario: Login with empty password
  Given A user opens Netflix
  Then A user change Language to English
  When A user clicks on the sign in button Home
  Then  A user enters a username
  When A user clicks on the sign in button
  Then Validation messages are displayed above of the Password field

Scenario: Login with empty username
  Given A user opens Netflix
  Then A user change Language to English
  When A user clicks on the sign in button Home
  Then A user enters a password  
  When A user clicks on the sign in button
  Then Validation messages are displayed above of the SignIn field

 Scenario: Login with empty username and password
   Given A user opens Netflix
   Then A user change Language to English
   When A user clicks on the sign in button Home
   When A user clicks on the sign in button
   Then Validation messages are displayed above of the SignIn field
   Then Validation messages are displayed above of the Password field

