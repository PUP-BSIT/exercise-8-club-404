function buttonEnabler() {
	let name = document.getElementById("user_name");
	let comment = document.getElementById("user_comment");

	if(comment.value.length > 0 && name.value.length > 0) {
		document.getElementById("comment_button").disabled = false;
    } else {
		document.getElementById("comment_button").disabled = true;
	}
}

function displayComment() {
	let commentContainer = document.querySelector("#comment_container");
	let commenter = document.getElementById("user_name");
	let comment = document.getElementById("user_comment");
	let button = document.getElementById("comment_button");
	const newName = `<h2 class="commenter">${commenter.value}</h2>`;
	const newComment = `<p class="comment-content">${comment.value}</p>`;

	if(!button.disabled) {
		commentContainer.insertAdjacentHTML("beforeend", newName);
		commentContainer.insertAdjacentHTML("beforeend", newComment);
	}

	commenter.value = "";
	comment.value = "";
	button.disabled = true;
}