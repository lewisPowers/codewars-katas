import frontend from '/modules/frontendModule.js';

function solution(str, ending){
  let start = str.length - ending.length;
  return str.slice(start) === ending;
}

solution.newName = 'String Ends With?';
solution.info = 'It returns true if the first argument(string) passed in ends with the 2nd argument (also a string).';
solution.inputWidth = 7;
solution.kyu = 7;
solution.link = 'https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d';
frontend(solution, 'abcd', 'bcd')
