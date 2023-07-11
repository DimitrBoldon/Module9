// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'Table of contents',
    message: 'Enter table of contents:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter a intalltion guideline:',
  },
  {
    type: 'input',
    name: 'Usage',
    message: 'Enter a usage of your project',
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please select license for application',
    choices: ["MIT", "APACHE2.0", "Boost1.0", "BSD2", "none"],
  },
  {
    type: 'input',
    name: 'contriibuting',
    message: 'Please list any contributors. (GitHub usernames)',
    default: "",
  },
  {
    type: 'input',
    name: 'test',
    message: 'provide walkthrough of required application',
  },
];

inquirer.prompt(questions)
  .then(answers => {
    console.log(answers); 
  })
  .catch(error => {
    console.error(error);
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return Fs.writeTosync(Path.join(process.cwd(). fileName). data);
};

// TODO: Create a function to initialize app
function init() {}
initApp();
// Function call to initialize app
init();

