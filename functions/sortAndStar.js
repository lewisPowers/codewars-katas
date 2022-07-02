function twoSort(arrOfStrings) {
  let sorted = arrOfStrings.sort( (a,b) => {
    return a < b ? -1 : a > b ? 1 : 0;
  })
  return sorted[0].split('').map( (letter, i, arr) => {
    return i === arr.length - 1 ? letter : `${letter}***`;
  }).join('');
}
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
// console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))
