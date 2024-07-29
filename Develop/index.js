const fs = require('fs');
const inquirer = require('inquirer');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log('README.md generated successfully!');
}

// Function to generate README content
function generateREADME(data) {
    return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
For any questions, please contact me with the information below:

GitHub: [${data.github}](https://github.com/${data.github})  
Email: ${data.email}
    `;
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((responses) => {
            const readmeContent = generateREADME(responses);
            writeToFile('README.md', readmeContent);
        })
        .catch((error) => {
            console.error('Error generating README:', error);
        });
}

// Function call to initialize app
init();