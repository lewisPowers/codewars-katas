import formatCode from '/formatCode.js';
import testCode from '/testCodeModule.js';

export default function(fn, args) {
  let allArgsArr = getArgArr(arguments);
  let call = fn.apply(this, allArgsArr);

  let box = createEl('box', fn);
  let heading = createEl('h2');
  let exampleDiv = createEl('div', 'gray');

  let testDiv = createEl('div', 'green');
  let exampleInput = createEl('h4');
  let exampleOutput = createEl('h4', box.id);
  let testInput = createEl('h4', 'test-input');
  let testOutput = createEl('span', ['answer', 'green']);
  let code = formatCode(fn.toString());

  heading.textContent = `${fn.newName || fn.name}`;
  exampleInput.textContent = `Example Input: ${allArgsArr}`;
  exampleOutput.textContent = `Example Output: ${call}`;
  testInput.textContent = `Test Input: ${fn.name}(`;
  testOutput.textContent = `Test Output: `;

  exampleDiv.append(exampleInput, exampleOutput);
  testDiv.append(testInput);
  testInput.append(testCode(fn, allArgsArr, box.id));
  box.append(heading, code, exampleDiv, testDiv, testOutput);
  document.body.append(box);
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
  if (classesOrXtra && Array.isArray(classesOrXtra)) {
    classesOrXtra.forEach(className => {
      $el.classList.add(className)
    })
  } else if (classesOrXtra) $el.className = classesOrXtra;
  if ($el.className === 'test-input') $el.style.display = 'flex';
  if (tagOrClass === 'div' || $el.className.includes('green') || $el.className.includes('test-input')) {
    $el.style.margin = '0';
    $el.style.padding = '0';
    if ($el.className.includes('gray')) {
      $el.style.marginTop = '5px';
      $el.style.borderTopLeftRadius = '6px';
      $el.style.borderTopRightRadius = '6px';
      $el.style.padding = '5px 10px';
      $el.style.backgroundColor = 'rgba(5,5,255,.25)';
      $el.style.height = '100%'
    }
    if ($el.className.includes('green')) {
      $el.style.padding = '10px';
      $el.style.backgroundColor = 'rgba(5,255,5,.25)';
      if (tagOrClass === 'span') {
        $el.style.fontWeight = '700';
        $el.style.lineHeight = '2.42em';
      }
    }
  }

  return $el;

  function buildBox(fn) {
    let box = document.createElement('section');
    box.id = uuid();
    box.classList.add(box.id, 'module');
    box.fn = fn;
    box.style.maxWidth = '80%';
    box.style.overflow = 'hidden';
    box.style.margin = '20px';
    box.style.padding = '20px';
    box.style.border = '1px solid gray';
    return box;
  }
}


