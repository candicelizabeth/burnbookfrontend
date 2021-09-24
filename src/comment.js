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
        this.element.addEventListener('click', this.handleClick);
        Comment.all.push(this)
        //  debugger
    }

    render(){
        this.element.innerHTML = `

        <div data-id="${this.id}">
        <h2 class="title">${this.title}</h2>
        <p class="description">${this.description}</p>
        </div>
        <button class="edit" data-id=${this.id}>Edit Comment</button>
        <button class="delete" data-id=${this.id}>X</button>
        
        `
        return this.element
    }

    createEditForm(){
        const div = this.element.querySelector('div');
        for(const element of div.children){
            let inputValue = element.innerText;
            let name = element.classList[0];
            element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" />`
        }
        // debugger
    }

    updatedItemInfo(){
        this.title = this.element.querySelector(".edit-title").value;
        this.description = this.element.querySelector(".edit-description").value;
        commentCall.updateComment(this)
        // debugger
    }

    handleClick = (e) => {
        if(e.target.innerText === "Edit Comment"){
            console.log(e.target)
            e.target.innerText = "Save Comment"
            this.createEditForm()
            // debugger
        }else if(e.target.innerText === "X"){
            console.log(e.target)
            commentCall.deleteComment(e)
        }else if(e.target.innerText === "Save Comment"){
            console.log("save works")
            e.target.innerText = "Edit Comment"
            this.updatedItemInfo()
        }
    }

    

    attachToDom(){
        Comment.cont.appendChild(this.render())
    }
  


}