const port = `http://localhost:3000`;
const commentCall = new CommentService(port);
const form = document.getElementById("comment-form");
const dropDown = document.getElementById("villian-dropdown");
const titleValue = document.getElementById('comment-title');
const descriptionValue = document.getElementById('description-value');

commentCall.getComments('burn-book-')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
  e.preventDefault();
  commentCall.createComments()
//   debugger
}


