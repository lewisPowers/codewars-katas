import frontend from '/modules/frontendModule.js';

function solve(string) {
  const consonantRuns = string.split(/[aeiou]/);
  const totals = consonantRuns.map(str => {
    let total = 0;
    for (let char of str) total += getValueFromCharCode(char);
    return total;
  })
  return Math.max(...totals);
  function getValueFromCharCode(character) {
    return ( character.charCodeAt(0) - 96 );
  }
};

solve.newName = 'Consonant Value';
solve.info = `Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"`;
solve.link = 'https://www.codewars.com/kata/59c633e7dcc4053512000073';
solve.kyu = 6;
// solve.changeMargin = 10;
frontend(solve, 'zodiacs') // ===> 26

 // solve('strength') ==> 57
