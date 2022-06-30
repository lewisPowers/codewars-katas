import frontend from '/modules/frontendModule.js';

function century(year) {
  year = year.toString();
  let len = year.length - 2;
  let century = Number(year.slice(0, len));
  let years = Number(year.slice(len));
  return years > 0 ? century + 1 : century;
}

century.inputWidth = 6;
century.newName = 'Get Century From Year';
century.link = 'https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097'
century.info = 'Enter a year into the function and the number returned is the corresponding century.';
century.kyu = 8;
frontend(century, 2000)
