  function init() {
      fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
    
        response.json().then(function (json) {
          let container = document.getElementById('#container');
          console.log(json);

          for (let i; i < json.length; i++) {
            let info = `
              <div class="astronaut">
                <div class="bio">
                  <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>   
                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                  <li>Active: ${json[i].active}</li>
                  <li>Skills: ${json[i].skills.join(", ")}</li>
                </ul>
                  <img class="avatar" src="images/${json[i].picture}"/>
                </div>
              </div>
            `;
          }
        container.innerHTML += astronauts;
      });
    });
   }

  window.onload = init;
  