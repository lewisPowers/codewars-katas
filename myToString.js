Array.prototype.toString = function() {
  if (this.length < 1) return '[]';
  return this.reduce((accStr, cur, i)=> {
    if (Array.isArray(cur)) accStr = accStr + cur.toString();
    if (typeof cur === 'boolean' || typeof cur === 'number') accStr = accStr + cur;
    if (typeof cur === 'string') accStr = accStr + `'${cur}'`;
    if (i === this.length - 1) return accStr + ']'
    return accStr + ',';
  }, '[')
}
console.log([1,2,3].toMyString())
console.log(["one",2,3].toMyString())
console.log(["one",true,[3,4],5].toMyString())