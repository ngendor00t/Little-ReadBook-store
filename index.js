function getPoems() {
    fetch("http://localhost:3000/poems")
      .then(response => response.json())
      .then(data => {
        displayPoemDetails(data);
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching poems:", error);
      });
  }

// the function above is specifically used in fetching the data 


function displayPoemDetails(data){
for (let details of data){
    console.log(details);
let list = document.getElementById("books");
let li =document.createElement('li');
li.textContent= details.title
}
}

function displayPoemDetails(data){
let buyAbook = document.getElementById("buyAbook");
buyAbook.innerHTML=
`<ul id= "books">
<p>${details.title}</p>
<p>author:${details.author}</p>
<p>lines:${details.lines}</p>
<button id="buyAbook">Buy a book</button>
</ul>;
`
}

