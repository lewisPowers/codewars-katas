import frontend from '/modules/frontendModule.js';

function repeater(string, n, res = ''){
  if (n < 1) return res;
  res += string;
  return repeater(string, n - 1, res)
}

repeater.link = 'https://www.codewars.com/kata/585a1a227cb58d8d740001c3';
repeater.kyu = 7;
repeater.newName = 'Thinkful - String Drills: Repeater';
repeater.inputWidth = 4;
repeater.info = `Function takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.`

frontend(repeater, 'a', 5);
