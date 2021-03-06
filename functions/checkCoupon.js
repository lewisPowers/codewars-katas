import frontend from '/modules/frontendModule.js';

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  function parseDate(dateStr) {
    let arr = dateStr.split(' ');
    arr[1] = arr[1].replace(/,/, '')
    return arr;
  }
  function isExpired(d1, d2) {
    let months = {
      'January': 1,
      'February': 2,
      'March': 3,
      'April': 4,
      'May': 5,
      'June': 6,
      'July': 7,
      'August': 8,
      'September': 9,
      'October': 10,
      'November': 11,
      'December': 12
    };
    let current = parseDate(d1);
    let expiry = parseDate(d2);
    let monthsArr = [months[current[0]], months[expiry[0]]];
    let days = [current[1], expiry[1]];
    let years = [current[2], expiry[2]];
    function isExpiryLessThanCurrent(arr) {
      return arr[1] < arr[0];
    }
    function isExpiryEqualToCurrent(arr) {
      return arr[0] == arr[1];
    }
    if (isExpiryLessThanCurrent(years)) return true;
    if (isExpiryEqualToCurrent(years)) {
      if (isExpiryLessThanCurrent(monthsArr)) return true;
      if (isExpiryEqualToCurrent(monthsArr)) {
        if (isExpiryLessThanCurrent(days)) return true;
      }
    }
    return false;
  }
  if (enteredCode !== correctCode || enteredCode === '') return false;
  if (isExpired(currentDate, expirationDate)) return false;
  return true;
}

checkCoupon.newName = 'The Coupon Code';
checkCoupon.link = 'https://www.codewars.com/kata/539de388a540db7fec000642';
checkCoupon.kyu = 7;
checkCoupon.inputWidth = 11;
checkCoupon.info = `Verifies that a coupon code is valid and not expired.`;
frontend(checkCoupon, "123", "123", "July 9, 2015", "July 9, 2015");
