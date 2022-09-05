import frontend from '/modules/frontendModule.js';

function partlist(arr) {
  let resultArray = [];
  for ( let i = 1; i < arr.length; i++ ) {
    let copied = arr.slice();
    let spliced = copied.splice(0, i)
    resultArray.push( [spliced.join(' '), copied.join(' ')] )
  }

  return resultArray;
}

partlist.newName = 'Parts of a List';
partlist.link = 'https://www.codewars.com/kata/56f3a1e899b386da78000732';
partlist.info = `This function gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.`

partlist.kyu = 7;
frontend(partlist, ["I", "wish", "I", "hadn't", "come"]);

/* ==> [
  ["I", "wish I hadn't come"],
  ["I wish", "I hadn't come"],
  ["I wish I", "hadn't come"],
  ["I wish I hadn't", "come"]
]
*/
