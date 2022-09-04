import frontend from '/modules/frontendModule.js';

function position(letter){
  const charCodeDif = 96;
  let position = letter.toLowerCase().charCodeAt(0) - charCodeDif;
  return `Position of alphabet: ${position}`;
}

position.newName = 'Find the position!';
position.link = 'https://www.codewars.com/kata/5808e2006b65bff35500008f';
position.kyu = 8;
position.info = `When given a letter, this function returns its position in the alphabet.`;

frontend(position, 'b'); // === 2
