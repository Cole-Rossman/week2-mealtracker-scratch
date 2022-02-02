// import functions and grab DOM elements
import { renderIngredient, renderMeal } from './utils.js';

const form = document.getElementById('add-ingredient');
const ingredientList = document.getElementById('ingredient-ul');
const mealsList = document.getElementById('meals-ul');
const saveMeal = document.getElementById('save');

const removeButton = document.getElementById('remove');

let ingredients = [];
let meals = [];


function renderIngredients() {
    ingredientList.textContent = '';
    for (let item of ingredients) {
        const li = renderIngredient(item);
        ingredientList.appendChild(li);
    }

}

function renderMeals() {
    mealsList.textContent = '';
    for (let meal of meals) {
        const li = renderMeal(meal);
        mealsList.appendChild(li);
    }
}

form.addEventListener('submit', (e) => {
//    this will prevent the 1996 behavior
    e.preventDefault();
    // use built in dom class called formData to get the info out of the form
    const formData = new FormData(form);
    // to get info out of the form use method .get(), which takes in whatever the name property is in the html
    const inputs = {
        ingredient: formData.get('ingredient'),
        quantity: Number(formData.get('quantity')),
        measurement: formData.get('measurement'), 
    };
    ingredients.push(inputs);
    renderIngredients();
    form.reset();
});

removeButton.addEventListener('click', () => {
    // remove last element from ingredients state
    ingredients.pop();
    // re-render list
    renderIngredients();
});

saveMeal.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(saveMeal);

    const results = {
        mealName: formData.get('meal-name'),
        totalIngredients: ingredients.length,
    };
    meals.push(results);
    renderMeals();
    saveMeal.reset();
});



// let state


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
