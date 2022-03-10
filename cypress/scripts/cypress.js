const fse = require('fs-extra');
const yargs = require('yargs')
const cypress = require('cypress');
const report = require("multiple-cucumber-html-reporter");

const argv = yargs.options({
    'browser': {
        alias: 'b',
        describe: 'choose browser that you wanna run tests on',
        default: 'chrome',
        choices: ['chrome', 'electron', 'firefox']
    },
    "spec": {
        alias: 's',
        describe: 'choose feature files that you want to run',
        default: '**/*.feature',
        choices: ['**/*.feature']
    },
    'tag': {
        alias: 't',
        describe: 'Select the tag you want to run from feature file',
        default: 'smoke',
        choices: ['smoke', 'regression', 'all']
    }
}).help()
    .argv

async function runTests() {
    await fse.remove('TestReports');
    const run = await cypress.run({
        browser: argv.browser,
        spec: argv.spec,
        headless: true,
        env: {
            TAGS: `@${argv.tag}`,
        }

    });
    const totalFailed = run['totalFailed']
    await generateTestReport();
    process.exit(totalFailed);
}

function generateTestReport() {
    report.generate({
        jsonDir: "TestReports/",
        reportPath: "TestReports/",
        metadata: {
            browser: {
                name: "chrome",
                version: "81",
            },
            platform: {
                name: "mac",
                version: "Catalina",
            },
        },
    });
}

runTests();

