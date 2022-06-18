export default function(fn, args) {
  let allArgsArr = Array.from(arguments)
  allArgsArr.shift();
  console.log(allArgsArr)
  let call = fn.apply(this, allArgsArr)
  let box = document.createElement('div');
  box.style.maxWidth = '80%';
  box.style.margin = '20px';
  box.style.padding = '20px';
  box.style.border = '1px solid gray';

  let heading = document.createElement('h2');
  let content = document.createElement('h4');
  let code = document.createElement('code');
  // formatCode(fn.toString(), code)
  let answer = document.createElement('h3');
  heading.textContent = `Name: ${fn.newName || fn.name}`;
  // code.textContent = `${formatCode(fn.toString())}`;
  code.textContent = `${fn}`;
  code.style.backgroundColor = 'lightgray'
  content.textContent = `Input: ${allArgsArr}`;
  // content.style.maxWidth = 'min-content';
  answer.textContent = `Output: ${call}`
  box.append(heading, code, content, answer)
  document.body.append(box);
}

// function formatCode(fnString, targetElement, margin = 0) {
//   if (arguments.length < 2) {
//     formatCode['resultDiv'] = createElement('div')
//     formatCode['target'] = createElement('p', margin);
//     targetElement = formatCode['target'];
//   }
//   if (fnString.length === 0) {
//     // append all to div, then
//     formatCode['resultDiv'].append(targetElement)
//     document.body.append(formatCode['resultDiv'])
//   }
//   if (fnString[0] === ';') {
//     // create p element, start to append to it
//     targetElement.textContent += fnString[0];
//     formatCode['resultDiv'].append(targetElement)
//     fnString = fnString.slice(1)
//     let $pEl = createElement('p', margin);
//     return formatCode(fnString, $pEl, margin)
//   }
//   if (fnString[0] === '{') {
//     // create p element, add margin, start to append to it
//     targetElement.textContent += fnString[0];
//     formatCode['resultDiv'].append(targetElement)
//     fnString = fnString.slice(1)
//     let $pEl = createElement('p', margin);
//     return formatCode(fnString, $pEl, margin + 10)
//   }
//   if (fnString[0] === '}') {
//     // create p element, add margin, start to append to it
//     targetElement.textContent += fnString[0];
//     formatCode['resultDiv'].append(targetElement)
//     fnString = fnString.slice(1)
//     let $pEl = createElement('p', margin);
//     return formatCode(fnString, $pEl, margin - 10)
//   }
//   targetElement.textContent += fnString[0];
//   fnString = fnString.slice(1)
//   return formatCode(fnString, targetElement, margin)
// }

