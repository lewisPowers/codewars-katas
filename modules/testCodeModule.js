export default function(fn, argsArr, targetId) {
  let container = createEl('div', 'container');
  let title = createEl('h4', 'title');
  let testInput = createEl('h4', 'test-input');
  let opening = createEl('h4', 'opening');
  // let testOutput = createEl('span', ['answer', 'green']);
  let closing = createEl('h4', 'closing');
  let submit = createEl('input', 'submit', targetId);

  title.textContent = fn.name;
  testInput.textContent = `Test Input: `;
  // testOutput.textContent = `Test Output: `;

  container.append(testInput, title, opening);

  argsArr.forEach( (arg, i) => {
    container.append(buildInputEl(fn, arg, i));
    if ( i !== argsArr.length - 1) container.append(makeCommas('h3'));
  });

  container.append(closing, submit);
  submit.addEventListener('click', onSubmit);
  return container;

  function onSubmit(e) {
    let args = [];
    let moduleClicked = e.target.closest('section');
    Array.from(moduleClicked.getElementsByClassName('argument'))
      .forEach(argEl => {
      if (argEl.value[0] === '[') {
        args.push(JSON.parse(argEl.value))
      } else if (!isNaN(Number(argEl.value))) {
        args.push(Number(argEl.value));
      } else {
        args.push(argEl.value)
      }
    });
    let key = fn.toString();
    console.log(args)
    fn[key] = fn.apply(this, args);
    let children = moduleClicked.children;
    let span = children[children.length - 1];
    span.textContent = `Test Output: ${fn[key]}`;
  }
}

function makeCommas(elType) {
  let el = document.createElement(elType);
  el.style.margin = '0';
  el.textContent = ',';
  return el;
}

function createEl(tag, type, target) {
  let $el = document.createElement(tag);
  if (tag === 'h4') $el.style.margin = '0';
  if (type && Array.isArray(type)) {
    type.forEach(className => {
      $el.classList.add(className);
    })
  } else if (type) $el.className = type;
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

function buildInputEl(fn, arg, index) {
  let input = document.createElement('input');
  input.classList.add('argument');
  if (Array.isArray(arg)) {
    input.value = `[${arg}]`;
  } else {
    input.value = arg;
  }
  input.style.width = `${fn.inputWidth}ch`;
  input.style.margin = '0 .15rem';
  input.style.padding = '0 .15rem';
  input.style.textAlign = 'center';
  input.style.transform = 'translateY(5%)';
  return input;
}

