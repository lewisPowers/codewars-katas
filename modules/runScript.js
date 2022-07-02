// build a script tag that will be appended to body
//   - src attr
//   - type attr = module

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
  '/buildDiamond.js'
];

function appendScript(source) {
  let scriptEl = document.createElement('script');
  scriptEl.type = 'module';
  scriptEl.src = source;
  return scriptEl;
}

function allScripts() {
  sourcesArr.forEach( (src, i) => {
    let script = appendScript(src);
    script.myIndex = i;
    // console.log(script, script.myIndex);
    document.body.append(script);
  })
}

allScripts()