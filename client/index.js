const base_url = "http://127.0.0.1:3000"
const presidentService = new PresidentService(base_url)
presidentService.getPresidents()
President.newPrez()

const achievementService = new AchievementService(base_url)
achievementService.getAchievements()

President.prezForm.addEventListener('submit', handleSubmit)//you don't need the parens if you're not passing in a paramenter in you js callback function calls
//this could or could not be true.  What's for sure is that parens on the above handleSubmit messed everything else way up!!!

function handleSubmit(){
  event.preventDefault
  presidentService.createPresident()
}

document.body.addEventListener( 'click',   function(event)  {
    if( event.target.id == 'delete-bttn' ) {
      event.target.parentElement.remove()
      fetch(base_url + '/' + 'presidents' + '/' + event.target.parentElement.id, {method: 'DELETE'})
    };
  } )
  //using document.body.addEventListener in order to grab dynamically created elements


  document.body.addEventListener( 'submit',   function(event)  {
    event.preventDefault
    debugger
    //if( event.target.id == 'achievement-form' ) {
      const achievementObj = {
        title: document.getElementById("title").value,
        year: document.getElementById("year").value,
        legislation: document.getElementById("legislation").value,
        president_id: event.target.parentElement.id
    }
    
    const configObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(achievementObj)
  }

  fetch(base_url + '/' + 'achievements', configObj)
  .then(resp => resp.json())
  .then(achievements => {
      for(const achievement of achievements){
          const a = new Achievement(achievement)
          
      }
  })

    //};
    //debugger
  } )
