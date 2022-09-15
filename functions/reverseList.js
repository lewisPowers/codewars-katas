import frontend from '/modules/frontendModule.js';

function reverseList(list) {
  return list.reverse();
}

reverseList.newName = 'Reverse List Order';
reverseList.kyu = 8;
reverseList.info = 'Function that takes in a list and returns a list with the reverse order.';
reverseList.link = 'https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b';

frontend(reverseList, [1,2,3,4,5])
/*             // ==> [5,4,3,2,1] */
