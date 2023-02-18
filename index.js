const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Please enter a breif description of the product.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Are there any steps to install your product?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please add any instructions on the general use of your product.'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'How can other developers contribute to this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Include any information about how to test this product.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the applicable license from the following options.',
            choices: ['MIT', 'MIT2', 'MIT3']
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email.'
        }
    ])
    .then((data) => {
        console.log(data)
    })
    
// use fs.appendFile() to create .md file?
// use module.exports to pass data between files