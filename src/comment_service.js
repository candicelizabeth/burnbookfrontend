class CommentService {
    constructor(port){
        this.port = port
    }

    getComments(){
        fetch(this.port + `/comments`)
        .then(response => response.json())
        .then(data => {
            for(const comment of data){
                let c = new Comment(comment)
                c.attachToDom()
            }
        })
        .catch()
    }

    createComments(){
        const commentInfo = {
            // debugger
            comment: {
                title: titleValue.value,
                description: descriptionValue.value,
                villian_id: dropDown.value
            }
        }
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(commentInfo)
        }

        //debugger
        fetch(this.port + `/comments`, configObject)
        .then(response => response.json())
        .then(data => {
            const c = new Comment(data)
            c.attachToDom()
        })
    }

    updateComment(comment){
        const {title, description, id} = comment
        const commentInfo = {
            title, 
            description
        }

        const configObject = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(commentInfo)
        }
        // debugger
        fetch(`${this.port}/comments/${id}`, configObject)
        .then( comment.render() )
        // .then(data => {
        //     // const c = new Comment(data)
        //     comment.render()
        // })
    }

    deleteComment(e){
        // debugger
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(`${this.port}/comments/${id}`, {method: 'DELETE'})
        .then(response => response.json())
        .then(json => alert(json.message))
    }


}