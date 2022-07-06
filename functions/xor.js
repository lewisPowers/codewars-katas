import frontend from '/modules/frontendModule.js';

function xor(a, b) {
  return !(a && b) && (a && b);
  // return (!a && !b) || (a && b) ? false : true;
}

xor.newName = 'Exclusive "or" (xor) Logical Operator';
xor.link = 'https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c';
xor.kyu = 8;
xor.inputWidth = 6;
xor.info = 'Evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise.';

frontend(xor, false, true)
