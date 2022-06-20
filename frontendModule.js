import formatCode from '/formatCode.js';
import testCode from '/testCodeModule.js';

export default function(fn, args) {
  let allArgsArr = Array.from(arguments);
  allArgsArr.shift();
  let call = fn.apply(this, allArgsArr);
  let box = document.createElement('section');
  box.classList.add('module');
  box.style.maxWidth = '80%';
  box.style.margin = '20px';
  box.style.padding = '20px';
  box.style.border = '1px solid gray';
  let heading = document.createElement('h2');
  let content = document.createElement('h4');
  let code = formatCode(fn.toString());
  let answer = document.createElement('h3');
  let span = document.createElement('span')
  span.classList.add('answer')
  let test = document.createElement('div')
  heading.textContent = `Name: ${fn.newName || fn.name}`;
  // content.textContent = `Input: ${allArgsArr}`;
  content.textContent = `Input: ${fn.name}(`;

  content.style.display = 'flex';
  // content.style.alignItems = 'flex-start';
  content.append(testCode(fn, allArgsArr));

  answer.textContent = `Output: ${call}`;

  // answer.textContent = `Output: `;
  // span.textContent = `${fn.answer || call}`;

  // answer.append(span)
  // box.append(heading, code, content, answer, testCode(fn, args));

  box.append(heading, code, content, answer, span);
  document.body.append(box);
}
