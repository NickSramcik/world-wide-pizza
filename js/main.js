//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const input = document.querySelector('input').value.replaceAll(' ', '+')
    const url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${input}`
    
    console.log(`Input is ${input}.`)
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            
            const ingredients = [data.drinks[0].strIngredient1,
                                 data.drinks[0].strIngredient2,
                                 data.drinks[0].strIngredient3,
                                 data.drinks[0].strIngredient4,
                                 data.drinks[0].strIngredient5,
                                 data.drinks[0].strIngredient6,
                                 data.drinks[0].strIngredient7,
                                 data.drinks[0].strIngredient8]

            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
            document.querySelector('.drinkIngredients').innerHTML = '<h4>Ingredients</h4>'
            
            ingredients.forEach(a => {
                if (a) {
                    document.querySelector('.drinkIngredients').innerHTML += `<span>${a}</span>`
                }
            })
            
            document.querySelector('.drinkIngredients').innerHTML += ing1
                                                                  
            
            console.log(data.drinks[0].strIngredient1)
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

