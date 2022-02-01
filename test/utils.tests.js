import { renderIngredients } from '../utils.js';
const test = QUnit.test;

test('renderIngredients should return an <li></li>', (expect) => { 
    const expected = `<li>15 Grams of Salt</li>`;
    
    const actual = renderIngredients({ quantity: 15, measurement: 'Grams', ingredient: 'Salt' });

    expect.equal(actual.outerHTML, expected);
});