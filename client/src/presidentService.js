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
            for(const prez of presidents){
                
                div.innerHTML += `<div id="${prez.id}">${prez.name}</div>`
                //innerDiv.appendChild(p)
                //div.appendChild(d)

                /*prez.achievements.forEach(a => {
                    const pTwo = document.createElement('p')
                    pTwo.innerText = `${a.title}`
                    innerDiv.appendChild(pTwo)
                    //console.log(a)
                    div.appendChild(innerDiv)
                })*/
            }
        })
    }

}