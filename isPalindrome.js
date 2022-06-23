import frontend from '/modules/frontendModule.js';

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}

isPalindrome.newName = 'Is it a Palindrome?';
isPalindrome.inputWidth = 11;
frontend(isPalindrome, 'racecar');