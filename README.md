# UI Automation Framework
Automatizacion con Playwright

## Description
This automationTest  framework is created with playwright, cucumber and NodeJS.
The objective of the UI framework is to reduce the test time effort and give a quickest feedback when a 
smoke test or regression test needs to be executed.

### Prerequisitos
It requieres node.js version 16 o superior 
* install node.js here [node.js](https://nodejs.org/en/)

## Structure
```
└───playwirght/
   ├───e2e/
   │   └───page_object/ 
   │
   ├───test/
   │   ├───features/ 
   │   └───stepsDefinitions/
   └───.env

```

## Installation
Once the repository is cloned, in the command line paste the following command: 
```
npm install
```
## Usage
### Open Tests visually
```
1. Execute Playwright, 

- Command to execute one feature at a time
 ```sh
   npm run test:e2e tests/features/Login.feature
 ```
  Note: Change the text login to the desired feature name
  
- Command to execute all features
 ```sh
   npm run test:e2e tests/features/*.feature
```

## Software needed
- [Visual Studio Code](https://code.visualstudio.com/).
- [NodeJS](https://nodejs.org/en/)
- [Chrome](https://www.google.com/intl/es_mx/chrome/)

## License
For the PCloudInnovations company only.   
