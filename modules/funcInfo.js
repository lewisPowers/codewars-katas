export default function(targetElement, funcInfo, linkStr) {
  let container = document.createElement('div');
  let infoBtn = document.createElement('div');
  let infoTab = document.createElement('div');

  let pEl =  document.createElement('p');
  let linkEl = document.createElement('a');
  linkEl.href = linkStr || 'https://google.com';
  linkEl.target = '_blank';
  linkEl.textContent = 'Try it yourself';

  infoBtn.classList.add('info-btn');
  infoTab.classList.add('info-tab', 'hidden');
  pEl.textContent = funcInfo || 'TEST TEST 1...2...3...4.5.6';
  infoTab.append(pEl, linkEl);

  infoBtn.addEventListener('click', function(e) {
    let moduleClicked = e.target.closest('section');
    let tab = moduleClicked.getElementsByClassName('info-tab')[0];
    moduleClicked.classList.toggle('darken');
    tab.classList.toggle('hidden');
  })

  container.append(infoTab, infoBtn);
  targetElement.append(container);
}