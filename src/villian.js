class Villian {
    constructor({name, description, power, hero, id, comments }){
        // debugger
        this.name = name 
        this.description = description
        this.power = power
        this.hero = hero
        this.id = id
        this.comments = comments
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id;
        option.innerText = this.name;
        dropDown.appendChild(option)
    }
}