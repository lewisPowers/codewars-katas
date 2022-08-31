import frontend from '/modules/frontendModule.js';

function adjacentElementsProduct(array) {
  let productArray = [];
  for (let i = 0; i < array.length; i++) productArray.push(array[i] * array[i + 1]);
  return productArray.reduce( (finalValue, checkValue) => {
    if (checkValue > finalValue || finalValue === null) finalValue = checkValue;
    return finalValue;
  }, null);
}

adjacentElementsProduct.newName = 'Maximum Product';
adjacentElementsProduct.link = 'https://www.codewars.com/kata/5a4138acf28b82aa43000117';
adjacentElementsProduct.info = `Returns the maximum product from multiplying numbers in the array with their neighbor adjacent `

adjacentElementsProduct.kyu = 7;
frontend(adjacentElementsProduct, [1, 2, 3]);