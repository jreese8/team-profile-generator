const inquirer = require('inquirer');

const Manager = require('./lib/Manager');

const Intern = require('./lib/Intern');

const Engineer = require('./lib/Engineer');

const generatePage = require('./src/page-template');

const { writeFile, copyFile } = require('./utils/generateHTML.js');
const Employee = require('./lib/Employee');

const teamArray = [];
const idArray = [];

const createManager = () => {

  return inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
      validate: managerNameInput => {
        if (managerNameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },

    {
      type: "input",
      name: "managerId",
      message: "What is tms id?",
      validate: managerIdInput => {
        if (managerIdInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
  },

  {
    type: "input",
    name: "managerEmail",
    message: "What is tms email?",
    validate: managerEmailInput => {
      if (managerEmailInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
},

{
  type: "input",
  name: "managerOfficeNumber",
  message: "What is tms ON?",
  validate: managerONInput => {
    if (managerONInput) {
      return true;
    } else {
      console.log('Please enter your name!');
      return false;
    }
  }
}

  ]).then(answers => {
    const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamArray.push(manager);
    idArray.push(answers.managerId);
    addEmployee();
  });

};


const addEmployee = () => {
  return inquirer.prompt ([
      {
          type: 'list',
          name: 'role',
          message: "Please choose your employee's role",
          choices: ['Engineer', 'Intern']
      },
      {
          type: 'input',
          name: 'name',
          message: "What's the name of the employee?", 
          validate: employeeNameInput => {
              if (employeeNameInput) {
                  return true;
              } else {
                  console.log ("Please enter an employee's name!");
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Please enter the employee's ID.",
          validate: employeeIdInput => {
              if  (employeeIdInput) {
                  return true; 
              } else {
                  console.log ("Please enter the employee's ID!")
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Please enter the employee's email.",
          validate: employeeEmail => {
              if (employeeEmail) {
                  return true;
              } else {
                  console.log ('Please enter an email!')
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'github',
          message: "Please enter the employee's github username.",
          when: (input) => input.role === "Engineer",
          validate: employeeGithubInput => {
              if (employeeGithubInput ) {
                  return true;
              } else {
                  console.log ("Please enter the employee's github username!")
                  return false;
              }
          }
      },
      {
          type: 'input',
          name: 'school',
          message: "Please enter the intern's school",
          when: (input) => input.role === "Intern",
          validate: employeeSchoolInput => {
              if (employeeSchoolInput) {
                  return true;
              } else {
                  console.log ("Please enter the intern's school!")
                  return false;
              }
          }
      },
      {
          type: 'confirm',
          name: 'confirmAddEmployee',
          message: 'Would you like to add more team members?',
          default: false
      }
  ])
  .then(employeeData => {
      // data for employee types 

      let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
      let employee = new Employee(name, id, email); 

      if (role === "Engineer") {
          employee = new Engineer (name, id, email, github);

          console.log(employee);

      } else if (role === "Intern") {
          employee = new Intern (name, id, email, school);

          console.log(employee);
      }

      teamArray.push(employee); 

      if (confirmAddEmployee) {
          return addEmployee(teamArray); 
      } else {
          return teamArray;
      }
  })

};

  createManager()
  .then(addEmployee)
  .then(userData => {
    return generatePage(userData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });
    

