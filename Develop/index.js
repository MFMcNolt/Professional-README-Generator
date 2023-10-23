// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "project_title",
        message: "What is your project tittled?"
    },
    {
        type: "input",
        name: "description",
        message: "Briefly describe your project"
    },
    {
        type: "input",
        name: "install",
        message: "Are there any installations required?"
    },
    {
        type: "input",
        name: "use",
        message: "What is the use of the application"
    },
    {
        type: "input",
        name: "contributions",
        message: "Are there any contribution rules?"
    },
    {
        type: "input",
        name: "test",
        message: "Please provide test instructions if applicable"
    },
    {
        type: "checkbox",
        message: "License?",
        name: "license",
        choices: [
            "[MIT License](LICENSE.txt)",
            "[GNU GPLv3 License](COPYING.txt)",
        ]
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email account"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your github username"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
