import frontend from '/modules/frontendModule.js';

function meeting(s) {
  return s.toUpperCase().split(';').map(name => {
    let [firstName, lastName] = name.split(':');
    return `(${lastName}, ${firstName})`;
  }).sort().join('');
}

meeting.newName = 'Meeting: rearrangePeopleData';
meeting.inputWidth = 80;
let names = "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"
let multLastNames = "Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern;Lewis:Powers;Joan:Powers"
frontend(meeting, names)
// console.log(names)
// console.log(multLastNames)
// console.log(meeting(names))
// console.log(meeting(multLastNames))