import frontend from '/frontendModule.js';

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
      if (isNaN(Number(string[index])))  return false;
    }
  }
  return true;
}
isValidNumber.newName = 'Phone Number Format'
frontend(isValidNumber, '(123) 456-7890')
