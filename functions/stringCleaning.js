import frontend from '/modules/frontendModule.js';

function stringClean(s){
  return s.split('').filter( char => {
    if (isNaN(char) || char === ' ') return char;
  }).join('');
}

stringClean.newName = "String Cleaning";
stringClean.link = 'https://www.codewars.com/kata/57e1e61ba396b3727c000251';
stringClean.kyu = 8;
stringClean.info = "Takes in a string, cleans out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;\"'.,? all intact.";
stringClean.inputWidth = 9;

frontend(stringClean, "  44 hello99 I4 am 45here93485 now")