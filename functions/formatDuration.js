import frontend from '/modules/frontendModule.js';

function formatDuration (seconds) {
  if (seconds === 0) return 'now';
  const MINUTE_IN_SECONDS = 60;
  const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
  const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;
  const YEAR_IN_SECONDS = DAY_IN_SECONDS * 365;

  let remainder = seconds;
  let interrimArr = [];
  let numOfComponent;
  let denoters = [
    {'year': YEAR_IN_SECONDS},
    {'day': DAY_IN_SECONDS},
    {'hour': HOUR_IN_SECONDS},
    {'minute': MINUTE_IN_SECONDS},
    {'second': 1}
  ];

  denoters.forEach(subsetObj => {
    let subsetKey = Object.keys(subsetObj)[0];
    let subsetVal = subsetObj[Object.keys(subsetObj)[0]];
    numOfComponent = Math.floor(remainder / subsetVal);
    if (numOfComponent > 0) {
      let subtractor = numOfComponent * subsetVal;
      remainder -= subtractor;
      interrimArr.push(createStringComponent(subsetKey, numOfComponent));
    }
  });

  return interrimArr.map((substr, i) => {
    return i === interrimArr.length - 1 ? substr :
      i === interrimArr.length - 2 ? `${substr} and ` :
      `${substr}, `;
  }).join('');

  function createStringComponent(componentStr, quotient) {
    if (quotient > 1) componentStr = pluralize(componentStr);
    return `${quotient} ${componentStr}`;
  }

  function pluralize(string) {
    return string.slice().concat('s');
  }
}


formatDuration.newName = 'Format Duration';
formatDuration.link = 'https://www.codewars.com/kata/52742f58faf5485cae000b9a';
formatDuration.kyu = 4;
formatDuration.info = 'Formats a duration, given as a number of seconds, in a human-friendly way.';
formatDuration.inputWidth = 6;
frontend(formatDuration, 3662); // ==> "1 hour, 1 minute and 2 seconds"

// formatDuration(3600), "1 hour"
// formatDuration(1), "1 second"