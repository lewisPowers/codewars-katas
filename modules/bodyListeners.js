(function() {
  document.body.addEventListener('click',  function(e) {
    // console.log(e.target.classList, e.target)
    // click anywhere outside of info div to hide all info tabs

    if (e.target.classList.length && !e.target.classList.value.includes('info-tab')) {
      let infoTabs = document.getElementsByClassName('info-tab');
      Array.from(infoTabs).forEach(el => {
        // console.log(el)
        // if (!el.classList.includes('hidden')) {
        //   el.classList.add('hidden')
        // }
      })
    }
  })
})()


