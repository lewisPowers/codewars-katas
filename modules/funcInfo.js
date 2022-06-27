export default function(targetElement, funcInfo) {
  // build info tab element; add to box
  // build hidden div with info about function
  // when clicked, expose info div for user
  // when clicked outide of or esc pressed, hide div
  let container = document.createElement('div');
  let infoBtn = document.createElement('div');
  let infoTab = document.createElement('div');
  infoBtn.classList.add('info-btn');
  infoTab.classList.add('info-tab', 'hidden');
  infoTab.textContent = funcInfo || 'TEST TEST 1...2...3...4.5.6';

  infoBtn.addEventListener('click', function(e) {
    let moduleClicked = e.target.closest('section')
    let tab = moduleClicked.getElementsByClassName('info-tab')[0];
    tab.classList.toggle('hidden')
  })

  container.append(infoTab, infoBtn);
  targetElement.append(container);
}