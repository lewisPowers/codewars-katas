import frontend from '/modules/frontendModule.js';

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let percent = percentLossByMonth * .01;
  let totalSaved = 0;
  let oldCarValue = startPriceOld;
  let newCarValue = startPriceNew;

  for (let i = 0; i < 99000; i++) {
    if ( (totalSaved + oldCarValue) >= newCarValue) {
      let leftover = totalSaved + oldCarValue - newCarValue;
      return [i, Math.round(leftover)];
    } else {
      oldCarValue = decreasedValue(oldCarValue, percent);
      totalSaved += savingperMonth;
      newCarValue = decreasedValue(newCarValue, percent);
      if (i % 2 === 0) percent += .005;
    }
  }
  function decreasedValue(value, percentage) {
    let less = value * percentage;
    return (value - less);
  }
}

nbMonths.newName = 'Buying a Car';
nbMonths.info = `Let us begin with an example:

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?`
nbMonths.link = 'https://www.codewars.com/kata/554a44516729e4d80b000012';
nbMonths.kyu = 6;
frontend(nbMonths, 2000, 8000, 1000, 1.5)
// frontend(nbMonths, 12000, 8000, 1000, 1.5)
// ===>  [6, 766]

// nbMonths(12000, 8000, 1000, 1.5) ===> [0, 4000])
