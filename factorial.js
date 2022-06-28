import frontend from './modules/frontendModule.js';

// ONE LINE ITERATIVE OPTION
function factorial(n){
  return n < 1 || isNaN(n) || parseInt(n) !== n ? false : new Array(n).fill(0).map((num, i) => i + 1 ).reduce((a,c) => a + c );
};

factorial.newName = "Factorial of N";
factorial.inputWidth = 5;
factorial.info = 'Factorial addition style. Enter a number and the function will add all integers from 1 to n.';
factorial.link = '';
frontend(factorial, 100);

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
