// Function to check if the input and textarea are filled.
function checkComment() {
	let name = document.getElementById("input_name");
	let comment = document.getElementById("comment");
	let submitButton = document.getElementById("comment_btn");

	if(name.value.length && comment.value.length) {
		submitButton.disabled = false;
	} else {
		submitButton.disabled = true;
	}
}

// Function to add comment
function addComment() {
	let commentSection = document.querySelector(".comments");
	let name = document.getElementById("input_name");
	let comment = document.getElementById("comment");
	let submitButton = document.getElementById("comment_btn");
	const newName = `<h2 class="comment-name">${name.value}</h2>`;
	const newComment = `<p class="new-comment">${comment.value}</p>`;

	if (!submitButton.disabled) {
		commentSection.insertAdjacentHTML("beforeend", newName);
		commentSection.insertAdjacentHTML("beforeend", newComment);
	}
	
	name.value = "";
	comment.value = "";
	submitButton.disabled = true;
}