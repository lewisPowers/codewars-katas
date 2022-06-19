export default function formatCode(fnString) {
  let mainContainer = createElement('div');
  let pElement = createElement('p');
  let line = '';
  let leftMargin = 0;
  let triggers = [';', '{', '}', '`'];
  for (let i = 0; i < fnString.length; i++) {
    let char = fnString[i];
    if (triggers.includes(fnString[i])) {
      if (fnString[i] === '`') {
        if (formatCode['`'] === undefined) {
          formatCode['`'] = 1;
        } else {
          formatCode['`']++;
        }
        line += fnString[i];
      } else if (!formatCode['`'] || formatCode['`'] % 2 === 0) {
        if ( fnString[i] === '}' && (fnString[i + 1] === ')' ||
        fnString[i + 1] === ';' || fnString[i + 1] === "'") ) {
          line += fnString[i];
        } else {
          pElement = newLine(fnString[i], line);
          line = '';
        }
      } else {
        line += fnString[i];
      }
    } else {
      line += fnString[i];
    }
  }
  return mainContainer;

  function newLine(char, substr) {
    let newPElement;
    if (char === ';') {
      substr += char;
      pElement.textContent = substr;
      mainContainer.append(pElement);
      newPElement = createElement('p', leftMargin)
    } else if (char === '{') {
      substr += char;
      pElement.textContent = substr;
      mainContainer.append(pElement);
      leftMargin += 11
      newPElement = createElement('p', leftMargin)
    } else if (char === '}') {
      if (substr.length > 1 || substr !== ' ') {
        pElement.textContent = substr;
        mainContainer.append(pElement);
      }
      leftMargin -= 11;
      newPElement = createElement('p', leftMargin);
      newPElement.textContent = '}';
      mainContainer.append(newPElement);
      newPElement = createElement('p', leftMargin)
    }
    return newPElement;
  }
}



function createElement(tag, leftMargin) {
  let $el = document.createElement(tag);
  if (tag === 'p') {
    $el.style.margin = '0';
    $el.style.padding = '0';
    $el.style.fontFamily = 'monospace';
    $el.style.backgroundColor = `#dededede`;
    $el.style.maxWidth = 'max-content';
  }
  if (arguments.length > 1) $el.style.marginLeft = `${leftMargin}px`;
  return $el;
}



formatCode("function array(arr){ let split = arr.split(','); split.shift(); split.pop(); return split.join(' ') === '' ? null : split.join(' '); }")

// export default function formatCode(fnString, targetElement, margin = 0) {
//   if (arguments.length > 2) {
//     formatCode['resultDiv'] = createElement('div');
//     formatCode['targetElement'] = createElement('p', margin);
//     targetElement = formatCode['targetElement'];
//   }
//   if (fnString.length === 0) {
//     // append all to div, then div to body
//     formatCode['resultDiv'].append(targetElement);
//     document.body.append(formatCode['resultDiv']);
//   }
//   if (fnString[0] === ';') {
//     // create p element, start to append to it
//     targetElement.textContent += fnString[0];
//     formatCode['resultDiv'].append(targetElement);
//     fnString = fnString.slice(1);
//     let $pEl = createElement('p', margin);
//     return formatCode(fnString, $pEl, margin);
//   }
//   if (fnString[0] === '{') {
//     // create p element, add margin, start to append to it
//     targetElement.textContent += fnString[0];
//     formatCode['resultDiv'].append(targetElement);
//     fnString = fnString.slice(1);
//     let $pEl = createElement('p', margin);
//     return formatCode(fnString, $pEl, margin + 10);
//   }
//   if (fnString[0] === '}') {
//     // create p element, add margin, start to append to it
//     targetElement.textContent += fnString[0];
//     formatCode['resultDiv'].append(targetElement);
//     fnString = fnString.slice(1);
//     let $pEl = createElement('p', margin);
//     return formatCode(fnString, $pEl, margin - 10);
//   }
//   targetElement.textContent += fnString[0];
//   fnString = fnString.slice(1);
//   return formatCode(fnString, targetElement, margin);
// }

