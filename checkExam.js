function checkExam(array1, array2) {
  let score = array2.reduce((acc, cur, i) => {
    if (cur === array1[i]) return acc + 4;
    if (cur === '') return acc;
    return acc - 1;
  }, 0);
  return score < 0 ? 0 : score;
}