class Achievement {
    static all = []
    static presContainer = document.querySelector('#presidents-container')
    constructor({id, title, year, legislation, president_id}){
        this.id = id
        this.title = title
        this.year = year
        this.legislation = legislation
        this.president_id = president_id

        Achievement.all.push(this)

    }

    static printAll(){
        console.log(this.all)
    }

    printTitle(){
        console.log(this.title)
    }

    aToDom(){
        //language for using literals and insertAdjacentHTML apparently. so confused why this is working???
        //document.querySelector(`#ul-${this.president_id}`).innerHTML += `<li id="list-item" data-achievement-id="${this.id}">${this.title}
        //<button type="button" id="a-delete-bttn">Delete</button> </li>`

        
        const q = document.querySelector(`#ul-${this.president_id}`)
        q.insertAdjacentHTML('beforeend', `<li id="list-item-${this.id}" data-achievement-id="${this.id}">${this.title}</li>`)//<button type="button" id="a-delete-bttn">Delete</button></li>`)
        //const z = document.querySelector(`li [data-achievement-id="${this.id}"]`)
        const z = document.querySelector(`#list-item-${this.id}`)
        z.insertAdjacentHTML('beforeend', '<button type="button" id="a-delete-bttn">Delete</button>')
        

        //language for using iAHTML
        //document.querySelector(`ul`).insertAdjacentHTML('beforeend', `<li id="list-item" data-achievement-id="${this.id}">${this.title}
        //<button type="button" id="a-delete-bttn">Delete</button> </li>`)
    }

}