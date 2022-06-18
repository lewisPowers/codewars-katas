export default function formatCode(fnString, targetElement, margin = 0) {
  if (arguments.length > 2) {
    formatCode['resultDiv'] = createElement('div')
    formatCode['targetElement'] = createElement('p', margin);
    targetElement = formatCode['targetElement'];
  }
  if (fnString.length === 0) {
    // append all to div, then
    formatCode['resultDiv'].append(targetElement)
    document.body.append(formatCode['resultDiv'])
  }
  if (fnString[0] === ';') {
    // create p element, start to append to it
    targetElement.textContent += fnString[0];
    formatCode['resultDiv'].append(targetElement)
    fnString = fnString.slice(1)
    let $pEl = createElement('p', margin);
    return formatCode(fnString, $pEl, margin)
  }
  if (fnString[0] === '{') {
    // create p element, add margin, start to append to it
    targetElement.textContent += fnString[0];
    formatCode['resultDiv'].append(targetElement)
    fnString = fnString.slice(1)
    let $pEl = createElement('p', margin);
    return formatCode(fnString, $pEl, margin + 10)
  }
  if (fnString[0] === '}') {
    // create p element, add margin, start to append to it
    targetElement.textContent += fnString[0];
    formatCode['resultDiv'].append(targetElement)
    fnString = fnString.slice(1)
    let $pEl = createElement('p', margin);
    return formatCode(fnString, $pEl, margin - 10)
  }
  targetElement.textContent += fnString[0];
  fnString = fnString.slice(1)
  return formatCode(fnString, targetElement, margin)
}

function createElement(tag, leftMargin) {
  let $el = document.createElement(tag);
  if (arguments.length > 1) $el.style.marginLeft = `${leftMargin}px`;
  return $el;
}


formatCode("function array(arr){ let split = arr.split(','); split.shift(); split.pop(); return split.join(' ') === '' ? null : split.join(' '); }")
console.log()