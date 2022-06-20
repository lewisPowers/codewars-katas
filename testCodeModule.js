export default function(fn, argsArr) {
  // create input for arguments
  // on submit, call function
  // display output on screen
  let container = document.createElement('div');
  container.style.display = 'flex';
  container.style.maxHeight = '1.1rem';
  let title = document.createElement('h3');
  title.textContent = fn.newName || fn.name;
  argsArr.forEach( (arg, i) => {
    // console.log (argsArr)
    // debugger;
    // let inlineArg = document.createElement('h4');
    // inlineArg.textContent = arg
    // container.append(inlineArg)
    let input = document.createElement('input');
    input.type = 'text';
    input.classList.add('argument');
    input.value = arg;
    input.style.maxWidth = '2.2rem';
    input.style.margin = '0 .15rem';
    container.append(input);
    if ( i !== argsArr.length - 1) container.append(makeCommas('h3'))
  })
  let closingArgs = document.createElement('h4');
  closingArgs.style.margin = '0 .15rem';
  closingArgs.textContent = ')'
  let submit = document.createElement('input');
  submit.type = 'submit';
  container.append(closingArgs, submit)
  submit.addEventListener('click', function(e) {
    let args = [];
    Array.from(document.getElementsByClassName('argument')).forEach(arg => {
      args.push(arg.value)
    })
    this['answer'] = fn.apply(this, args);
    // find target based on click
    let moduleClicked = this.closest('section')
    console.log(moduleClicked)
    let children = moduleClicked.children;
    console.log(children)
    for (let i = 0; i < children.length; i++) {
      let child = children[i]
      if (child.className === 'answer') {
        child.textContent = this.answer;
      }
    }
  })
  return container;
  function makeCommas(elType) {
    let el = document.createElement(elType);
    el.style.margin = '0';
    el.textContent = ',';
    return el;
  }
}