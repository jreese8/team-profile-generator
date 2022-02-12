const { addManager, addEmployee,
} = require('./lib/Prompts');

// Prompts isn't a class, it contains functions which is why new Prompts().initializePrompts(); wont work.
function initializePrompts() {
  addManager().then(addEmployee);
}

initializePrompts();