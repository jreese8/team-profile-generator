// const { addManager, addEmployee,
// } = require('./lib/Prompts');

// // Prompts isn't a class, it contains functions which is why new Prompts().initializePrompts(); wont work.
// function initializePrompts() {
//   addManager().then(addEmployee);
// }

// initializePrompts();

const inquirer = require('inquirer');

const fs = require('fs');

const Manager = require('./lib/Manager');

const Intern = require('./lib/Intern');

const Engineer = require('./lib/Engineer');

const generatePage = require('./src/page-template');

const teamMembers = [];

const newManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Please enter the manager's name.");
            return false; 
        }
      }
    },

    {
      type: "input",
      name: "id",
      message: "What is the team manager's ID?",
      validate: idInput => {
        if (idInput) {
            return true;
        } else {
            console.log ("Please enter the manager's ID.");
            return false; 
        }
      }
    },
    
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?",
      validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log ("Please enter the manager's email.");
            return false; 
        }
      }
    },

    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
      validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log ("Please enter the manager's office number.");
            return false; 
        }
      }
    },


  ]).then(managerData => {
    const { name, id, email, officeNumber } = managerData;
    const manager = new Manager (name, id, email, officeNumber);

    teamMembers.push(manager);
    console.log(manager); 
  })
};

const newEmployee = () => {
  console.log(`
  ====================
    Add an employee:
  ====================
  `);

  return inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "What is your employee's role?",
        choices: ["Engineer", "Intern"],
      },

      {
        type: "input",
        name: "name",
        message: "What is your employee's name?",
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log ("Please enter the employee's number.");
              return false; 
          }
        }
      },

      {
        type: "input",
        name: "id",
        message: "What is your employee's ID?",
        validate: idInput => {
          if (idInput) {
              return true;
          } else {
              console.log ("Please enter the employee's ID.");
              return false; 
          }
        }
      },

      {
        type: "input",
        name: "email",
        message: "What is your employee's email?",
        validate: emailInput => {
          if (emailInput) {
              return true;
          } else {
              console.log ("Please enter the employee's email.");
              return false; 
          }
        }
      },

      {
        type: "input",
        name: "github",
        message: "What is your employee's github?",
        when: input => input.role === "Engineer",
        validate: githubInput => {
          if (githubInput) {
              return true;
          } else {
              console.log ("Please enter the employee's github.");
              return false; 
          }
        }
      },

      {
        type: "input",
        name: "school",
        message: "What is your employee's school?",
        when: input => input.role === "Intern",
        validate: schoolInput => {
          if (schoolInput) {
              return true;
          } else {
              console.log ("Please enter the employee's school.");
              return false; 
          }
        }
      },
      
      {
        type: "confirm",
        name: "addEmployee",
        message: "Would you like to ad more employee's?",
        default: false,
      },

    ]).then(employeeData => {

      let { name, id, email, role, github, school, addEmployee } = employeeData; 
        
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamMembers.push(employee); 

        if (addEmployee) {
            return newEmployee(teamMembers); 
        } else {
            return teamMembers;
        }
    })
};

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
          // if there's an error, reject the Promise and send the error to the .catch()
          if (err) {
              reject(err); 
              // return out of the function here to make sure the Promise doesn't execute the resolve() function
              return;
          }

          // if everything went well, resolve Promise
          resolve({
              ok: true,
              message: 'File created!'
          });
      });
  });
};

newManager()
  .then(newEmployee)
  .then(teamMembers => {
    return generatePage(teamMembers);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
    console.log(err);
  });