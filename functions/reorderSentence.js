import frontend from '/modules/frontendModule.js';

function order(words){
  function findNum(str) {
    for (let char of str) {
      if (!isNaN(char)) return Number(char) - 1;
    }
    return -1;
  }
  let array = [];
  array.length = words.split(' ').length;
  words.split(' ').forEach(word => {
    array[findNum(word)] = word;
  })
  return array.join(' ');
}

order.link = 'https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript';
order.kyu = 6;
order.inputWidth = 11;
order.newName = 'Your Order, Please';
order.info = `sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.`;

frontend(order, "is2 Thi1s T4est 3a")
