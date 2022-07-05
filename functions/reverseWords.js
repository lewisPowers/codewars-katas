import frontend from '/modules/frontendModule.js';

function reverse(string){
  return string.split('').reverse().join('');
}

reverse.newName = 'Reversed Strings';
reverse.link = 'https://www.codewars.com/kata/5168bb5dfe9a00b126000018';
reverse.kyu = 8;
reverse.inputWidth = 9;
reverse.info = 'Function reverses the string passed into it.';

frontend(reverse, 'world') //  =>  'dlrow'
