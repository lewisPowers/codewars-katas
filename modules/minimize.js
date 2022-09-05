export default function() {
  let btn = document.createElement('div');
  btn.classList.add('minimize-btn');
  btn.addEventListener('click', function(e) {
    e.target.closest('section').classList.add('minimized');
    e.target.closest('section').scrollIntoView( { block: 'nearest' } )
  })
  return btn;
}