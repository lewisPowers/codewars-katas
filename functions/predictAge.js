import frontend from '/modules/frontendModule.js';

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [...arguments];
  let squaredAndAdded = arr.map(age => age * age ).reduce((a, c) => a + c , 0);
  return Math.floor(Math.sqrt(squaredAndAdded) / 2);
}

predictAge.newName = 'Predict your age!';
predictAge.link = 'https://www.codewars.com/kata/5aff237c578a14752d0035ae';
predictAge.kyu = 7;
predictAge.inputWidth = 3;
predictAge.info = `My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

Take a list of ages when each of your great-grandparent died.
Multiply each number by itself.
Add them all together.
Take the square root of the result.
Divide by two.`;

frontend(predictAge, 65, 60, 75, 55, 60, 63, 64, 45) // === 86
