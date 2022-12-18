//let holder = ""

document.addEventListener('DOMContentLoaded', () => {
    // fetch(`https:www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    // })

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
                    //mealPageDisplay(meal)
                    holder += `
                        <div class="meal-item" id="${z.id}}">
                            <div class="meal-img">
                                <img src="${z.strMealThumb}" alt="food">        
                            </div>
                            <div class="meal-name">
                                <h3>${z.strMeal}</h3>
                                <button class="recipe-btn">Recipe</button>
                            </div>
                        </div>
                        `
                        let AddingPoint = document.querySelector('.food')
                        AddingPoint.innerHTML = holder
                        holder.querySelector('.recipe-btn').addEventListener('click',() => {
                            
                        })
                        
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
})

// function mealPageDisplay(z){
//     let holder += `
//     <div class="meal-item" id="${z.id}}">
//         <div class="meal-img">
//             <img src="${z.strMealThumb}" alt="food">        
//         </div>
//         <div class="meal-name">
//             <h3>${z.strMeal}</h3>
//             <button class="recipe-btn">Recipe</button>
//         </div>
//     </div>
//     `
//     let AddingPoint = document.querySelector('.food')
//     AddingPoint.innerHTML = holder
// }

