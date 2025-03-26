let commentName = document.querySelector("#comment_name");
let commentContent = document.querySelector("#comment_text");
let commentButton = document.querySelector("#comment_button");
let commentList = document.querySelector("#comment");

function validateComment() {
  if (commentName.value && commentContent.value) {
    commentButton.disabled = false;
  } else {
    commentButton.disabled = true;
  }
}

function addComment() {
  let name = commentName.value;
  let comment = commentContent.value;

  if (name && comment) {
    const newComment = `<div class="upper-tags">
                          <div class="user-tag"><strong>${name}:</strong></div>
                          <div class="user-comment">${comment}</div>
                        </div>`;

    commentList.insertAdjacentHTML("beforeend", newComment);

    commentName.value = "";
    commentContent.value = "";
    commentButton.disabled = true;
  }
}

commentName.addEventListener("input", validateComment);
commentContent.addEventListener("input", validateComment);
commentButton.addEventListener("click", addComment);
