//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    const url = `https://foodish-api.herokuapp.com/api/images/pizza`
    
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
            
            document.querySelector('img').src = data.image
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

