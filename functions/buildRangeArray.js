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
between.info = "Input numbers a and b to get a list of all numbers between and including a, b."
between.link = 'https://www.codewars.com/kata/55ecd718f46fba02e5000029';
between.kyu = 8;
frontend(between, 3, 20);
