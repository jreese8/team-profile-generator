const inquirer = require('inquirer');

const Manager = require('./Manager');

const Intern = require('./Intern');

const Engineer = require('./Engineer');

const {writeFile} = require('../utils/generateHTML.js');

const generatePage = require('../src/page-template');

const teamMembers = [];

const addManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
    },

    {
      type: "input",
      name: "id",
      message: "What is the team manager's ID?",
    },
    
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?",
    },

    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the team manager's office number?",
    },


  ]).then(managerData => {
    const { name, id, email, officeNumber } = managerData;
    manager = new Manager(name, id, email, officeNumber, "Manager");

    teamMembers.push(manager);

  });
};

const addEmployee = () => {
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
      },

      {
        type: "input",
        name: "id",
        message: "What is your employee's Id?",
      },

      {
        type: "input",
        name: "email",
        message: "What is your employee's email?",
      },

      {
        type: "input",
        name: "github",
        message: "What is your employee's github?",
        when: input => input.role === "Engineer",
      },

      {
        type: "input",
        name: "school",
        message: "What is your employee's school?",
        when: input => input.role === "Intern",
        validate: validate,
      },
      
      {
        type: "confirm",
        name: "addEmployee",
        message: "Add additional employee?",
        default: false,
      },
    ])
    .then(response => {
      const { name, id, email, role, github, school, addEmployee } =
        response;

      role === "Engineer"
        ? (employee = new Engineer(name, id, email, github))
        : (employee = new Intern(name, id, email, school));
      teamMembers.push(employee);

      addEmployee ? newEmployee(teamMembers) : writeFile(generatePage(teamMembers));
    });
};

module.exports = {
  addManager,
  addEmployee,
  teamMembers,
};