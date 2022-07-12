import formatCode from '/modules/formatCode.js';
import testCode from '/modules/testCodeModule.js';
import infoTab from '/modules/funcInfo.js';
import formatStrings from '/modules/formatStrings.js';

export default function(fn, args) {
  let allArgsArr = getArgArr(arguments);
  let call = fn.apply(this, allArgsArr);
  let box = createEl('box', fn);
  let heading = createEl('h2');
  let exampleDiv = createEl('div', 'gray');
  let testDiv = createEl('div', 'green');
  let exampleInput = createEl('h4');
  let exampleOutput = createEl('h4', box.id);
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
  box.append(heading, code, exampleDiv, testDiv, testOutput);
  let container = isNaN(rank) ? document.getElementById('unknown-rank') :
    rank > 6 ? document.getElementById('white-rank') :
    rank > 4 ? document.getElementById('yellow-rank') :
    rank > 2 ? document.getElementById('blue-rank') :
    document.getElementById('purple-rank');
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
  let allArgsArr = Array.from(arrLike);
  allArgsArr.shift();
  return allArgsArr;
}

function createEl(tagOrClass, classesOrXtra) {
  if (tagOrClass === 'box') return buildBox(classesOrXtra);
  let $el = document.createElement(tagOrClass);
  $el.style.overflow = 'hidden';
  if (classesOrXtra && Array.isArray(classesOrXtra)) {
    classesOrXtra.forEach(className => {
      $el.classList.add(className)
    })
  } else if (classesOrXtra) $el.className = classesOrXtra;
  if ($el.className === 'test-input') $el.style.display = 'flex';
  if (tagOrClass === 'h4') {
    $el.style.margin = '1em 0';
  }
  if (tagOrClass === 'div' || $el.className.includes('green') || $el.className.includes('test-input')) {
    $el.style.margin = '0';
    $el.style.padding = '0';
    if ($el.className.includes('gray')) {
      $el.style.marginTop = '15px';
      $el.style.borderTopLeftRadius = '5px';
      $el.style.borderTopRightRadius = '5px';
      $el.style.padding = '5px 10px';
      $el.style.backgroundColor = 'rgba(5,5,255,.25)';
      $el.style.height = '100%';
      $el.style.overflow = 'hidden';
    }
    if ($el.className.includes('green')) {
      $el.style.padding = '10px';
      $el.style.backgroundColor = 'rgba(5,255,5,.25)';
      if (tagOrClass === 'span') {
        $el.style.fontWeight = '700';
        $el.style.lineHeight = '2.86em';
      }
    }
  }

  return $el;

  function buildBox(fn) {
    let box = document.createElement('section');
    box.id = uuid();
    box.classList.add(box.id, 'module');
    box.fn = fn;
    return box;
  }
}

function mapArgs(array) {
  return array.map( (el) => {
    return ` ${formatStrings(el)}`;
  })
}
