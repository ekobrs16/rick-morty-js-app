// search for a specific character
// fetch data according to the searched term
// print the result on the HTML

const form = document.getElementById("searchForm")
const input = document.getElementById("searchBar")
const result = document.getElementById("result")

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(input.value)
    fetch(`https://rickandmortyapi.com/api/character?name=${input.value}`)
    .then(res=> res.json())
    .then(res=> result.innerHTML = "<h1>results will be printed here</h1>" )
    .then(res=> console.log(res))


    // '' // single quotes
    // "" // double quotes
    // `` // backticks 
})