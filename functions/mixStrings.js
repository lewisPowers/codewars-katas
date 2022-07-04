import frontend from '/modules/frontendModule.js';

// count characters and compare between strings; return strange string
function mix(s1, s2) {
  let repeaters = [];
  let result = [];
  let iterate = function(str) {
    let name = str == s1 ? '1' : '2';
    let letters = {};
    let isLowerCase = function(char) {
      let regex = /[a-z]/g;
      return regex.test(char);
    }
    let counter = function(char) {
      letters[char] ? letters[char]++ : letters[char] = 1;
    }
    for (let char of str) {
      if (isLowerCase(char)) {
        counter(char);
      }
    }
    for (let letter in letters) {
      if (letters[letter] < 2) delete letters[letter]
    }
    repeaters.push({
      [name]: letters
    })
    return {
      [name]: letters
    }
  }

  let buildRepeatStr = function(char, count) {
    let res = '';
    while (count > 0) {
      res += char;
      count--;
    }
    return res;
  }

  let collections = Object.assign(iterate(s1), iterate(s2));

  for (let letter in collections[1]) {
    if (collections[1][letter] && collections[2][letter]) {
      if (collections[1][letter] === collections[2][letter]) {
        result.push(`=:${buildRepeatStr(letter, collections[1][letter])}`);
      } else if (collections[1][letter] > collections[2][letter]) {
        result.push(`1:${buildRepeatStr(letter, collections[1][letter])}`);
      } else {
        result.push(`2:${buildRepeatStr(letter, collections[2][letter])}`);
      }
      delete collections[2][letter];
      delete collections[1][letter];
    } else {
      result.push(`1:${buildRepeatStr(letter, collections[1][letter])}`);
      delete collections[1][letter];
    }
  }

  for (let letter in collections[2]) {
    result.push(`2:${buildRepeatStr(letter, collections[2][letter])}`);
  }

  return result.sort((a, b)=>{
    if (a.length > b.length) return -1;
    if (a.length < b.length) return 1;
    if (a.length === b.length) {
      if (a.codePointAt([0]) === b.codePointAt([0])) {
        if (a.codePointAt([2]) < b.codePointAt([2])) return -1;
        if (a.codePointAt([2]) > b.codePointAt([2])) return 1;
      }
      if (a.codePointAt([0]) < b.codePointAt([0])) return -1;
      if (a.codePointAt([0]) > b.codePointAt([0])) return 1;
    }
  }).join('/');
}

mix.info = `Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters (a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); the different groups will be separated by '/'.`;

mix.link = 'https://www.codewars.com/kata/5629db57620258aa9d000014/train/javascript';
mix.kyu = 4;
mix.inputWidth = 12;
mix.newName = 'Strings Mix';

frontend(mix, "Are they here", "yes, they are here")