// import functions and grab DOM elements
import { renderIngredient } from './utils.js';

const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-ul');
const mealsList = document.getElementById('meals-ul');

const removeButton = document.getElementById('remove');
const saveButton = document.getElementById('save-meal');

let ingredients = [];


function renderIngredients() {
    ingredientList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredient(item);
        ingredientList.appendChild(li);
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // look at demo for rest of steps look in read me for link
});

renderIngredients();


// let state


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
