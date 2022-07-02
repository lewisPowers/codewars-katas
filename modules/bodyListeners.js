export default function() {
  document.body.addEventListener('click',  function(e) {
    if (!e.target.classList.contains('info-btn') &&
      !e.target.classList.contains('info-tab') &&
      e.target.tagName !== 'P' ) {
      let infoTabs = Array.from(document.getElementsByClassName('info-tab'));
      if (infoTabs.every(function(el) {
        return el.classList.contains('hidden');
      }) === false ) {
        infoTabs.forEach(el => {
          if (!el.classList.contains('hidden')) {
            let module = el.closest('section');
            el.nextSibling.classList.remove('special-x')
            module.classList.remove('darken');
            el.classList.add('hidden');
          }
        })
      }
    }
  })
}
