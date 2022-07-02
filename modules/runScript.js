let sourcesArr = [
  '/sortByAge.js',
  '/centuryFromYear.js',
  '/isPalindrome.js',
  '/factorial.js',
  '/addLength.js',
  '/multiplicationTable.js',
  '/boxFacts.js',
  '/nextSquare.js',
  '/arrayLimit.js',
  '/alphabetWar.js',
  '/buildRangeArray.js',
  '/fixStringCase.js',
  '/binaryToDecimal.js',
  '/movieTicketSystem.js',
  '/isValidPhoneNumber.js',
  '/removeFirstLastII.js',
  '/meeting.js',
  '/checkAllBrackets.js',
  '/buildDiamond.js',
  '/checkExam.js',
  '',
  '/predictAge.js',
  '/sumOfMinimums.js',
  '/sumAngles.js',
  '/stringCleaning.js',
  '/takeDerivative.js',
  '/printArray.js',
  '/removeExclamations.js',
  '/sumPairs.js',
  '/tenMinuteWalk.js',
  '/uniqueNumber.js',
  '/stringEndsWith.js',
  '/myToString.js',
  '/sumStrings.js',
  '/sortAndStar.js',
  '/fiveArrFunctions.js',
  '/stockList.js'
];

let parentPath = '/functions'

function appendScript(source) {
  let scriptEl = document.createElement('script');
  scriptEl.type = 'module';
  scriptEl.src = source;
  return scriptEl;
}

export default function() {
  sourcesArr.map(str => parentPath + str).forEach(src => {
    let script = appendScript(src);
    document.body.append(script);
  })
}