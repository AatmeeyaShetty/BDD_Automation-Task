const reporter = require("cucumber-html-reporter");
const options = {
    theme: "bootstrap",
    jsonFile: "reports/report.json",
    output: "reports/cucumber-report.html",
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        'Project Name': "Playwright BDD Framework",
        "Test Environment":"QA",
        Browser: "Chromium",
        Platform: "Windows",
        Executed: "Local"
    }

}
reporter.generate(options);