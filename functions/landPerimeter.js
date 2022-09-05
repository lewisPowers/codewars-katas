import frontend from '/modules/frontendModule.js';

function landPerimeter(arr) {
  let perimeter = 0;
  arr.forEach( (row, index) => {
    for (let char in row) {
      if (row[char] === 'X') {
        perimeter += addToPerimeter(row, index, Number(char), perimeter)
      }
    }

  })
  return `Total land perimeter: ${perimeter}`
  function addToPerimeter(landRow, rowIdx, position, totalPerimeter) {
    let basePerimeter = 4;
    if (arr[rowIdx - 1] !== undefined && arr[rowIdx - 1][position] === 'X') basePerimeter--;
    if (arr[rowIdx + 1] !== undefined && arr[rowIdx + 1][position] === 'X') basePerimeter--;
    if (position - 1 >= 0 && arr[rowIdx][position - 1] === 'X') basePerimeter--;
    if (position + 1 < arr[rowIdx].length && arr[rowIdx][position + 1] === 'X') basePerimeter--;
    return basePerimeter;
  }
}

landPerimeter.newName = 'Land Perimeter!';
landPerimeter.link = 'https://www.codewars.com/kata/5839c48f0cf94640a20001d3';
landPerimeter.kyu = 5;
landPerimeter.info = `Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1piece of land.`;

frontend(landPerimeter, ["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]);
// ==> "Total land perimeter: 60"

landPerimeter(['XOOXO',
  'XOOXO',
  'OOOXO',
  'XXOXO',
  'OXOOO'] )