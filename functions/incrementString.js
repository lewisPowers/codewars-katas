import frontend from '/modules/frontendModule.js';

function incrementString (strng) {
  function characterIsNumber(index) {
    let check = strng[index]
    return !isNaN(check);
  }
  function splitNumber(str) {
    let result = [];
    let endIdx = str.length - 1;
    while (characterIsNumber(endIdx)) {
      result.unshift(str[endIdx]);
      endIdx--;
    }
    return [strng.split('').splice(0, endIdx + 1).join(''), result.join('')];
  }

  if (characterIsNumber(strng.length - 1)) {
    let strngArr = splitNumber(strng)
    let numStrLen = strngArr[1].length;
    strngArr[1] = (parseInt(strngArr[1]) + 1).toString();
    while (strngArr[1].length < numStrLen) {
      let split = strngArr[1].split('');
      split.unshift('0');
      strngArr[1] = split.join('');
    }
    return strngArr.join('');
  } else {
    return strng.concat('1');
  }
}

incrementString.newName = 'String Incrementer'
// incrementString.inputWidth = 4;
incrementString.link = 'https://www.codewars.com/kata/54a91a4883a7de5d7800009c';
incrementString.kyu = 5;
incrementString.info = `Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
`;

frontend(incrementString, "foobar000"); // ==> "foobar001"

// doTest("foobar000", "foobar001");
// doTest("foobar999", "foobar1000");
// doTest("foobar00999", "foobar01000");
// doTest("foo", "foo1");

