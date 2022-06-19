import formatCode from '/formatCode.js';

export default function(fn, args) {
  let allArgsArr = Array.from(arguments);
  allArgsArr.shift();
  let call = fn.apply(this, allArgsArr);
  let box = document.createElement('div');
  box.style.maxWidth = '80%';
  box.style.margin = '20px';
  box.style.padding = '20px';
  box.style.border = '1px solid gray';
  let heading = document.createElement('h2');
  let content = document.createElement('h4');
  let code = formatCode(fn.toString());
  let answer = document.createElement('h3');
  heading.textContent = `Name: ${fn.newName || fn.name}`;
  content.textContent = `Input: ${allArgsArr}`;
  answer.textContent = `Output: ${call}`;
  box.append(heading, code, content, answer);
  document.body.append(box);
}
