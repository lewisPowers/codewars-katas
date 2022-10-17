import frontend from '/modules/frontendModule.js';

// Codewars solution
// String.prototype.reverse = function() {
//   let result = '';
//   for ( let i = this.length - 1; i >= 0; i-- ) result += this[i];
//   return result;
// }

// Application implementation
function reverse(string) {
  let result = '';
  for ( let i = string.length - 1; i >= 0; i-- ) result += string[i];
  return result;
}

reverse.newName = 'esreveR gnirtS';
reverse.info = "Create a function called reverse for the String prototype that will allow the following functionality:";
reverse.link = 'https://www.codewars.com/kata/52b74e0936d582d9210005ff';
reverse.inputWidth;
reverse.kyu = 6;
// String.prototype.reverse.changeMargin = '0';
let string = 'reverse me'
frontend(reverse, string)