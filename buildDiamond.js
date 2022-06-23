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
  return diamondBuilderArray.map(str => {
    return str = `${str}\n`;
  }).join('');
}

diamond.newName = 'Build a Diamond';
diamond.inputWidth = 3;
frontend(diamond, 5);
console.log(diamond(5));
