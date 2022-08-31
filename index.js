// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// import inquirer from "inquirer";
// import fs from "fs";
const fileName = "README.md"

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username? ",
    "what is your email address? ",
    "What is the title of the project? ", 
    "Enter the description of the project. ", 
    "Create the table of contents. ", 
    "What is the installation guide for the project? ", 
    "Provide instructions and examples for use. ", 
    "License", 
    "Contributing", 
    "Tests", 
    "Questions"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, 
    `# ${data.title}
    
## Description
${data.description}
    
## Table of Contents
${data.contents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
[My GitHub Profile](https://github.com/${data.username})

${data.questions}

If you need to reach me you can do so by sending an email to ${data.email}

`, (error, file) =>
    error ? console.log('File not saved!')
    : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: questions[0],
                        name: "username",
                    },
                    {
                        type: "input",
                        message: questions[1],
                        name: "email",
                    },
                    {
                        type: "input",
                        message: questions[2],
                        name: "title",
                    },
                    {
                        type: "input",
                        message: questions[3],
                        name: "description",
                    },
                    {
                        type: "input",
                        message: questions[4],
                        name: "contents",
                    },
                    {
                        type: "input",
                        message: questions[5],
                        name: "installation",
                    },
                    {
                        type: "input",
                        message: questions[6],
                        name: "usage",
                    },
                    {
                        type: "input",
                        message: questions[7],
                        name: "licence",
                        
                    },
                    {
                        type: "input",
                        message: questions[8],
                        name: "contributing",
                    },
                    {
                        type: "input",
                        message: questions[9],
                        name: "tests",
                    },
                    {
                        type: "input",
                        message: questions[10],
                        name: "questions",
                    },
            ])
            .then ((projecttitle) => {
                writeToFile(fileName, projecttitle)
            })        
}

// Function call to initialize app
init();
