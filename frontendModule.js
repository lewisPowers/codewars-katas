export default function(fn, args) {
  let call = fn.call(this, args)
  let box = document.createElement('div');
  box.style.maxWidth = '80%';
  box.style.margin = '20px';
  box.style.padding = '20px';
  box.style.border = '1px solid gray';
  let heading = document.createElement('h1');
  let content = document.createElement('h6');
  let code = document.createElement('code');
  let answer = document.createElement('h3');
  heading.textContent = `Name: ${fn.newName}`;
  code.textContent = `Function: ${formatCode(fn.toString())}`;
  // code.textContent = `Function: ${fn}`;
  console.log(typeof fn)
  code.style.backgroundColor = 'lightgray'
  content.textContent = `Input: ${args}`;
  answer.textContent = `Output: ${call}`
  box.append(heading, code, content, answer)
  document.body.append(box);
}

function formatCode(string) {
  return string.split('').map(char => {
    if (char === '{') return `${char}\n`;
    return char
  }).join('')
}
