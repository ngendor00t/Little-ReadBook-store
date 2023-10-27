function getPoems() {
    fetch("http://localhost:3000/poems")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        displayPoemDetails(data);
      })
      .catch(error => {
        console.error("Error fetching poems:", error);
      });
  }
  
  function displayPoemDetails(details) {
    const likeBook = document.getElementById("likeBook");
    const booksList = document.getElementById("books");
    const commentInput = document.getElementById("comment");
  
    // Clear the previous list of books
    booksList.innerHTML = "";
  
    details.forEach(poem => {
      const poemElement = document.createElement("ul");
      poemElement.innerHTML = `
        <li>Title: ${poem.title}</li>
        <li>Author: ${poem.author}</li>
      <li>Lines: ${poem.lines}</li>
      <button id="likeBook_${poem.id}">like a book</button>
      <button id="comment_${poem.id}">comment</button>
    `;
    booksList.appendChild(poemElement);
// const likeBook =document.getElementById(`likebook_${poem.id}`);
// likeBook.addEventlistener("click",()=> like(poem.id));



// const commentButton=document.getElementById(`comment_${poem.id}`);
// commentButton.addEventlistener("click",()=> commentsection(poem.id));



  });
}
// function commentsection(poemId) {
//     const commentContainer = document.getElementById("commentContainer");
//     const commentInput = document.getElementById("comment");

//     if (commentContainer.style.display === "none") {
//         // Show the comment section and set the comment input's data-poem-id attribute
//         commentContainer.style.display = "block";
//         commentInput.setAttribute("data-poem-id", poemId);
//     } else {
//         // Hide the comment section if it's already open
//         commentContainer.style.display = "none";
//         commentInput.removeAttribute("data-poem-id");
//     }
// }

// function addComment(poemId) {
//     const commentInput = document.getElementById("comment");
//     const commentText = commentInput.value.trim();

//     if (commentText !== "") {
//         const commentContainer = document.getElementById("commentContainer");
//         const commentElement = document.createElement("p");
//         commentElement.textContent = commentText;
//         commentContainer.appendChild(commentElement);
//         commentInput.value = ''; // Clear the input field after adding a comment
//     }
// }

// document.addEventListener("DOMContentLoaded", function () {
//     getPoems();
// });

// // Add event listener for the "Add Comment" button
// const addCommentButton = document.getElementById("addCommentBtn");
// addCommentButton.addEventListener("click",function(){
//     const poemId = document.getElementById("comment").getAttribute("data");
//     if (poemId) {
//         addComment(poemId);
//     }
// });
getPoems()