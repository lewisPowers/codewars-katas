function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [...arguments];
  let squaredAndAdded = arr.map(age => age * age ).reduce((a, c) => a + c , 0);
  return Math.floor(Math.sqrt(squaredAndAdded) / 2);
}

// Take a list of ages when each of your great-grandparent died.
  // create array of ages
// Multiply each number by itself.
  // map array of ages
// Add them all together.
  // reduce
// Take the square root of the result.

// Divide by two.