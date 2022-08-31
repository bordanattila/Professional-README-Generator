// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "GNU AGPLv3") {
    return "![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
  } else if (license === "Mozilla Public License 2.0") {
    return "![License](https://img.shields.io/badge/License-MPL_2.0-blue.svg)";
  } else if (license === "Apache License 2.0") {
    return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (license === "MIT License") {
    return "![License](https://img.shields.io/badge/License-MIT-blue.svg)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return "[GNU AGPL v3](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "Mozilla Public License 2.0") {
    return "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "Apache License 2.0") {
    return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT License") {
    return "[MIT](https://opensource.org/licenses/MIT)";
  } else{
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    const link = renderLicenseLink(license)
    return link
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
    
  ## Description
  ${data.description}
      
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  ${data.contents}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  Licensed under the ${renderLicenseSection(data.license)} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  [My GitHub Profile](https://github.com/${data.username})
  
  If you need to reach me you can do so by sending an email to ${data.email}
  
  `;
}

module.exports = generateMarkdown;
