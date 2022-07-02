import frontend from '/modules/frontendModule.js';

function multiplicationTable(size) {
  let table = [];
  let row = 1;
  while (row <= size) {
    table.push(buildRow(row));
    row++;
  }
  return table;
  function buildRow(multiple) {
    let arr = [];
    for (let i = 1; i <= size; i++) {
      arr.push(i * multiple);
    }
    return arr;
  }
}

multiplicationTable.log = true;
multiplicationTable.newName = 'Multiplication Table';
multiplicationTable.inputWidth = 3;
multiplicationTable.info = "Create NxN multiplication table, of size provided in parameter.";
multiplicationTable.link = 'https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08';
multiplicationTable.kyu = 6;
frontend(multiplicationTable, 5)
