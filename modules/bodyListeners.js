export default function() {
  document.body.addEventListener('click',  function(e) {
    // console.log(e.target.nodeName)
    if (e.target.nodeName === "SECTION" ||
      (e.target.nodeName === "H2" && e.target.parentElement.nodeName === 'SECTION') ) {
      let target = e.target.nodeName === "SECTION" ? e.target : e.target.parentElement;
      if (target.classList.contains('minimized')) {
        target.classList.replace('minimized', 'expanded');
      }
    } else if (!e.target.classList.contains('info-btn') &&
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
