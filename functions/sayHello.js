import frontend from '/modules/frontendModule.js';

function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
}

sayHello.link = 'https://www.codewars.com/kata/5302d846be2a9189af0001e4';
sayHello.kyu = 8;
sayHello.newName = 'Welcome to the City';
sayHello.info = `Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.`

frontend(sayHello, ['John', 'Smith'], 'Phoenix', 'Arizona')
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')  ==>  Hello, John Smith! Welcome to Phoenix, Arizona!