let sourcesArr = [
  'sortByAge',
  'centuryFromYear',
  'isPalindrome',
  'triangleNumber',
  'addLength',
  'multiplicationTable',
  'boxFacts',
  'nextSquare',
  'arrayLimit',
  'alphabetWar',
  'buildRangeArray',
  'fixStringCase',
  'binaryToDecimal',
  'movieTicketSystem',
  'isValidPhoneNumber',
  'removeFirstLastII',
  'meeting',
  'checkAllBrackets',
  'buildDiamond',
  'checkExam',
  'predictAge',
  'sumOfMinimums',
  'sumAngles',
  'stringCleaning',
  'takeDerivative',
  'printArray',
  'removeExclamations',
  'sumPairs',
  'tenMinuteWalk',
  'uniqueNumber',
  'stringEndsWith',
  'myToString',
  'sumStrings',
  'sortAndStar',
  'fiveArrFunctions',
  'stockList',
  'sumAngles',
  'printArray',
  'predictAge',
  'sumPairs',
  'mixStrings',
  'revrot',
  'reorderSentence',
  'sudokuIsSolved',
  'encryptThis',
  'checkCoupon',
  'formatDuration',
  'bestTravel',
  'compareArrays',
  'discountHoliday',
  'repeater',
  'evaporator',
  'flattenAndSort',
  'reverseWords',
  'removeUrlAnchor',
  'doubleChar',
  'expressionsMatter',
  'factorial',
  'findCapitals',
  'hexToDec',
  'isIsogram',
  'isSortedAndHow',
  'isUpperCase',
  'multipleOfIndex',
  'printerError',
  'removeExclamations',
  'removeNExclamations',
  'removeMinimum',
  'removeZeros',
  'rowWeights',
  'sumOfSequence',
  'xor',
  'isIncluded',
  'findMultiples',
  'getChar',
  'distinct',
  'formMinValue',
  'parseIntFromString',
  'sumDigitsString',
  'stripComments',
  'roundToNext5',
  'population',
  'twotoOne',
  'grasshopper',
  'newFactorial',
  'sortTwisted',
  'findVowels',
  'maxProduct',
  'consecutiveStrings',
  'positionInAlphabet',
  'landPerimeter',
  'partList',
  'sayHello',
  'commonDenom',
  'reverseList',
  'buyACar',
  'simpleCalculator',
  'largestPair',
  'powerOfTwo',
  'tipCalculator',
  'priceMangoes',
  'consonantValue',
  'findNthDigit',
  'reverseStrings',
  'numbersOfLetters',
  'findAverage',
  'twoDecimalPlaces',
  'tribonacci',
  'xbonacci',
  'orderedCount',
  'divideConquer',
  'mathRound',
  'mathCeil',
  'mathFloor',
  'validateCC',
  'rot13',
  'productFib',
  'incrementString',
  'orderWeight',
  'urlShortener',
  'snail'
];

const parentPath = '/functions/';
const js = '.js'

function createScript(source) {
  let scriptEl = document.createElement('script');
  scriptEl.type = 'module';
  scriptEl.src = source;
  return scriptEl;
}

export default function() {
  sourcesArr.map(str => parentPath + str + js).forEach(src => {
    let script = createScript(src);
    document.body.append(script);
  })
}