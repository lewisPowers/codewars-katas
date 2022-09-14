import frontend from '/modules/frontendModule.js';

function convertFrac(list){
  function commonDenominator() {
    let denominators = list.map( arrays => arrays[1] )
    let lcd;
    for (let i = 1; i < Infinity; i++) {
      if (denominators.every(denom => i % denom === 0)) {
        lcd = i;
        break;
      }
    }
    return lcd;
  }
  let lcd = commonDenominator(list);
  return list.reduce( (resultStr, currentArr, idx, arr) => {
    let mapped = [[currentArr[0] * (lcd / currentArr[1]), lcd]]
    let str = `(${mapped.join(',')})`
    return resultStr + str;
  }, '');
}

convertFrac.newName = 'Common Denominator'
convertFrac.info = `This function takes an array of numerator/denominator arrays, and returns those arrays converted into a string of their fractional conversions`;
convertFrac.link = 'https://www.codewars.com/kata/5a3dd29055519e23ec000074';
convertFrac.kyu = 5;

frontend(convertFrac, [ [1, 2], [1, 3], [1, 4] ])
// ==> "(6,12)(4,12)(3,12)"
