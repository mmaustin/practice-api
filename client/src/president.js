
class President {
    static all = []
    static prezContainer = document.querySelector('#presidents-container')
    static prezForm = document.querySelector('#form-container')
    //I guess it's just convention to make the DOM elements class variables, but making them instance
    //variables seems to work as well???
    constructor({id, name, achievements}){
        this.id = id
        this.name = name
        this.achievements = achievements

        President.all.push(this)

    }


    appendToDom(){
        let string = ""
        this.achievements.forEach(a => {
            string += `<li id="list-item" data-achievement-id="${a.id}">${a.title}
            <button type="button" id="a-delete-bttn">Delete</button> </li>`
        })
        President.prezContainer.innerHTML += `
        <div id="${this.id}" class="border"><p>${this.name}</p>
        <ul>${string}</ul><form id="achievement-form">
        Title: <input type="text" id="title"><br>
        Year: <input type="number" id="year"><br>
        Legislation: <input type="text" id="legislation"><br>
        Submit: <input type="submit" id="achievement"><br>
        </form>
        <button type="button" id="delete-bttn">Delete</button>
        </div>
        `

    }

    static newPrez(){
        President.prezForm.innerHTML += `
        <form id="president-form">
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