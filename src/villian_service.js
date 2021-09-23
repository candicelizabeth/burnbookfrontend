class VillianService {
    constructor(port){
        this.port = port
    }

    getVillians(){
        fetch(`${this.port}/villians`)
        .then(response => response.json())
        .then( json => {
            json.forEach(element => {
                // debugger
                const v = new Villian(element)
                v.addToDropDown()
                // debugger
            })
        })
    }
}