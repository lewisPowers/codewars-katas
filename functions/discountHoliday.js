// <!-- 8 kyu -->
//   <!-- Holiday VIII - Duty Free
//   The purpose of this kata is to work out just how many bottles of duty
//   free whiskey you would have to buy such that the saving over the normal
//   high street price would effectively cover the cost of your holiday.

//   You will be given the high street price (normPrice), the duty free
//   discount (discount) and the cost of the holiday.

//   For example, if a bottle cost £10 normally and the discount in duty free
//   was 10%, you would save £1 per bottle. If your holiday cost £500, the
//   answer you should return would be 500.

//   All inputs will be integers. Please return an integer. Round down. -->
import frontend from '/modules/frontendModule.js';

function dutyFree(normPrice, discount, hol){
  // count how many bottles needed for discount to equal holiday cost
  let discountAmount = normPrice * (discount * .01);
  return Math.floor(hol / discountAmount);
}

dutyFree.newName = "Holiday VIII - Duty Free";
dutyFree.kyu = 8;
dutyFree.link = 'https://www.codewars.com/kata/57e92e91b63b6cbac20001e5';
dutyFree.inputWidth = 5;
dutyFree.info = `The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.`;
frontend(dutyFree, 12, 50, 1000) // ==> 166