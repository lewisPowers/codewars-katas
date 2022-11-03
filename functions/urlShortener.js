import frontend from '/modules/frontendModule.js';


let urlShortener = {
  urls: {},
  shorten: function(longURL) {
    function addLetter(string) {
      let code = 97 + (Math.floor(Math.random() * 26))
      let letter = String.fromCharCode(code);
      return string += letter;
    }
    for (let key in urlShortener.urls) {
      if (urlShortener.urls[key] === longURL) return key;
    }
    let shortened = () => {
      let start = 'short.ly/';
      while (start.length < 13) start = addLetter(start);
      return start;
    }
    const shortURL = shortened();
    urlShortener.urls[shortURL] = longURL;
    return shortURL;
  },
  redirect: function(shortURL) {
    return urlShortener.urls[shortURL];
  }
}

let shortened = urlShortener.shorten("https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e")

let urlShortenerFn = urlShortener.shorten;
let urlRedirectFn = urlShortener.redirect;
let link = 'https://www.codewars.com/kata/5fee4559135609002c1a1841';
let rank = 5;
urlShortenerFn.newName = "URL Shortener";
urlShortenerFn.link = link;
urlRedirectFn.newName = "URL Redirect";
urlRedirectFn.link = link;

let infoMessage = `One part of two-part Kata: shorten url and redirect url. The URL shortener is given a long URL, which is then converted into a shorter one. Both URLs are stored in a database. It is important that each long URL is assigned a unique short URL.

If a user then calls up the short URL, the database is checked to see which long URL belongs to this short URL and you are redirected to the original/long URL.

Important Note: Some URLs such as www.google.com are used very often. It can happen that two users want to shorten the same URL, so you have to check if this URL has been shortened before to save memory in your database.

Task
Write a class with two methods, shorten and redirect

URL Shortener
Write a method shorten, which receives a long URL and returns a short URL starting with short.ly/, consisting only of lowercase letters (and one dot and one slash) and max length of 13.

Note: short.ly/ is not a valid short URL.`
urlShortenerFn.info = infoMessage;
urlRedirectFn.info = infoMessage;
// UrlShortener.shorten.inputWidth = 10;
urlShortenerFn.kyu = rank;
urlRedirectFn.kyu = rank;

frontend(urlShortenerFn, "https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e") // ==> shortened
frontend(urlRedirectFn, shortened ) // ==> "https://www.codewars.com/kata/5ef9ca8b76be6d001d5e1c3e"


// CODEWARS FORMAT:
// class UrlShortener {
//   constructor() {
//     this.urls = [];
//   }

//   shorten(longURL) {
//     function addLetter(string) {
//       let code = 97 + (Math.floor(Math.random() * 26))
//       let letter = String.fromCharCode(code);
//       return string += letter;
//     }
//     if (this.urls.length) {
//       for (let i = 0; i < this.urls.length; i++) {
//         let obj = this.urls[i];
//         if (obj[Object.keys(obj)[0]] === longURL) return Object.keys(obj)[0];
//       }
//     }

//     let shortened = () => {
//       let start = 'short.ly/';
//       while (start.length < 13) {
// //         start = addLetter(start);
//         start += String.fromCharCode(97 + (Math.floor(Math.random() * 26)));
//       }
//       return start;
//     }
//     const shortURL = shortened();
//     this.urls.push( { [shortURL]: longURL } );
//     return shortURL;
//   }

//   redirect(shortURL) {
//     for (let i = 0; i < this.urls.length; i++) {
//       let obj = this.urls[i];
//       if (Object.keys(obj)[0] === shortURL) return obj[Object.keys(obj)[0]];
//     }
//     return 'Error: not found';
//   }
// }

