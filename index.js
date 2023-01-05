let quote = document.getElementById("quote")
let author = document.getElementById("author")
let twitter = document.getElementById("twitter")
let button = document.getElementById("btn")


function getQuote() {
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then((data) => {

        quote.textContent = data.content
        author.innerText = data.author
        
        twitter.setAttribute("href", "https://twitter.com/intent/tweet?text="+data.content) 
})
}

button.addEventListener("click", getQuote)
getQuote()
