
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
        if (this.achievements !== undefined)
        this.achievements.forEach(a => {
            string += `<li id="list-item-${a.id}" data-achievement-id="${a.id}">${a.title}
            <button type="button" id="a-delete-bttn">Delete</button> </li>`
        })

        /*
        President.prezContainer.innerHTML += `
        <div id="${this.id}" class="border"><p>${this.name}</p><p>Achievements</p>
        <ul id="ul-${this.id}">${string}</ul><form id="achievement-form">
        Title: <input type="text" id="title"><br>
        Year: <input type="number" id="year"><br>
        Legislation: <input type="text" id="legislation"><br>
        <input type="submit" id="achievement"><br>
        </form>
        <button type="button" id="delete-bttn">Delete</button>
        </div>
        `
        */
        
        
        //President.prezContainer.insertAdjacentHTML('beforeend', `<div id="try-${this.id}" class="border"></div>`)
        //let b = document.querySelector(`#try-${this.id}`)
        President.prezContainer.insertAdjacentHTML('beforeend', `<div id="${this.id}" class="border"></div>`)
        let b = document.querySelector(`div [id="${this.id}"]`)
        b.insertAdjacentHTML('afterbegin', `<p>${this.name}</p>`)
        //President.prezContainer.insertAdjacentHTML('beforeend', `<p>${this.name}</p>`)
        b.insertAdjacentHTML('beforeend', '<p>Achievements</p>')
        b.insertAdjacentHTML('beforeend', `<ul id="ul-${this.id}">${string}</ul>`)
        b.insertAdjacentHTML('beforeend', `<form id="achievement-form-${this.id}" class="achievement-form"></form>`)
        //Title: <input type="text" id="title"><br>Year: <input type="number" id="year"><br>Legislation: <input type="text" id="legislation"><br><input type="submit" id="achievement"><br></form>
        const g = document.querySelector(`#achievement-form-${this.id}`)
        g.insertAdjacentHTML('beforeend', 'Title: <input type="text" id="title"><br>')
        g.insertAdjacentHTML('beforeend', 'Year: <input type="number" id="year"><br>')
        g.insertAdjacentHTML('beforeend', 'Legislation: <input type="text" id="legislation"><br>')
        g.insertAdjacentHTML('beforeend', '<input type="submit" id="achievement"><br>')
        b.insertAdjacentHTML('beforeend', '<button type="button" id="delete-bttn">Delete</button>')
        
    }

    static newPrez(){
       /* President.prezForm.innerHTML += `
        <form id="president-form">
            New President<br>
            Name: <input type="text" id="name"><br>
            Submit: <input type="submit" id="create">
        </form>
        `*/

        President.prezForm.insertAdjacentHTML('beforeend', '<form id="president-form"><br>New President<br></form>')
        const f = document.querySelector('#president-form')
        f.insertAdjacentHTML('beforeend', 'Name: <input type="text" id="name"><br>')
        f.insertAdjacentHTML('beforeend', 'Submit: <input type="submit" id="create"><br>')

    }

}



/*
<form id="achievement-form">
        Title: <input type="text" id="title"><br>
        Year: <input type="number" id="year"><br>
        Legislation: <input type="text" id="legislation"><br>
        <input type="submit" id="achievement"><br>
        </form>
        <button type="button" id="delete-bttn">Delete</button>
        </div>
*/

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