import formatCode from '/modules/formatCode.js';
import testCode from '/modules/testCodeModule.js';
import infoTab from '/modules/funcInfo.js';
import formatStrings from '/modules/formatStrings.js';
import miniBtn from '/modules/minimize.js';

export default function(fn, args) {
  let allArgsArr = getArgArr(arguments);
  let call = fn.apply(this, allArgsArr);
  let box = createEl('box', fn);
  let minBtn = miniBtn();
  let minDiv = createEl('div');
  minDiv.append(minBtn)
  let heading = createEl('h2');
  let exampleDiv = createEl('div', 'gray');
  let testDiv = createEl('div', 'green');
  let exampleInput = createEl('h4', 'example-input');
  let exampleOutput = createEl('h4', ['example-output', box.id]);
  let testOutput = createEl('span', ['answer', 'green']);
  let code = formatCode(fn.toString());
  let info = fn.info;
  let link = fn.link;
  let rank = fn.kyu || '?';
  let spacing = fn.changeMargin ? Number(fn.changeMargin) : undefined;

  heading.textContent = `${fn.newName || fn.name}`;
  let argsStr = mapArgs(allArgsArr);
  exampleInput.textContent = `Example Input: ${argsStr}`;
  exampleOutput.textContent = `Example Output: ${formatStrings(call)}`;
  testOutput.textContent = `Test Output: `;

  infoTab(box, info, link, rank, spacing);
  exampleDiv.append(exampleInput, exampleOutput);
  testDiv.append(testCode(fn, allArgsArr, box.id));
  box.append(heading, code, exampleDiv, testDiv, testOutput, minDiv);
  let container = isNaN(rank) ? document.getElementById('unknown-rank')
    : rank > 6 ? document.getElementById('white-rank')
    : rank > 4 ? document.getElementById('yellow-rank')
    : rank > 2 ? document.getElementById('blue-rank')
    : document.getElementById('purple-rank');
  container.append(box);
}

function uuid() {
  let id = '';
  for (let i = 0; i < 32; i++) {
    if (i === 8 || i === 12 || i === 16 || i === 20) id += '-';
    let randomInt = Math.floor(Math.random() * 16);
    id += randomInt.toString(16);
  }
  return id;
}

function getArgArr(arrLike) {
  let argsArr = Array.from(arrLike);
  argsArr.shift();
  return argsArr;
}

function createEl(tagOrClass, classesOrXtra) {
  if (tagOrClass === 'box') return buildBox(classesOrXtra);
  let $el = document.createElement(tagOrClass);
  if (classesOrXtra && Array.isArray(classesOrXtra)) {
    classesOrXtra.forEach(className => {
      $el.classList.add(className)
    })
  } else if (classesOrXtra) $el.className = classesOrXtra;

  return $el;

  function buildBox(fn) {
    let box = document.createElement('section');
    box.id = uuid();
    box.classList.add(box.id, 'module', 'minimized');
    box.fn = fn;
    return box;
  }
}

function mapArgs(array) {
  return array.map( (el) => {
    return ` ${formatStrings(el)}`;
  })
}
