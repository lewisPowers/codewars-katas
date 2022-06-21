export default function(fn, argsArr, targetId) {
  let container = document.createElement('div');
  container.style.display = 'flex';
  container.style.maxHeight = '1.1rem';
  let title = document.createElement('h3');
  title.textContent = fn.newName || fn.name;
  argsArr.forEach( (arg, i) => {
    container.append(buildInputEl(fn, arg));
    if ( i !== argsArr.length - 1) container.append(makeCommas('h3'));
  });
  let closing = document.createElement('h4');
  closing.style.margin = '0 0.15rem';
  closing.style.padding = '0';
  closing.textContent = ')';
  let submit = document.createElement('input');
  submit.type = 'submit';
  submit.style.verticalAlign = 'top';
  submit.id = targetId;
  submit.value = 'Run Test';

  container.append(closing, submit);

  let onSubmit = function(e) {
    let args = [];
    let moduleClicked = e.target.closest('section');
    Array.from(moduleClicked.getElementsByClassName('argument')).forEach(arg => {
      args.push(arg.value)
    });
    let key = fn.toString();
    fn[key] = fn.apply(this, args);
    let children = moduleClicked.children;
    let span = children[children.length - 1];
    span.textContent = `Test Output: ${fn[key]}`;
  }

  submit.addEventListener('click', onSubmit);

  return container;

  function makeCommas(elType) {
    let el = document.createElement(elType);
    el.style.margin = '0';
    el.textContent = ',';
    return el;
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
}