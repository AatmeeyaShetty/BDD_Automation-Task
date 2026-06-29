# Playwright BDD Automation Framework
Overview
This project demonstrates a playwright + Cucumber BDD Automation framework developed as a part of QA Automation Training
It includes:
Write test scenarios using Gherkin syntax (Given / When / Then) 
  1. Implement step definitions in TypeScript 
  2. Integrate Playwright with Cucumber framework 
  3. Use Page Object Model with BDD 
  4. Manage test data using DataTables and Scenario Outlines 
  5. Generate BDD style reports 
  6. Maintain reusable and readable test scripts
Project structure:
```
BDD-TASK
├── features      
│   ├── login.feature          
│   ├── failureSimulation.feature            
│   └── timeoutSimulation.feature 
├── pages               
│   └── LoginPage.ts                
├── step-definitions                 
│   ├── hooks.ts       
│   ├── login.steps.ts      
│   ├── failure.steps.ts     
│   └── timeout.steps.ts
├── utils              
│   └── testData.ts       
├── cucumber.js              
├── playwright.config.ts        
├── tsconfig.json   
├── package.json          
└── README.md
```
## Installation
```
npm install
```
## Execute Scenarios:
Run all scenarios
```
npx cucumber-js
```
Run failure simulations
```
npx cucumber-js features/failureSimulation.feature
```
Run timeout simulations:
```
npx cucumber-js features/timeoutSimulation.feature
```
To generate the report:
```
npx cucumber-js --format html:cucumber-report.html
```
Tools Used:
1. Playwright
2. Cucumber
3. Typescript
4. VS code
5. Git& Github
