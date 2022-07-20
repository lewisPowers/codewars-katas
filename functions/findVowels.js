import frontend from '/modules/frontendModule.js';

function vowelIndices(word) {
  let vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U', 'y', 'Y'];

  return word.split('').map((char, i) => {
    return vowels.includes(char) ? i + 1 : undefined;
  }).filter( el => el !== undefined );
}

vowelIndices.kyu = 7;
vowelIndices.newName = 'Find the Vowels';
vowelIndices.link = 'https://www.codewars.com/kata/5680781b6b7c2be860000036';
vowelIndices.info = `We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].`;

frontend(vowelIndices, "apple") // ==> [1,5]