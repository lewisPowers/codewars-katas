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
frontend(century, 2000)
