// TODO: Include packages needed for this application
const fs=require('fs') 
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const inquirer = require('inquirer')
const questions =inquirer.prompt([
    
{
    type: 'input',
    message: 'what is your project title?',
    name: 'title'


},{
    type: 'input',
    message: 'what is your license',
    name: 'license',
},{
    type: 'input',
    message: 'what is your github username',
    name: 'githubUsername',

},
{
    type: 'description',
    message: 'describe your project',
    name: 'description',
     
},{ 
    type: 'input',
        message: 'what is your email',
        name: 'email',
},{
    type: 'installation',
    message: 'what are your installation?',
    name: 'installation',
},{
    type: 'instructions',
    message: 'do you read the instructions?',
    name: 'instructions',
},{
    type: 'usage information',
    message: 'what is the usage information?',
    name: 'usageInformation',
},{
    type: 'contribution guidelines',
    message: 'do you have the contribution guidelines?',
    name: 'contributionGuidelines',

},{
    type: 'test instructions',
    message: 'are the test instructions up to date?',
    name: 'testInstructions',
}

])
.then((answers) =>{
 if(answers){
    return `# ${answers.title}
    * [description] (#description)
    * [installation] (#installation)
    * [testInstruction] (#testInstruction)
    * [contributionGuidelines] (#contributionGuidelines)
    * [usageinformation] (#usageInformation)
    * [userInformation] (#userInformation)
    * [emails] (#emails)
    * [license] (#license)
    * [githubUsername] (#githubUsername)
## description
    ${answers.description}
## installation
    ${answers.installations}
## instructions
    ${answers.instructions}
## userInformation
    ${answers.usageInformation} 
## contributionGuidelines
    ${answers.contributionGuidelines}
## testInformations
    ${answers.testInstructions}
## emails
    ${answers.email} 
## license
    ${answers.license}
## githubUsername
    ${answers.githubUsername}`}
 })
 .then((readMe) => {
    fs.writeFile('readMe.md',readMe,err=>{
        console.log('success!')
    })
 }


)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
