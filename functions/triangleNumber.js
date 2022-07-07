import frontend from '/modules/frontendModule.js';

// SHORT ONE LINE ITERATIVE OPTION
function factorialAdd(n){
  return n < 1 || isNaN(n) || parseInt(n) !== n ? false : n * (n + 1) / 2;
};

factorialAdd.newName = "Nth Triangle Number";
factorialAdd.inputWidth = 5;
factorialAdd.info = 'Factorial addition style. Enter a number and the function will add all integers from 1 to n.';
factorialAdd.link = '';
frontend(factorialAdd, 100);

// LONG ONE LINE ITERATIVE OPTION
// function factorial(n){
//   return n < 1 || isNaN(n) || parseInt(n) !== n ? false : new Array(n).fill(0).map((num, i) => i + 1 ).reduce((a,c) => a + c );
// };

//.  ITERATIVE OPTION A:
// function f(n){
//   if (isNaN(n) || n < 1 || parseInt(n) !== n) return false;
//   let arr = [];
//   while (n > 0) {
//     arr.push(n);
//     n--;
//   }
//   return arr.reduce((a,c) => a + c, 0)
// };

  //   RECURSIVE OPTION FIRST: CALL STACK EXCEEDED FOR LARGE NUMBERS
// function f(n){
//   return n < 1 || isNaN(n) || parseInt(n) !== n ? false : n === 1 ? n : n + f(n - 1);
// };
