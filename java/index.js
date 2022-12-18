
document.addEventListener('DOMContentLoaded', () => {
    // fetch(`https:www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    // })

    document.querySelector('.search-inputs-container').addEventListener('submit', (e) => {
        e.preventDefault()
        let inputs = e.target.querySelector('.search-bar').value
        fetch(`https:www.themealdb.com/api/json/v1/1/filter.php?i=${inputs}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data.meals)
            if (data.meals){
                data.meals.forEach(meal => {
                    console.log(meal)
                })
            }
        })
        

    })
})

function starterPageDisplay(z){
    let holder = document.createElement('div')
    holder.id = 'RemoveMe'
    holder.innerHTML = `
    <div class="meal-item" id="${z.id}}">
        <div class="meal-img">
            <img src="${z.strMeal}" alt="food">        
        </div>
        <div class="meal-name">
            <h3>${z.strMealThumb}</h3>
            <button class="recipe-btn">Recipe</button>
        </div>
    </div>
    `
    let AddingPoint = document.querySelector('.food')
    AddingPoint.appendChild(holder)
}

