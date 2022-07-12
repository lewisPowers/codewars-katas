import frontend from '/modules/frontendModule.js';

function encryptThis(text) {
  debugger;
  let swapChars = function(word) {
    let arr = word.split('');
    let swap = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = swap;
    return arr.join('');
  }
  let encrypt = function(word) {
    let res = '';
    res += word.charCodeAt(0);
    let remainder = word.slice(1);
    res += swapChars(remainder);
    return res;
  }
  return text.split(' ').map( word => {
    return encrypt(word);
  }).join(' ');
}


encryptThis.kyu = 6;
encryptThis.link = 'https://www.codewars.com/kata/5848565e273af816fb000449';
encryptThis.newName = 'Encrypt This!';
encryptThis.inputWidth = 11;
encryptThis.subLink = 'https://www.codewars.com/kata/decipher-this'
encryptThis.info = `Creates a secret messages which can be deciphered by the Decipher this! kata, found here: ${encryptThis.subLink} Here are the conditions:

Your message is a string containing space separated words.
Each word in the message is encrypted using the following rules:
The first letter is converted to its ASCII code.
The second letter is switched with the last letter
Keepin' it simple: There are no special characters in the input.`;
frontend(encryptThis, "Hello") // === "72olle"