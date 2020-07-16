  function init() {
    let container = document.getElementById('container');
      fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
    
        response.json().then(function (json) {

          console.log(json);

          for (i in json) {
            let activeColor = "red";
            if (json[i].active) {
              activeColor = "green"
            }

            container.innerHTML += `
              <div class="astronaut">
                <div class="bio">
                  <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>   
                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                  <li style= "color:${activeColor}">Active: ${json[i].active}</li>
                  <li>Skills: ${json[i].skills.join(", ")}</li>
                </ul>
                </div>                
                  <img class="avatar" src="${json[i].picture}"/>
              </div>
            `;
          }
        });
      });
    }

  window.onload = init;
  