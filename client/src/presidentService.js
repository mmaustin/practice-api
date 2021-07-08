class PresidentService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getPresidents(){
        fetch(`${this.endpoint}/presidents`)
        .then(resp => resp.json())
        .then(presidents)
    }

}