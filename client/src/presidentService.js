//const div = document.querySelector("#presidents-container")
//const divTwo = document.querySelector("#achievements-container")
//const innerDiv = document.createElement('div')
//const d = document.createElement('div')

class PresidentService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getPresidents(){
        fetch(`${this.endpoint}/presidents`)
        .then(resp => resp.json())
        .then(presidents => {
            for(const prez of presidents){
                const p = new President(prez)
                p.appendToDom()
            }
        })
    }

    createPresident(){
        const obj = {
            name: document.getElementById("name").value
        }
        debugger
    }

}