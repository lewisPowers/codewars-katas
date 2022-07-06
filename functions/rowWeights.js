import frontend from '/modules/frontendModule.js';

function rowWeights(array){
  let reduceArr = function(array) {
    return array.reduce( (a,c) => a + c, 0 );
  }
  let team1 = [];
  let team2 = [];
  array.forEach( (num, i) => {
    if (i % 2 === 0) team1.push(num);
    if (i % 2 === 1) team2.push(num);
  })
  return [reduceArr(team1), reduceArr(team2)];
}

rowWeights.link = 'https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9';
rowWeights.kyu = 7;
rowWeights.inputWidth = 16;
rowWeights.newName = 'Row Weights';
rowWeights.info = `Given an array of positive integers (the weights of the people), return a new array of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.`

frontend(rowWeights, [13, 27, 49])
// rowWeights([13, 27, 49])  ==>  return (62, 27)