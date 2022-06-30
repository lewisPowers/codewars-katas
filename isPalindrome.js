import frontend from '/modules/frontendModule.js';

function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}

isPalindrome.newName = 'Is it a Palindrome?';
isPalindrome.inputWidth = 11;
isPalindrome.info = 'Enter a word to check if it is a palindrome: the word reads the same when reversed.';
isPalindrome.link = 'https://www.codewars.com/kata/57a1fd2ce298a731b20006a4';
isPalindrome.kyu = 8;
frontend(isPalindrome, 'racecar');
