fetch ("https://poetrydb.org/title/Ozymandias/lines.json")
.then(response =>response.json())
.then(data => console.log(data))
