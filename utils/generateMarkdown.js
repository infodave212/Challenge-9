// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
* [description](#description)
* [installation](#installation)
* [testinstruction](#testinstruction)
* [contributionguidelines](#contributionguidelines)
* [usageinformation](#usageInformation)
* [userinformation](#userinformation)
* [emails](#emails)
* [license](#license)
* [githubUsername](#githubUsername)
## description
  ${answers.description}
## installation
  ${answers.installation}
## instructions
  ${answers.instructions}
## userInformation
  ${answers.usageInformation} 
## contributionGuidelines
  ${answers.contributionGuidelines}
## testInstruction
  ${answers.testInstructions}
## emails
  ${answers.email} 
## license
  ${answers.license}
## githubUsername
  ${answers.githubUsername}`}

module.exports = generateMarkdown;
