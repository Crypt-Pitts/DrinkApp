//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getFetch)
const input = document.querySelector('input')

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); // prevent default behavior
    getFetch(); // submit the form
    
  }
});


function getFetch(){

  const choice = document.querySelector('input').value
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+choice



  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.drinks)
        document.querySelector('input').value = ''
        document.querySelector('h2').innerText = data.drinks[0].strDrink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb
        document.querySelector('h3').innerText = data.drinks[0].strInstructions

      })
      .catch(err => {
          console.log(`error ${err}`)
                });
}