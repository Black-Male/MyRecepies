
document.addEventListener('DOMContentLoaded', () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
    .then(res => res.json())
    .then(data => console.log(data))

    document.querySelector('.search-inputs-container').addEventListener('submit', (e) => {
        e.preventDefault()
        let searchResult = document.querySelector('.search-bar').innerHTML
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchResult}`)
        .then(res => res.json())
        .then(data => console.log(data))
    })
})