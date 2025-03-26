let commentName = document.querySelector("#comment_name");
let commentContent = document.querySelector("#comment_text");
let commentButton = document.querySelector("#comment_button");

function validateComment() {
  if (commentName.value && commentContent.value) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}

commentName.addEventListener("input", validateComment);
commentContent.addEventListener("input", validateComment);
commentButton.addEventListener("click", addComment);

validateComment();
