let sourcesArr = [
  '/sortByAge.js',
  '/centuryFromYear.js',
  '/isPalindrome.js',
  '/triangleNumber.js',
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
  '/stockList.js',
  '/sumAngles.js',
  '/printArray.js',
  '/predictAge.js',
  '/sumPairs.js',
  '/mixStrings.js',
  '/revrot.js',
  '/reorderSentence.js',
  '/sudokuIsSolved.js',
  '/encryptThis.js',
  '/checkCoupon.js',
  '/formatDuration.js',
  '/bestTravel.js',
  '/compareArrays.js',
  '/discountHoliday.js',
  '/repeater.js',
  '/evaporator.js',
  '/flattenAndSort.js',
  '/reverseWords.js',
  '/removeUrlAnchor.js',
  '/doubleChar.js',
  '/expressionsMatter.js',
  '/factorial.js',
  '/findCapitals.js',
  '/hexToDec.js',
  '/isIsogram.js',
  '/isSortedAndHow.js',
  '/isUpperCase.js',
  '/multipleOfIndex.js',
  '/printerError.js',
  '/removeExclamations.js',
  '/removeNExclamations.js',
  '/removeMinimum.js',
  '/removeZeros.js',
  '/rowWeights.js',
  '/sumOfSequence.js',
  '/xor.js',
  '/isIncluded.js',
  '/findMultiples.js',
  '/getChar.js',
  '/distinct.js',
  '/formMinValue.js',
  '/parseIntFromString.js',
  '/sumDigitsString.js',
  '/stripComments.js',
  '/population.js'
];

let parentPath = '/functions'

function createScript(source) {
  let scriptEl = document.createElement('script');
  scriptEl.type = 'module';
  scriptEl.src = source;
  return scriptEl;
}

export default function() {
  sourcesArr.map(str => parentPath + str).forEach(src => {
    let script = createScript(src);
    document.body.append(script);
  })
}