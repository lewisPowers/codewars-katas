import frontend from '/modules/frontendModule.js';

// '(123) 456-7890' ==> is valid format

function isValidNumber(string) {
  if (string.length !== 14) return false;
  for (let index in string) {
    index = Number(index);
    if ( (index === 0 && string[index] !== '(') ||
    (index === 4 && string[index] !== ')') ||
    (index === 5 && string[index] !== ' ') ||
    (index === 9 && string[index] !== '-') ) return false;
    if (index !== 0 && index !== 4 && index !== 5 && index !== 9) {
      if (isNaN(Number(string[index]))) return false;
    }
  }
  return true;
}
isValidNumber.newName = 'Phone Number Format'
isValidNumber.inputWidth = 13;
isValidNumber.link = 'https://www.codewars.com/kata/525f47c79f2f25a4db000025';
isValidNumber.info = `returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 `;
isValidNumber.kyu = 6;
frontend(isValidNumber, '(123) 456-7890')
