import frontend from '/modules/frontendModule.js';

function solve(str) {
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  for (let i in str) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 91) upperCaseCount++;
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) lowerCaseCount++;
  }
  return upperCaseCount > lowerCaseCount ? str.toUpperCase() : str.toLowerCase();
}
window.solve = solve;
solve.newName = 'Fix String Case';
solve.inputWidth = 11;
solve.link = 'https://www.codewars.com/kata/5b180e9fedaa564a7000009a';
solve.kyu = 7;
solve.info = 'Converts the input to either lowercase only or uppercase only based on: making fewest changes possible, and; if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.'
frontend(solve, 'CoDe');