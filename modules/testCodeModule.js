export default function(fn, argsArr, targetId) {
  let container = createEl('div', 'container');
  let title = createEl('h4', 'title');
  let testInput = createElement('h4', 'test-input');
  let opening = createEl('h4', 'opening');
  let testOutput = createElement('span', ['answer', 'green']);
  let closing = createEl('h4', 'closing');
  let submit = createEl('input', 'submit', targetId);

  title.textContent = fn.name;
  testInput.textContent = `Test Input: `;
  testOutput.textContent = `Test Output: `;

  container.append(testInput, title, opening);

  argsArr.forEach( (arg, i) => {
    container.append(buildInputEl(fn, arg));
    if ( i !== argsArr.length - 1) container.append(makeCommas('h3'));
  });

  container.append(closing, submit);

  let onSubmit = function(e) {
    let args = [];
    let moduleClicked = e.target.closest('section');
    Array.from(moduleClicked.getElementsByClassName('argument')).forEach(arg => {
      if (!isNaN(Number(arg.value))) {
        args.push(Number(arg.value));
      } else {
        args.push(arg.value)
      }
    });
    let key = fn.toString();
    fn[key] = fn.apply(this, args);
    let children = moduleClicked.children;
    let span = children[children.length - 1];
    span.textContent = `Test Output: ${fn[key]}`;
  }

  submit.addEventListener('click', onSubmit);

  return container;


}

function makeCommas(elType) {
  let el = document.createElement(elType);
  el.style.margin = '0';
  el.textContent = ',';
  return el;
}

function createEl(tag, type, target) {
  let $el = document.createElement(tag);
  if (type === 'container') {
    $el.style.display = 'flex';
    $el.style.maxHeight = '1.5rem';
  }
  if (type === 'submit') {
    $el.type = 'submit';
    $el.style.backgroundColor = 'rgba(5,255,5,.06)';
    $el.style.borderRadius = '4px';
    $el.style.fontFamily = 'Kdam Thmor Pro';
    $el.id = target;
    $el.value = 'Run Code';
  }
  if (type === 'closing' || type === 'opening' || type === 'title') {
    $el.style.margin = '4px 0.15rem 0';
    $el.style.padding = '0';
    $el.style.fontFamily = 'monospace';
    $el.style.fontSize = '13px';
    $el.textContent = type === 'closing' ? ')' : '(';
    if (type === 'title') {
      $el.style.marginRight = '0';
      $el.style.marginLeft = '10px';
    }
    if (type === 'opening') {
      $el.style.marginLeft = '0';
    }
    if (type === 'closing' || type === 'opening') {
      $el.style.fontSize = '19px';
      $el.style.marginTop = '0px';
    }
  }
  return $el;
}

function buildInputEl(fn, arg) {
  let input = document.createElement('input');
  input.classList.add('argument');
  input.value = arg;
  input.style.width = `${fn.inputWidth}ch`;
  input.style.margin = '0 .15rem';
  input.style.padding = '0 .15rem';
  input.style.textAlign = 'center';
  input.style.transform = 'translateY(5%)';
  return input;
}



function createElement(tagOrClass, classesOrXtra) {
  if (tagOrClass === 'box') return buildBox(classesOrXtra);
  let $el = document.createElement(tagOrClass);
  $el.style.overflow = 'hidden';
  $el.style.fontFamily = 'Kdam Thmor Pro';
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
      $el.style.borderTopLeftRadius = '6px';
      $el.style.borderTopRightRadius = '6px';
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
    box.style.maxWidth = '80%';
    box.style.overflow = 'hidden';
    box.style.margin = '20px';
    box.style.padding = '20px';
    box.style.border = '1px solid gray';
    return box;
  }
}