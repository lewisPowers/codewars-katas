import frontend from '/frontendModule.js';
//  check string for correct formatting of opening and closing parentheses, brackets, carets, etc.
function isValid(str) {
  let brackets = {
    opening: ['(', '[', '<', '{'],
    closing: [')', ']', '>', '}'],
    count: {
      '(': 0,
      '[': 0,
      '<': 0,
      '{': 0
    }
  };
  for (let char of str) {
    if (brackets.closing.includes(char)) {
      let relativeCountKey = brackets.opening[brackets.closing.indexOf(char)];
      brackets.count[relativeCountKey]--;
    }
    if (brackets.count[char] < 0) return false;
    if (brackets.opening.includes(char)) brackets.count[char]++;
  }
  let isValid = true
  Object.keys(brackets.count).forEach(symbol => {
    if (brackets.count[symbol] !== 0) isValid = false;
  })
  return isValid;
}
window.isValid = isValid;
isValid.newName = 'Opening/Closing Bracket Check';
isValid.inputWidth = 13;
frontend(isValid, '{[]{(<)}>}');

