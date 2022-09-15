import formatStrings from '/modules/formatStrings.js';

export default function(fn, argsArr, targetId) {
  let container = createEl('div', 'container-div');
  let title = createEl('h4', 'title');
  let testInput = createEl('h4', 'test-input');
  let opening = createEl('h4', 'opening');
  let closing = createEl('h4', 'closing');
  let submit = createEl('input', 'submit', targetId);

  title.textContent = fn.name;
  testInput.textContent = `Test Input: `;

  container.append(testInput, title, opening);

  argsArr.forEach( (arg, i) => {
    container.append(buildInputEl(fn, arg, i, container));
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
      if (argEl.value[0] === '[' || argEl.value[0] === "'" ||
      argEl.value[0] === '"' || argEl.value.includes('\\n')) {
        args.push(JSON.parse(argEl.value))
      } else if (!isNaN(Number(argEl.value))) {
        args.push(Number(argEl.value));
      } else {
        args.push(argEl.value)
      }
    });
    let key = fn.toString();
    fn[key] = fn.apply(this, args);
    let children = moduleClicked.children;
    let span = getSpanEl(children.length - 1);
    // if (span.tagName !== 'SPAN' && span.classList.contains('answer-green')) {
    //   span = children[children.length - 2];
    //   console.log(span);
    // };
    span.textContent = `Test Output: ${formatStrings(fn[key])}`;
    if (fn.log) {
      if (!fn.logged) {
        fn.logged = true;
        let consoleMessageEl = createEl('p', 'console-message');
        consoleMessageEl.textContent = '❗Open console to see better output❗';
        moduleClicked.append(consoleMessageEl);
      }
      console.log(fn[key]);
    }
    function getSpanEl(childIdx) {
      if (children[childIdx].tagName === 'SPAN'
      && children[childIdx].tagName !== 'DIV') return children[childIdx];
      if (childIdx >= 0) return getSpanEl(childIdx - 1)
      return null;
    }
  }

  function buildInputEl(fn, arg, index, parent) {
    let input = document.createElement('input');
    let inputLen = arg.toString().length < 85 ? arg.toString().length : 85;
    input.classList.add('argument');
    // input.value = typeof arg === 'string' ? arg : formatStrings(arg);
    input.value = formatStrings(arg, true);
    input.style.width = `${inputLen + 2}ch`;
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.target.dispatchEvent(onSubmit(event));
      } else {
        input.style.width = `${input.value.length + 2}ch`;
      }
    });
    return input;
  }
}

function makeCommas(elType) {
  let el = createEl(elType, 'test-arg-comma');
  el.textContent = ',';
  return el;
}

function createEl(tag, type, target) {
  let $el = document.createElement(tag);
  if (type && Array.isArray(type)) {
    type.forEach(className => {
      $el.classList.add(className);
    })
  } else if (type) $el.className = type;
  if (type === 'submit') {
    $el.type = 'submit';
    $el.id = target;
    $el.value = 'Run Code';
  } else if (type === 'closing' || type === 'opening') {
    $el.textContent = type === 'closing' ? ')' : '(';
  }
  return $el;
}
