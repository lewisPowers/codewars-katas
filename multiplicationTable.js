multiplicationTable = function(size) {
  let table = []
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
    return arr;
  }
}
