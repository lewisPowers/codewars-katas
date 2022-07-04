import frontend from '/modules/frontendModule.js';

function meeting(s) {
  return s.toUpperCase().split(';').map(name => {
    let [firstName, lastName] = name.split(':');
    return `(${lastName}, ${firstName})`;
  }).sort().join('');
}

meeting.newName = 'Meeting';
meeting.link = 'https://www.codewars.com/kata/59df2f8f08c6cec835000012';
meeting.kyu = 6;
meeting.inputWidth = 80;
meeting.info = `This function makes each string uppercase, gives it sorted in alphabetical order by last name.
When the last names are the same, they will be sorted by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.`;
let names = "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
let multLastNames = "Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern;Lewis:Powers;Joan:Powers"
frontend(meeting, names)
// console.log(names)
// console.log(multLastNames)
// console.log(meeting(names))
// console.log(meeting(multLastNames))
