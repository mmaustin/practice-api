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
        document.querySelector(`#ul-${this.president_id}`).innerHTML += `<li id="list-item" data-achievement-id="${this.id}">${this.title}
        <button type="button" id="a-delete-bttn">Delete</button> </li>`
    }

}