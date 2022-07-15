import frontend from '/modules/frontendModule.js';

function longest(s1, s2) {
  let arrOfChars = s1.concat(s2).split('');
  let charSet = new Set(arrOfChars);
  return Array.from(charSet).sort().join('');
}

longest.newName = 'Two to One';
longest.kyu = 7;
longest.link = 'https://www.codewars.com/kata/5656b6906de340bd1b0000ac';
longest.info = `Takes 2 strings s1 and s2 including only letters from a to z. Returns a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.`;

let test1= 'xyaabbbccccdefww';
let test2 = 'xxxxyyyyabklmopq'
frontend(longest, test1, test2) // ==> "abcdefklmopqwxy"