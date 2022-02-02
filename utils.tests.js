import { renderIngredient, renderMeal } from './utils.js';
const test = QUnit.test;

test('renderIngredient should return an <li></li>', (expect) => { 
    const expected = `<li>15 Grams of Salt</li>`;
    
    const actual = renderIngredient({ quantity: 15, measurement: 'Grams', ingredient: 'Salt' });

    expect.equal(actual.outerHTML, expected);
});

test('renderMeal should return an <li> with meal name and total meals', (expect) => {
    const expected = `<li>Cole --- 5 ingredients.</li>`;

    const actual = renderMeal({ mealName: 'Cole', totalIngredients: 5 });

    expect.equal(actual.outerHTML, expected);
});