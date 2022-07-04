import frontend from '/modules/frontendModule.js';

function printArray(array){
  return array.join(', ');
}

printArray.info = `Input: Array of elements

["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

"h,o,l,a"`;
printArray.link = 'https://www.codewars.com/kata/56e2f59fb2ed128081001328';
printArray.newName = 'Printing Array Elements with Comma Delimiters';
printArray.kyu = 8;
printArray.inputWidth = 10;

frontend(printArray, ['one', true, '3', 4])