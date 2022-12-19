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
                                <a href="#" class="recipe-btn1" id="${z.idMeal}">Recipe</a>
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
    // document.querySelector('.Login').addEventListener('click', loginDisplay)
})
document.querySelector('.food').addEventListener('click', showRecipe)


function showRecipe(e){
    e.preventDefault()
    if(e.target.classList.contains('recipe-btn1')){
        let tobeviewed = e.target.parentElement.parentElement
        fetch(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${tobeviewed.querySelector('.recipe-btn1').id}`)
        .then(res => res.json())
        .then(data => popUpDisplay(data.meals))
    }
}

function popUpDisplay(z){
    let y = z[0]
    console.log(y)
    let adding = document.createElement('div')
    let holder2 = `

        <div class="meal-data">
            <button type="button" class="recipe-btn2" id="recipeCloseBtn">
                X
            </button>
            <div class = "recipe-content">
                <h2 class="recipe-name">${y.strMeal}</h2>
                <p class="recipe-category">Category:${y.strCategory}</p>
                
            </div>
            <div class="instructions">
                <h3>instructions</h3>
                <p>
                    ${y.strInstructions}
                </p>
            </div>
            <div class="recipe-img">
                <img src="${y.strMealThumb}" alt="picture of">
            </div>
            <div class="video-link">
                <a href="${y.strYoutube}" target="_blank" class="link-text">watch video</a>
            </div>
            
        </div>


    `
    adding.innerHTML = holder2
    document.querySelector('.meal-wrapper').append(adding)

    document.querySelector('.recipe-btn2').addEventListener('click',() => {
        adding.remove()
    })
}