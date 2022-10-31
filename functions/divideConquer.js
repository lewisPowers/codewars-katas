import frontend from '/modules/frontendModule.js';

function divCon(arr){
  let stringNums = filterNums(true)
  let numNums = filterNums();

  return sum(numNums) - sum(stringNums)

  function filterNums(getStrings) {
    if (getStrings) return arr.filter(num => typeof num === 'string');
    return arr.filter(num => typeof num === 'number')
  }
  function sum(arr) {
    return arr.reduce((total, current) => {
      if (typeof current !== 'number') current = Number(current);
      return total + current;
    }, 0)
  }
}

divCon.kyu = 7;
divCon.link = 'https://www.codewars.com/kata/57eaec5608fed543d6000021';
// divCon.inputWidth = 20;
divCon.newName = 'Divide and Conquer';
divCon.info = `Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

Return as a number.`;

frontend(divCon, [9, 3, '7', '3']) // ==> 2




