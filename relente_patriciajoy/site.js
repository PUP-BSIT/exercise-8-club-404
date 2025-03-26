document.addEventListener("DOMContentLoaded", () => {
    //Comment Form
    const commentForm = document.getElementById("comment_form");
    const commentName = document.getElementById("comment_name");
    const commentText = document.getElementById("comment_text");
    const commentList = document.getElementById("comment_list");
    const commentBtn = document.getElementById("comment_btn");

    commentBtn.disabled = true;

    function buttonState() {
        let isFilled = commentName.value.trim() && commentText.value.trim();
        commentBtn.disabled = !isFilled;
    }

    commentName.addEventListener("input", buttonState);
    commentText.addEventListener("input", buttonState);

    // Prevent default form submission
    commentForm.addEventListener("submit", (event) => {
        event.preventDefault(); //Prevent refresh to the screen 

        let nameValue = commentName.value.trim();
        let textValue = commentText.value.trim();

        if (!nameValue || !textValue) {
            console.error("Both fields must be filled.");
            return;
        }

        addComment(nameValue, textValue);
        commentForm.reset();
        buttonState(); //Re-check after reset
    });

    //Adds the comment
    function addComment(name, text) {
        let listItem = document.createElement("li");
        listItem.classList.add("comment_list");

        let nameElement = document.createElement("strong");
        nameElement.textContent = `${name}:`;
        nameElement.classList.add("comment_name");

        let textElement = document.createElement("span");
        textElement.textContent = ` ${text}`;
        textElement.classList.add("comment_text");

        listItem.appendChild(nameElement);
        listItem.appendChild(textElement);
        commentList.appendChild(listItem);
    }
});
