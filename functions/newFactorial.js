import frontend from '/modules/frontendModule.js'

function factorial(n){
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

factorial.newName = 'Factorial';
factorial.kyu = 7;
factorial.link = 'https://www.codewars.com/kata/57a049e253ba33ac5e000212';
factorial.info = `Your task is to write function factorial.`

// https://en.wikipedia.org/wiki/Factorial;

frontend(factorial, 4) // ==> 24