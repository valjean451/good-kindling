const inquirer = require('inquirer');
const fs = require('fs');
const licenses = require('./licenses.js');



    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Title: What is the title of your project?'
            },
            {
                type: 'input',
                name: 'desc',
                message: 'Description: Please enter a breif description of the product.'
            },
            {
                type: 'input',
                name: 'install',
                message: 'Installation: Are there any steps to install your product?'
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Usage: Please add any instructions on the general use of your product.'
            },
            {
                type: 'input',
                name: 'credits',
                message: 'Credits: Add reference to any other individuals who contributed to this project, or any third-party resources used in its\' creation'
            },
            {
                type: 'input',
                name: 'contribute',
                message: 'How to Contribute: How can other developers contribute to this project?'
            },
            {
                type: 'input',
                name: 'test',
                message: 'Tests: Include any information about how to test this product.'
            },
            {
                type: 'list',
                name: 'license',
                message: 'License: Choose the applicable license from the following options.',
                choices: ['MIT', 'Apache 2.0', 'GNU GPL V3.0', 'Mozilla Public License 2.0']
            },
            {
                type: 'input',
                name: 'username',
                message: 'Please enter your GitHub username.'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email.'
            }
        ])
        .then((data) => {
            let licenseDelimited = ""
            let licenseName = data.license
            for (const letter of licenseName) {
                if (letter == " ") {
                    licenseDelimited += "%20"
                } else {
                    licenseDelimited += letter
                }
            }
            
            fs.appendFile('README.md',
`# ${data.title}

![License](https://img.shields.io/static/v1?label=license&message=${licenseDelimited}&color=green)

## Description

${data.desc}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${licenses.text[data.license]}

## How to Contribute

${data.contribute}

## Tests

${data.test}

## Questions

${data.username} | [GitHub](https://github.com/${data.username})
Send any questions or comments to me directly at ${data.email}. I promise to want to have time to answer them ;)`,
                (err) => err ? console.error(err) : console.log('File created successfully!'))
        })
