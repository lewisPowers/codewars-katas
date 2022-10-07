import frontend from '/modules/frontendModule.js';

function isPowerOfTwo(n){
  if (n === 0) return false;
  if (n === 1) return true;
  let power;
  for (let i = 1; i < n; i++) {
    power = Math.pow(n, (1 / i));
    if (power === 2) return true;
    if (power < 2) return false;
  }
}

isPowerOfTwo.changeMargin = '0';
isPowerOfTwo.newName = 'Power of Two';
isPowerOfTwo.link = 'https://www.codewars.com/kata/534d0a229345375d520006a0';
isPowerOfTwo.kyu = 7;
isPowerOfTwo.info = `Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

"a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent."`;

frontend(isPowerOfTwo, 4096); // === true




