import frontend from '/modules/frontendModule.js';

function remove (str) {
  while (str[str.length - 1] === '!') str = str.slice(0, str.length - 1);
  return str;
}

remove.newName = 'Exclamation marks series #2';
remove.link = 'https://www.codewars.com/kata/57faece99610ced690000165';
remove.inputWidth = 7
remove.kyu = 8;
remove.info = `Removes all exclamation marks from the end of sentence.`;
frontend(remove, 'Hi! Hi!! Hi!!!!')

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"