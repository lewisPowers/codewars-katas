import frontend from '/modules/frontendModule.js';

function include(arr, item){
  return arr.indexOf(item) >= 0;
}

include.newName = 'Does My List Include This?';
include.link = 'https://www.codewars.com/kata/545991b4cbae2a5fda000158';
include.kyu = 8;
include.inputWidth = 7;
include.info = 'Method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.';

frontend(include, [1, 2, 3, 4, 5], 3) // ==> true
