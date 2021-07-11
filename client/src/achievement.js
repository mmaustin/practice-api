class Achievement {
    static all = []
    constructor({id, title, year, legislation, president_id}){
        this.id = id
        this.title = title
        this.year = year
        this.legislation = legislation
        this.president_id = president_id

        Achievement.all.push(this)

    }
}