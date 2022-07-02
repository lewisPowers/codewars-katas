function remove(str,n){
  let arr = str.split('');
  let times = n;
  return arr.filter(char => {
    if (char !== '!') return char;
    if (char === '!' && times > 0) {
      times--;
    } else if (char === '!' && times < 1) return char;
  }).join('')
  // let res = str;
  // let i = 0;
  // while (times > 0 && i < str.length) {
  //   if (str[i] === '!') {
  //     res = res.replace('!', '')
  //     times--;
  //   }
  //   i++;
  // }
  // return res;
}