import frontend from '/modules/frontendModule.js';

function diamond(n){
  if (n < 1 || n % 2 === 0) return null;
  if (n === 1) return '*';
  let midLineStr = '';
  while (n > 0) {
    midLineStr += '*';
    n--;
  }
  let diamondBuilderArray = [ midLineStr.slice() ];
  do {
    let starArr = midLineStr.split('');
    starArr.length = starArr.length - 2;
    starArr.unshift(' ');
    midLineStr = starArr.join('');
    diamondBuilderArray.push(midLineStr);
    diamondBuilderArray.unshift(midLineStr)
  } while (midLineStr.indexOf('*') !== midLineStr.lastIndexOf('*'));
  let result = diamondBuilderArray.map(str => {
    return str = `${str}\n`;
  }).join('');
  return result;
}

diamond.log = true;
diamond.newName = 'Give Me a Diamond';
diamond.inputWidth = 3;
diamond.info = 'Returns a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Open console to see proper output.';
diamond.kyu = 6;
diamond.link = 'https://www.codewars.com/kata/5503013e34137eeeaa001648';
frontend(diamond, 5);
