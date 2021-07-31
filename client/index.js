const base_url = "http://127.0.0.1:3000"
const presidentService = new PresidentService(base_url)
presidentService.getPresidents()
President.newPrez()


const achievementService = new AchievementService(base_url)
achievementService.getAchievements()

President.prezForm.addEventListener('submit', handleSubmit)//you don't need the parens if you're not passing in a paramenter in your js callback function calls
//this could or could not be true.  What's for sure is that parens on the above handleSubmit messed everything else way up!!!

function handleSubmit(event){
  event.preventDefault()
  presidentService.createPresident()
  event.target.reset()
}

document.body.addEventListener( 'click',   function(event)  {
    if( event.target.id == 'delete-bttn' ) {
      event.target.parentElement.remove()
      fetch(base_url + '/' + 'presidents' + '/' + event.target.parentElement.id, {method: 'DELETE'})
    };
  } )
  //using document.body.addEventListener in order to grab dynamically created elements


  document.body.addEventListener( 'submit',   function(event)  {
    event.preventDefault()
    //debugger
    //if( event.target.id === `achievement-form` ) {
      //debugger
      const achievementObj = {
        title: event.target.children[0].value,
        year: event.target.children[2].value,
        legislation: event.target.children[4].value,
        president_id: event.target.parentElement.id
    }
    //debugger

    const configObj = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(achievementObj)
  }

  fetch(base_url + '/' + 'achievements', configObj)
  .then(resp => resp.json())
  .then(achievement => {
      //for(const achievement of achievements){
        
          const a = new Achievement(achievement)
          console.log(a)
          a.aToDom()
          event.target.reset()
      //}
  })

    //}; 
  } ) 

  document.body.addEventListener( 'mouseover',   function(event)  {
    if( event.target.id == 'list-item' ) {
        event.target.style.color = "blue";
    }

    setTimeout(function() {
      event.target.style.color = "";
    }, 1000)
  })

  document.body.addEventListener( 'click',   function(event)  {
    if( event.target.id == 'a-delete-bttn' ) {
      //debugger
      event.target.parentElement.remove()
      fetch(base_url + '/' + 'achievements' + '/' + event.target.parentElement.dataset.achievementId, {method: 'DELETE'})
    };
  } )