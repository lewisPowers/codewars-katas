import allScripts from '/modules/runScript.js';
import listeners from '/modules/bodyListeners.js';

allScripts();
listeners();
setTimeout(function() {
  Array.from(document.getElementsByClassName('rank-div')).forEach(div => {
    if (div.children.length < 2) div.style.display = 'none';
  })
}, 300);