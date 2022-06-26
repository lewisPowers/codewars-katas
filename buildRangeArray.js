import frontend from '/modules/frontendModule.js';

// function between(a, b) {
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

function between(a, b) {
  return new Array(b - a + 1).fill(0).map((spot, i) => spot += (i + a) )
}

between.newName = 'Build Array Within Range';
between.inputWidth = 5;
frontend(between, 3, 20);
