const generateManager = function (manager) {
  return `
  <div class="col-2">
      <div class="card h-100">
          <div class="card-header">

              <h2>Manager</h2>

          </div>

          <div class="card-body">

              <p Name: ${manager.name}</p>
              <p ID: ${manager.id}</p>
              <p Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
              <p Office Number: ${manager.officeNumber}</p>

          </div>

      </div>
  </div>

  `;
}

const generateEngineer = function (engineer) {
  return `

  <div class="col-2">
      <div class="card h-100">
          <div class="card-header">

              <h2>Engineer</h2>

          </div>

          <div class="card-body">

              <p class="id">Name: ${engineer.name}</p>
              <p class="id">ID: ${engineer.id}</p>
              <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>

          </div>

      </div>
  </div>
  `
}

// create Intern card 
const generateIntern = function (intern) {
  return `

  <div class="col-2">
      <div class="card h-100">
          <div class="card-header">

            <h2>Intern</h2>

          </div>

          <div class="card-body">

              <p class="id">Name: ${intern.name}</p>
              <p class="id">ID: ${intern.id}</p>
              <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="school">School: ${intern.school}</p>

          </div>
  </div>

</div>
  `
};

// push array to page 
generateHTML = (templateData) => {

  // array for cards 
  pageArray = []; 

  for (let i = 0; i < templateData.length; i++) {
      const employee = templateData[i];
      const role = employee.getRole(); 


      // call manager function
      if (role === 'Manager') {
          const managerCard = generateManager(employee);

          pageArray.push(managerCard);
      }

      // call engineer function
      if (role === 'Engineer') {
          const engineerCard = generateEngineer(employee);

          pageArray.push(engineerCard);
      }

      // call intern function 
      if (role === 'Intern') {
          const internCard = generateIntern(employee);

          pageArray.push(internCard);
      }
      
  }

  // joining strings 
  const employeeCards = pageArray.join('')

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">

</head>
<body>
    <header>

        <nav class="hero is-small is-danger has-text-centered">
        <div class="hero-body">
        <p class="title">
                My Team
        </p>

    </header>

    <main>
        <div class="container">

            <div class="row justify-content-center">
                
                ${employeeCards}

            </div>
        </div>
    </main>
    
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
`;
}

// export to index
module.exports = generateHTML; 