import frontend from '/modules/frontendModule.js';

function orderPeople(people){
  return people.sort( (a, b) => a.age < b.age ? -1 : a.age > b.age ? 1 : 0 );
}

orderPeople.newName = 'Sort People By Their Age';
orderPeople.info = 'Sort and Order people by their age using Arrow Functions';
orderPeople.inputWidth = 20;
orderPeople.kyu = 7;
orderPeople.link = 'https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript';
let peopleArray = [
  { age: 83, name: 'joel' },
  { age: 46, name: 'roger' },
  { age: 99, name: 'vinny' },
  { age: 26, name: 'don' },
  { age: 74, name: 'brendan' }
];
frontend(orderPeople, peopleArray);



