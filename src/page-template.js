// create the name section
const generateProjectName = projectnameText => {
  if (!projectnameText) {
    return '';
  }

  return `${projectnameText}
  `;
};

const generateDescription = descriptionText => {
  if (!descriptionText) {
    return '';
  }

  return `${descriptionText}
  `;
};

const generateInstallation = installationText => {
  if (!installationText) {
    return '';
  }

  return `${installationText}
  `;
};

const generateUsage = usageText => {
  if (!usageText) {
    return '';
  }

  return `${usageText}
  `;
};

const generateCredits = creditsText => {
  if (!creditsText) {
    return '';
  }

  return `${creditsText}
  `;
};

const generateLicense = licenseText => {
  if (!licenseText) {
    return '';
  }

  return `${licenseText}
  `;
};

const generateContribute = contributeText => {
  if (!contributeText) {
    return '';
  }

  return `${contributeText}
  `;
};

const generateTests = testsText => {
  if (!testsText) {
    return '';
  }

  return `${testsText}
  `;
};

const generateGithub = githubText => {
  if (!githubText) {
    return '';
  }

  return `${githubText}
  `;
};

const generateEmail = emailText => {
  if (!emailText) {
    return '';
  }

  return `${emailText}
  `;
};

module.exports = templateData => {
  // destructure page data by section
  const { projectname, description, installation, usage, credits, license, contribute, tests, github, email } = templateData;

  return `# ${generateProjectName(projectname)}

  ## Description
  ${generateDescription(description)}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  ${generateInstallation(installation)}

  ## Usage
  ${generateUsage(usage)}

  ## Credits
  ${generateCredits(credits)}

  ## License
  ${generateLicense(license)}
  - [https://choosealicense.com/]

  ## Contribute
  ${generateContribute(contribute)}

  ## Tests
  ${generateTests(tests)}

  ## Questions
  Please contact ${generateGithub(github)} at ${generateEmail(email)} regarding questions.
`};