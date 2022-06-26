import frontend from '/modules/frontendModule.js';

function alphabetWar(fight) {
  let leftScores = ['w', 'p', 'b', 's'];
  let rightScores = ['m', 'q', 'd', 'z'];
  let leftPoints = 0;
  let rightPoints = 0;

  for (let char of fight) {
    if ( leftScores.includes(char) ) leftPoints++;
    if ( rightScores.includes(char) ) rightPoints++;
  }

  return leftPoints > rightPoints ? "Left side wins!" : rightPoints > leftPoints ? "Right side wins!" : "Let's fight again!";
}

window.alphabetWar = alphabetWar;
alphabetWar.newName = 'Alphabet War';
alphabetWar.inputWidth = 9;
frontend(alphabetWar, "zdqmwpbs");


// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.