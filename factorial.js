import frontend from '/frontendModule.js';

// ONE LINE ITERATIVE OPTION
function f(n){
  return n < 1 || isNaN(n) || parseInt(n) !== n ? false : new Array(n).fill(0).map((num, i) => i + 1 ).reduce((a,c) => a + c );
};

f.newName = "Factorial of N";
frontend(f, 100);

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
