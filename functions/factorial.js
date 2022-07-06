import frontend from '/modules/frontendModule.js';

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

factorial.newName = 'Recursion #1 - Factorial';
factorial.link = 'https://www.codewars.com/kata/5694cb0ec554589633000036';
factorial.kyu = 7;
factorial.inputWidth = 4;
factorial.info = `Factorial function that receives n and returns n!, using recursion.`;

frontend(factorial, 3); // == 6
