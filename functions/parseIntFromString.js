import frontend from '/modules/frontendModule.js';

function getAge(inputString){
  // return the girl's correct age as an integer. Happy coding :)
  return parseInt(inputString[0])
}

getAge.newName = 'Parse nice int from char problem';
getAge.kyu = 8;
getAge.link = '';
getAge.inputWidth = 11;
getAge.info = `You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
This program returns the girl's age (0-9) as an integer.
The test input string must always be a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.`;

frontend(getAge, "4 years old") // ==> 4
