import frontend from '/modules/frontendModule.js';

function validSolution(nineRows) {
  return rowsAreValid() && columnsAreValid() && quadrantsAreValid();
  function rowsAreValid() {
    for (let i = 0; i < nineRows.length; i++) if (!isCompleteSet(setFromRow(i))) return false;
    return true;
  }
  function columnsAreValid() {
    for (let i = 0; i < nineRows.length; i++) if (!isCompleteSet(setFromColumn(i))) return false;
    return true;
  }
  function quadrantsAreValid() {
    for (let i = 0, j = 0; i < nineRows.length; i = i + 3, j = j + 3) {
      if (!isCompleteSet(setFromQuadrant(i, j))) return false;
    }
    return true;
  }
  function setFromRow(rowIndex) {
    let rowSet = new Set();
    nineRows[rowIndex].forEach(val => {
      rowSet.add(val);
    })
    return rowSet;
  }
  function setFromColumn(colIndex) {
    let colSet = new Set();
    for (let i = 0; i < nineRows.length; i++) {
      colSet.add(nineRows[i][colIndex]);
    }
    return colSet;
  }
  function setFromQuadrant(rowIdx, colIdx) {
    let quadSet = new Set();
    for (let i = rowIdx, j = colIdx; i < (rowIdx + 3); i++) {
      quadSet.add(nineRows[i][j]);
      quadSet.add(nineRows[i][j + 1]);
      quadSet.add(nineRows[i][j + 2]);
    }
    return quadSet;
  }
  function isCompleteSet(set) {
    return set.size === 9 && !set.has(0);
  }
}

window.sodokuIsSolved = validSolution;


let valid = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]

let invalid = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]

validSolution.newName = 'Sudoku Solution Validator';
validSolution.link = 'https://www.codewars.com/kata/529bf0e9bdf7657179000008';
validSolution.kyu = 4;
validSolution.inputWidth = 20;
validSolution.info = `Checks board for valid solution. If valid, it will return true. Otherwise, false.`;
frontend(validSolution, valid)
