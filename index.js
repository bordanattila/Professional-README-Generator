// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
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
    "Choose the license", 
    "How can others contribute to the project? ", 
    "Go the extra mile and write tests for your application", 
    // "Questions"
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    

    fs.writeFile(fileName, generateMarkdown(answers), (error, file) =>
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
                        type: "list",
                        message: questions[7],
                        choices: ["GNU AGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License"],
                        name: "license",
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
            ])
            .then ((projecttitle) => {
                writeToFile(fileName, projecttitle)
            })        
}

// Function call to initialize app
init();
