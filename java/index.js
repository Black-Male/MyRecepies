//let holder = ""
let AddingPoint = document.querySelector('.food')
document.addEventListener('DOMContentLoaded', () => {
    // fetch(`https:www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    // })


    // search for food by name 
    document.querySelector('.search-inputs-container').addEventListener('submit', (e) => {
        e.preventDefault()
        let inputs = e.target.querySelector('.search-bar').value
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputs}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data.meals)
            let holder = ""
            if (data.meals){
                data.meals.forEach(z => {
                    console.log(z)
                    let id = z.id
                    //mealPageDisplay(meal)
                    holder += `
                        <div class="meal-item" id="${z.idMeal}">
                            <div class="meal-img">
                                <img src="${z.strMealThumb}" alt="food">        
                            </div>
                            <div class="meal-name">
                                <h3>${z.strMeal}</h3>
                                <button class="recipe-btn" id="${z.idMeal}">Recipe</button>
                            </div>
                        </div>
                        `
                        AddingPoint.innerHTML = holder

                        //attempt at a show food recipe feature
                        //AddingPoint.querySelector('.recipe-btn').addEventListener('click',() => {
                        //   if (z.id === AddingPoint.querySelector('.recipe-btn').id){
                        //     console.log (z.strInstructions)
                        //   }  
                        //console.log()
                        //})
                        
                })
            }else{
               holder += `
                    <div class="Removed">   
                        <p class= "No-Meal">No meals found, please try another keyword<p>
                    </div>`
               let AddingPoint = document.querySelector('.food')
               AddingPoint.innerHTML = holder
            }
        })       

    })

    // dummy login point
    // document.querySelector('.Login').addEventListener('click', () => {

    // })
})
// document.querySelector('.food').addEventListener('click', (y) => {

// })