const div = document.querySelector("#presidents-container")
//const divTwo = document.querySelector("#achievements-container")
const innerDiv = document.createElement('div')
const d = document.createElement('div')

class PresidentService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getPresidents(){
        fetch(`${this.endpoint}/presidents`)
        .then(resp => resp.json())
        .then(presidents => {
            presidents.forEach(president => {
                let string = ""
                president.achievements.forEach(a => {
                    string += `<li>${a.title}</li>`
                })
                div.innerHTML += `
                <div id="${president.id}"><p>${president.name}</p>
                <ul>${string}</ul></div>
                `
            })

        })
    }

}