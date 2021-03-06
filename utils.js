export function renderIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.quantity} ${item.measurement} of ${item.ingredient}`;
    return li;
}

export function renderMeal(meal) {
    const li = document.createElement('li');
    li.textContent = `${meal.mealName} --- ${meal.totalIngredients} ingredients.`;
    return li;
}