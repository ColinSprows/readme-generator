// DEPENDENCIES
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// DATA
// TODO: Create an array of questions for user input
const questions = [
    // title
    {
        type: "input",
        message: "What's the title of your README",
        name: "title",
    },
    // description
    {
        type: "input",
        message: "Provide a short description explaining the what, why, and how of your project.",
        name: "description",
    },
    // installation instructions
    {
        type: "input",
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
        name: "installation",
    },
    // usage information
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "usage",
    },
    // contribution guidlines
    {
        type: "input",
        message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
        name: "contribution",
    },
    // test instructions
    {
        type: "input",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
        name: "test",
    },
    // license list
    {
        type: "list",
        message: "Choose a license for your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/)",
        name: "license",
        choices: ["apache", "mit", "none"]
    },
    // github username
    {
        type: "input",
        message: "Please enter your GitHub username.",
        name: "github",
    },
    // email
    {
        type: "input",
        message: "Please enter your email.",
        name: "email",
    },
    // contact instructions
    {
        type: "input",
        message: "Please include any instructions on how to reach you with additional questions.",
        name: "contact",
    },
];

// FUNCTIONS
// TODO: Create a function to write README file
function generateMarkdown(answers) {
    // determine which badge to show
    if(answers.license === "apache") {
        badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if(answers.license === "mit") {
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if(answers.license === "none") {
        badge = ""
    };
    // markdown output
    const markdown =
    `# ${answers.title}

${badge}

## Description

${answers.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}    

## Usage

${answers.usage}

## License

${answers.license}

## Features

If your project has a lot of features, list them here.

## How to Contribute

${answers.contribution}    

## Tests

${answers.test}

## Questions

${answers.github}
${answers.email}
${answers.contact}
    `
    return markdown;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

// USER INTERACTION
inquirer    
    .prompt([...questions])
    .then((answers) => {
        console.log(answers);
        //generate markdown with the users answers
        const markdown = generateMarkdown(answers)
        writeToFile("README.md", markdown)
    })
.catch((error) => {
    if(error.isTtyError) {
        // prompt couldn't be rendered in the current environment
    } else {
        //something else went wrong
    }
});

// INITIALIZATION
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

