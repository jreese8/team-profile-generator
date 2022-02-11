// create the manager name section
const generateManagerName = managerNameText => {
  if (!managerNameText) {
    return '';
  }

  return `${managerNameText}
  `;
};

const generateManagerId = managerIdText => {
  if (!managerIdText) {
    return '';
  }

  return `${managerIdText}
  `;
};

const generateManagerEmail = managerEmailText => {
  if (!managerEmailText) {
    return '';
  }

  return `${managerEmailText}
  `;
};

const generateManagerOfficeNumber = managerOfficeNumberText => {
  if (!managerOfficeNumberText) {
    return '';
  }

  return `${managerOfficeNumberText}
  `;
};

const generateEmployeeName = employeeNameText => {
  if (!employeeNameText) {
    return '';
  }

  return `${employeeNameText}
  `;
};

const generateEmployeeId = employeeIdText => {
  if (!employeeIdText) {
    return '';
  }

  return `${employeeIdText}
  `;
};

const generateEmployeeEmail = employeeEmailText => {
  if (!employeeEmailText) {
    return '';
  }

  return `${employeeEmailText}
  `;
};

const generateEmployeeGithub = employeeGithubText => {
  if (!employeeGithubText) {
    return '';
  }

  return `${employeeGithubText}
  `;
};

const generateEmployeeSchool = employeeSchoolText => {
  if (!employeeSchoolText) {
    return '';
  }

  return `${employeeSchoolText}
  `;
};

module.exports = templateData => {
  // destructure page data
  const { managerName, managerId, managerEmail, managerOfficeNumber, employeeName, employeeId, employeeEmail, employeeGithub, employeeSchool } = templateData;

  return `${generateManagerName(managerName)}

  ${generateManagerId(managerId)}

  ${generateManagerEmail(managerEmail)}

  ${generateManagerOfficeNumber(managerOfficeNumber)}

  ${generateEmployeeName(employeeName)}

  ${generateEmployeeId(employeeId)}

  ${generateEmployeeEmail(employeeEmail)}

  ${generateEmployeeGithub(employeeGithub)}

 ${generateEmployeeSchool(employeeSchool)}
`};