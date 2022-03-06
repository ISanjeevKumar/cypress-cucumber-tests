const fse = require('fs-extra');
const yargs = require('yargs')
const cypress = require('cypress');

const argv = yargs.options({
    'browser': {
        alias: 'b',
        describe: 'choose browser that you wanna run tests on',
        default: 'chrome',
        choices: ['chrome', 'electron', 'firefox']
    },
    "spec":{
        alias: 's',
        describe: 'choose feature files that you want to run',
        default: '**/*.feature',
        choices: ['**/*.feature']
    },
    'tags': {
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
        headless: true
    });
    const totalFailed = run['totalFailed']
    // const jsonReport = await merge(options);
    // await generator.create(jsonReport, options);
    process.exit(totalFailed);
}

runTests();