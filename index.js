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
    const buyAbook = document.getElementById("buyAbook");
    const booksList = document.getElementById("books");
  
    // Clear the previous list of books
    booksList.innerHTML = "";
  
    details.forEach(poem => {
      const poemElement = document.createElement("ul");
      poemElement.innerHTML = `
        <li>Title: ${poem.title}</li>
        <li>Author: ${poem.author}</li>
      <li>Lines: ${poem.lines}</li>
      <button id="buyButton_${poem.id}">Buy a book</button>
    `;
    booksList.appendChild(poemElement);
  });
}
getPoems()