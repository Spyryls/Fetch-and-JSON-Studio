  function init() {
      fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
    
        response.json().then(function (json) {
          let container = document.getElementById('#container');
          console.log(json);
          let astronauts = '';
          for (let i; i < json.length; i++) {
            let info = `
              <div class="astronaut">
              <h3>${json[i].firstName} ${json[i].lastName}</h3>
              <ul>   
                  <li>Hours in space: ${astronaut.hoursInSpace}</li>
                  <li>Active: ${astronaut.active}</li>
                  <li>Skills: ${astronaut.skills.join(", ")}</li>
              </ul>
                <img class="avatar" src="images/${astronaut.picture}"/>
              </div>
            `;
          astronauts += info
        }
        container.innerHTML = astronauts;
      });
    });
  }
  window.onload = init;
  