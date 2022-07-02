import frontend from '/modules/frontendModule.js';

function remove(str,n){
  let arr = str.split('');
  let times = n;
  return arr.filter(char => {
    if (char !== '!') return char;
    if (char === '!' && times > 0) {
      times--;
    } else if (char === '!' && times < 1) return char;
  }).join('')
}

remove.newName = 'Remove Extra Marks from the End';
remove.inputWidth = 9;
remove.kyu = 8;
remove.info = 'Remove n exclamation marks in the sentence from left to right.';
remove.link = 'https://www.codewars.com/kata/57faf7275c991027af000679';

frontend(remove, 'Wow!!!!', 2)

