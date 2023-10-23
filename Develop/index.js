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

function generateREADME(answers) {
    return `# ${answers.project_title}
      
  #### Table of Contents
  1. [Project Description](#project-description)
  2. [Installation Instructions](#installation-instructions)
  3. [Usage Information](#usage-information)
  4. [Contributor Guidelines](#contributor-guidelines)
  5. [Code of Conduct](#code-of-conduct)
  6. [Test Instructions](#test-instructions)
  7. [License](#license)
  8. [Questions](#questions)
  
  
  ## Project Description
  * ${answers.description}
  
  ## Installation Instructions
  * ${answers.install}
  
  ## Usage Information
  * ${answers.use}
  
  ## Contributor Guidelines
  * ${answers.contributions}
  
  ## Code of Conduct
  * [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
  
  ## Test Instructions
  * ${answers.test}
  
  ## License
  * licensed under the ${answers.license}
  
  ## Questions
  * For additional help or questions about collaboration, please reach out to ${answers.email}
  
  * Follow me on Github at [${answers.github}](http://github.com/${answers.github})`;
    
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully created" + fileName);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadmeContent(answers);
        writeToFile("README.md", readmeContent);
    });
}
// Function call to initialize app
init();
