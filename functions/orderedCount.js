import frontend from '/modules/frontendModule.js';

function orderedCount(text) {
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    let character = text[i];
    if (arr.every(subArr => subArr[0] !== character )) {
      arr.push( [ character, occurences(character) ] );
    }
  }
  return arr;
  function occurences(targetChar) {
    return text.split('').filter(char => char === targetChar).length
  }
}

orderedCount.newName = 'Ordered Count of Characters';
orderedCount.kyu = 7;
orderedCount.link = 'https://www.codewars.com/kata/57a6633153ba33189e000074';
orderedCount.inputWidth = 11;
orderedCount.info = `Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).`;

frontend(orderedCount, "abracadabra") // ==>  [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]


// FORMAT FROM CODEWARS:
// const orderedCount = function (text) {
//   let arr = [];
//   for (let i = 0; i < text.length; i++) {
//     let character = text[i];
//     if (arr.every(subArr => subArr[0] !== character )) {
//       arr.push( [ character, occurences(character) ] );
//     }
//   }
//   return arr;
//   function occurences(targetChar) {
//     return text.split('').filter(char => char === targetChar).length
//   }
// }

