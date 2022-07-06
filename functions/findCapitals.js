import frontend from '/modules/frontendModule.js';

function capitals(word) {
  let arr = [];
  for (let i in word) {
    if (word[i].charCodeAt(0) >= 65 &&
      word[i].charCodeAt(0) <= 90) arr.push(Number(i))
  }
  return arr;
};

capitals.link = 'https://www.codewars.com/kata/539ee3b6757843632d00026b';
capitals.kyu = 7;
capitals.newName = 'Find the Capitals';
capitals.inputWidth = 14;
capitals.info = `Function that takes a single string (word) as argument. The function returns an ordered list containing the indexes of all capital letters in the string.`

frontend(capitals, 'CodEWaRs') // ==> [0,3,4,6]
