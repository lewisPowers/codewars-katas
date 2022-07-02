import frontend from '/modules/frontendModule.js';

function derive(coef,exp) {
  return `${coef * exp}x^${exp - 1}`;
}

derive.newName = 'Take the Derivative';
derive.info = 'This function takes two numbers as parameters, the first number being the coefficient, and the second number being the exponent. This function will multiply the two numbers, and then subtract 1 from the exponent. Then, it will print out an expression (like 28x^7). "^1" will not be truncated when exponent = 2.';
derive.link = 'https://www.codewars.com/kata/5963c18ecb97be020b0000a2';
derive.inputWidth = 4;
derive.kyu = 8;
derive.changeMargin = '0';

frontend(derive, 7, 8);
