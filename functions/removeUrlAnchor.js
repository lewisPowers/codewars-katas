import frontend from '/modules/frontendModule.js';

function removeUrlAnchor(url){
  return url.slice(0, url.indexOf('#'));
}

removeUrlAnchor.newName = 'Remove anchor from URL';
removeUrlAnchor.link = 'https://www.codewars.com/kata/51f2b4448cadf20ed0000386';
removeUrlAnchor.kyu = 7;
removeUrlAnchor.inputWidth = 20;
removeUrlAnchor.info = `Function returns the url with anything after the anchor (#) removed.`;

frontend(removeUrlAnchor, "www.codewars.com#about") // --> "www.codewars.com"
