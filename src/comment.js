class Comment {
    static all = [];
    static cont = document.getElementById("comments-cont")
    constructor({description, id, title, villian_id, villian}){
        this.description = description
        this.id = id 
        this.title = title
        this.villian_id = villian_id
        this.villian = villian
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `comment-${id}`;
        Comment.all.push(this)
        //  debugger
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="title">${this.title}</h2>
        <p class="description">${this.description}</p>
        </div>
        `
        return this.element
    }

    attachToDom(){
        Comment.cont.appendChild(this.render())
    }
  


}