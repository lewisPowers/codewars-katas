function sumStr(a,b) {
  return (toNum(a) + toNum(b)).toString();
  function toNum(str) {
    return str === '' ? 0 : Number(str);
  }
}