import frontend from '/modules/frontendModule.js';

function validate(num){
  let strNum = num.toString();
  let startIdx = 0;
  if (strNum.length % 2 === 1) startIdx++;
  let digits = strNum.split('').map(digit => Number(digit));
  digits = doubleDigits(digits, startIdx)
  let addedDigits = singleDigits(digits)
  let sum = addedDigits.reduce((total, current) => {
    return total + current;
  })

  return sum % 10 === 0;

  function singleDigits(arr) {
    return arr.map(num => {
      while (num > 9) num -= 9;
      return num;
    })
  }

  function doubleDigits(arrOfNums, startIndex) {
    for (let i = startIndex; i < arrOfNums.length; i = i + 2) arrOfNums[i] = arrOfNums[i] * 2;
    return arrOfNums;
  }
}

validate.newName = 'Validate Credit Card Number';
validate.kyu = 6;
validate.link = 'https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2';
validate.info = `In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.

Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.`;

frontend(validate, 2121) // ==> true
