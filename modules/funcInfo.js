export default function(targetElement, funcInfo, linkStr, kyuRank, marginChange) {
  let container = document.createElement('div');
  let infoBtn = document.createElement('div');
  let infoTab = document.createElement('div');
  let rankEl = buildRankEl(kyuRank);
  let pEl =  document.createElement('p');
  let linkEl = document.createElement('a');
  linkEl.href = linkStr || 'https://google.com';
  linkEl.target = '_blank';
  linkEl.textContent = 'Try it yourself on codewars.com';

  infoBtn.classList.add('info-btn');
  infoTab.classList.add('info-tab', 'hidden');
  pEl.textContent = funcInfo || 'TEST TEST 1...2...3...';
  infoTab.append(rankEl, pEl, linkEl);

  infoBtn.addEventListener('click', function(e) {
    let moduleClicked = e.target.closest('section');
    moduleClicked.margin = marginChange;
    let tab = moduleClicked.getElementsByClassName('info-tab')[0];
    moduleClicked.classList.toggle('darken');
    tab.classList.toggle('hidden');
    if ( moduleClicked.margin !== undefined) {
      moduleClicked.style.overflow = 'visible';
      infoTab.style.margin = `${marginChange}px`;
      infoBtn.classList.toggle('special-x');
    }
  })

  container.append(infoTab, infoBtn);
  targetElement.append(container);

  function buildRankEl(kyuNum) {
    let outerDiv = document.createElement('div');
    let innerDiv = document.createElement('div');
    let span = document.createElement('span');
    outerDiv.classList.add('small-hex', 'is-extra-wide');
    innerDiv.classList.add('inner-small-hex', 'is-extra-wide');
    if (kyuNum > 6) {
      outerDiv.classList.add('is-white-rank');
      innerDiv.classList.add('is-white-rank');
    } else if (kyuNum > 4) {
      outerDiv.classList.add('is-yellow-rank');
      innerDiv.classList.add('is-yellow-rank');
    } else if (kyuNum > 2) {
      outerDiv.classList.add('is-blue-rank');
      innerDiv.classList.add('is-blue-rank');
    }
    span.textContent = `${kyuNum} kyu`;
    innerDiv.append(span);
    outerDiv.append(innerDiv);
    return outerDiv;
  }
}