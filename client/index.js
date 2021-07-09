const base_url = "http://127.0.0.1:3000"
const presidentService = new PresidentService(base_url)
presidentService.getPresidents()
President.newPrez()

President.prezForm.addEventListener('submit', handleSubmit)//you don't need the parens if you're not passing in a paramenter in you js callback function calls
//this could or could not be true.  What's for sure is that parens on the above handleSubmit messed everything else way up!!!

function handleSubmit(){
    presidentService.createPresident()
}