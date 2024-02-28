// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require('inquier')
const questions =inquire.promt([
    
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
    name: 'github-username',

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
    name: 'usage-information',
},{
    type: 'contribution guidelines',
    message: 'do you have the contribution guidelines?',
    name: 'contribution-guidelines',

},{
    type: 'test instructions',
    message: 'are the test instructions up to date?',
    name: 'test-instructions',
}

])
.then((answers) =>{
 if(answers){
    return `project title ${answers.title}
    ${ansers.description} ${answers.installations}
    ${answers.instructions} ${answers.usage-information} 
    ${answers.contribution-guidelines} ${answers.test-instructions}
    ${answers.email} ${answers.license},
    ${answers.github-username}`}
 })
 .then((readMe) => {
    fs.writeToFile('readMe.md',readMe)
 }


)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
