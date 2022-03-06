# cypress-cucumber-tests [![test CI](https://github.com/ISanjeevKumar/cypress-cucumber-tests/actions/workflows/node.js.yml/badge.svg)](https://github.com/ISanjeevKumar/cypress-cucumber-tests/actions/workflows/node.js.yml)

Challenges faced and resolutions:

`1. Error 'Step implementation missing for'`

```
The issue is with the folder structure and naming conventions. Below are the two main rules we need to follow.
Folder name and Feature file name should be the same
Feature file and step definitions should not be in the same folder 
( stepdefinations/ .js file should always be in a folder which we have created earlier).```
