const base_url = "http://127.0.0.1:3000"
const presidentService = new PresidentService(base_url)
//const deleteButton = document.querySelector('delete-bttn')
presidentService.getPresidents()
President.newPrez()

President.prezForm.addEventListener('submit', handleSubmit)//you don't need the parens if you're not passing in a paramenter in you js callback function calls
//this could or could not be true.  What's for sure is that parens on the above handleSubmit messed everything else way up!!!

document.body.addEventListener( 'click',   function(event)  {
    if( event.target.id == 'delete-bttn' ) {
      event.target.parentElement.remove()
      fetch(base_url + '/' + 'presidents' + '/' + event.target.parentElement.id, {method: 'DELETE'})
    };
  } )
  //using document.body.addEventListener in order to grab dynamically created elements

function handleSubmit(){
    event.preventDefault
    presidentService.createPresident()
}

/*function printButton(){
    console.log(event.target)
}
printButton()*/