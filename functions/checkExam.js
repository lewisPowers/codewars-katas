import frontend from '/modules/frontendModule.js';

function checkExam(array1, array2) {
  let score = array2.reduce((acc, cur, i) => {
    if (cur === array1[i]) return acc + 4;
    if (cur === '') return acc;
    return acc - 1;
  }, 0);
  return score < 0 ? 0 : score;
}

checkExam.newName = 'Score the Exam'
checkExam.info = "The first input array is the key to the correct answers to an exam. The second one contains a student's submitted answers. Returns the score based on parameters stipulated within the function.";
checkExam.link = 'https://www.codewars.com/kata/5a3dd29055519e23ec000074';
checkExam.inputWidth = 14;
checkExam.kyu = 7;

frontend(checkExam, ["a", "a", "b", "b"], ["a", "c", "b", "d"])