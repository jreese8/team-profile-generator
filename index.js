const inquirer = require('inquirer');

const Manager = require('./lib/Manager');

const Intern = require('./lib/Intern');

const Engineer = require('./lib/Engineer');

const generatePage = require('./src/page-template');

const {writeFile, copyfile} = require('./utils/generateHTML.js');

const teamMembers = [];
const idArray = [];

function appMenu() {

  function createManager {
    console.log("plesa build your team");
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
          return "Please enter a name.";

      }
    },

    {
      type: "input",
      name: "managerId",
      message: "What is tms id?",
      validate: answer => {
        const pass = answer.match(
          /^[1-9]\d*$/
        );
        if (pass) {
          return true;
        }
        return "Please enter number"
    }
  },

  {
    type: "input",
    name: "managerEmail",
    message: "What is tms email?",
    validate: answer => {
      const pass = answer.match(
        /\S+@\S+\.\S+/
      );
      if (pass) {
        return true;
      }
      return "Please enter email"
  }
},

{
  type: "input",
  name: "managerOfficeNumber",
  message: "What is tms ON?",
  validate: answer => {
    const pass = answer.match(
      /^[1-9]\d*$/
    );
    if (pass) {
      return true;
    }
    return "Please enter ON"
 }
}

  ]).then(answers => {
    const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    teamMembers.push(manager);
    idArray.push(answers.managerId);
    createTeam();
  });

}


function createTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "memberChoice",
      message: "Which type of team member would you to like to add?",
      choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members"


      ] 


    ]).then(userchoice => {

      switch userChoice.memberChoice) {

        case "Engineer":
          addEngineer();

          break;

        case "Intern":
        addIntern();

        break;

        default:
          buildTeam();
      }

    });

    }

    function addEngineer() {
      inquirer.prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is your engineer's name?",
    
          validate: answer => {
            if (answer !== "") {
              return:true;
            }
            return "Please enter at least one character.";
    
          }
    
    
    
    
        }
    
      ])


      
    

