export function renderIngredient(item) {
    const li = document.createElement('li');
    li.textContent = `${item.quantity} ${item.measurement} of ${item.ingredient}`;
    return li;
}