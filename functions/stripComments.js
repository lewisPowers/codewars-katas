import frontend from '/modules/frontendModule.js';

function solution(inputStr, markersArr) {
  let strArr = inputStr.split('\n').map(words => {
    let mark;
    if (phraseIncludesMarker(words)) return words.split(mark)[0].trim();
    return words;

    function phraseIncludesMarker(phrase) {
      for (let marker of markersArr) {
        if (phrase.includes(marker)) {
          mark = marker;
          return true;
        }
      }
      return false;
    }

  });
  return strArr.join('\n');
};

window.stripComments = solution;
solution.log = true;
solution.kyu = 4;
solution.link = 'https://www.codewars.com/kata/51c8e37cee245da6b40000bd';
solution.inputWidth = 14;
solution.newName = 'Strip Comments';
solution.info = `This function strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line will also be stripped out.`;

frontend(solution, "apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"])
// ==> "apples, plums\npears\noranges"))
