import frontend from '/modules/frontendModule.js';

function evaporator(ml, evap_per_day, threshold) {
  function oneDayEvap(vol, rate) {
    return vol - (vol * (rate * 0.01))
  }
  let days = 0;
  let thresholdAmount = ml * threshold * 0.01;
  let finalVolume = ml;
  while (finalVolume > thresholdAmount) {
    days++;
    finalVolume = oneDayEvap(finalVolume, evap_per_day)
  }
  return days;
}

evaporator.inputWidth = 3;
evaporator.link = 'https://www.codewars.com/kata/5506b230a11c0aeab3000c1f';
evaporator.kyu = 7;
evaporator.newName = 'Deodorant Evaporator';
evaporator.info = `This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.`;

frontend(evaporator, 10, 10, 5) // -> 29
