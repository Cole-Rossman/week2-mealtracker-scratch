import { renderIngredient } from './utils.js';
const test = QUnit.test;

test('renderIngredient should return an <li></li>', (expect) => { 
    const expected = `<li>15 Grams of Salt</li>`;
    
    const actual = renderIngredient({ quantity: 15, measurement: 'Grams', ingredient: 'Salt' });

    expect.equal(actual.outerHTML, expected);
});