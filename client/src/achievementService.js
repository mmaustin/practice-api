class AchievementService {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    getAchievements(){
        fetch(`${this.endpoint}/achievements`)
        .then(resp => resp.json())
        .then(achievements => {
            for(const achievement of achievements){
                console.log(achievement)
                const a = new Achievement(achievement)

                //a.printTitle()
                //Use a, if i ever decide to do something with these objects
            }
        })
    }

}