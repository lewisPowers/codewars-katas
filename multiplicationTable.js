import frontend from '/modules/frontendModule.js';

function multiplicationTable(size) {
  let table = [];
  let row = 1;
  while (row <= size) {
    table.push(buildRow(row))
    row++;
  }
  return table;
  function buildRow(multiple) {
    let arr = [];
    for (let i = 1; i <= size; i++) {
      arr.push(i * multiple);
    }
    console.log(arr)
    return arr;
  }
}

multiplicationTable.newName = 'Multiplication Table';
multiplicationTable.inputWidth = 3;
frontend(multiplicationTable, 5)
