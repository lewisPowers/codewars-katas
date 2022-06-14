function diamond(n){
  if (n < 1 || n % 2 === 0) return null;
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
  } while (midLineStr.indexOf('*') !== midLineStr.lastIndexOf('*'))
  return diamondBuilderArray.map(str => {
    return str = `${str}\n`;
  }).join('');
}

console.log(diamond(5))
console.log(diamond(125))