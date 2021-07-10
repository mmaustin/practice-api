
class President {
    static all = []
    static prezContainer = document.querySelector('#presidents-container')
    static prezForm = document.querySelector('#form-container')
    //static workaround = document.querySelector('#workaround')
    constructor({id, name, achievements}){
        this.id = id
        this.name = name
        this.achievements = achievements

        President.all.push(this)

    }


    appendToDom(){
        let string = ""
        this.achievements.forEach(a => {
            string += `<li>${a.title}</li>`
        })
        President.prezContainer.innerHTML += `
        <div id="${this.id}"><p>${this.name}</p>
        <ul>${string}</ul><form>
        <input type="text">
        </form>
        <button type="button" id="delete-bttn">Delete</button>
        </div>
        `

    }

    static newPrez(){
        President.prezForm.innerHTML += `
        <form>
            Name: <input type="text" id="name"><br>
            Submit: <input type="submit" id="create">
        </form>
        `
    }


}





/*
presidents.forEach(president => {
                let string = ""
                president.achievements.forEach(a => {
                    string += `<li>${a.title}</li>`
                })
                div.innerHTML += `
                <div id="${president.id}"><p>${president.name}</p>
                <ul>${string}</ul><form>
                <input type="text">
                </form>
                </div>
                `
*/