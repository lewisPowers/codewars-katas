import frontend from '/modules/frontendModule.js';

function sortTwisted37(array) {
  let twisted = twistUntwist(array);
  twisted = numSort(twisted);
  return twistUntwist(twisted);

  function twistUntwist(arr) {
    return arr.map((num) => {
      let numStr = num.toString();
      if (numStr.includes('3') || numStr.includes('7')) {
        let twistedStr = numStr.split('').map(digit => {
          return digit === '7' ? '3' : digit === '3' ? '7' : digit;
        }).join('');
        return Number(twistedStr);
      } else {
        return num;
      }
    })
  }

  function numSort(arrOfNums) {
    return arrOfNums.sort((a,b) => Number(a) - Number(b) )
  }
}

// console.log(sortTwisted37([7, 6, 5, 4, 3, 2, 1]))
// console.log(sortTwisted37([ 4, 78, 48, -29 ]))


// sortTwisted37.changeMargin = '0';
sortTwisted37.newName = 'Sorting on planet Twisted-3-7';
sortTwisted37.kyu = 6;
sortTwisted37.link = 'https://www.codewars.com/kata/58068479c27998b11900056e';
sortTwisted37.info = `There is a planet... in a galaxy far far away. It is exactly like our planet, but it has one difference: The values of the digits 3 and 7 are twisted. Our 3 means 7 on the planet Twisted-3-7. And 7 means 3.

This method sorts an array the way it would be sorted on Twisted-3-7.`;

frontend(sortTwisted37, [12,13,14]) // ==>  [12,14,13]

//  sortTwisted37([1,2,3,4,5,6,7,8,9]) ==> [1,2,7,4,5,6,3,8,9]);