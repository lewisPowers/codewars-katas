export default function formatCode(fnString) {
  let mainContainer = createElement('div');
  let pElement = createElement('p');
  let line = '';
  let leftMargin = 0;
  let triggers = [';', '{', '}', '`', ','];
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
        fnString[i + 1] === ';' || fnString[i + 1] === "'") ||
        (fnString[i] === ';' && fnString[i + 1] === "'") ||
        (fnString[i] === ',' && fnString[i - 1] !== "]") ||
        (fnString[i] === '{' && fnString[i + 1] === "'")) {
          line += fnString[i];
          if ( fnString[i] === '}' && fnString[i + 1] === ')') leftMargin -= 11
        } else {

          pElement = newLine(fnString[i], line, i);
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

  function newLine(char, substr, charPosition, margin) {
    let newPElement;
    if (char === ';' || char === ',') {
      substr += char;
      pElement.textContent = substr;
      mainContainer.append(pElement);
      // if (char === ';' && fnString.slice(charPosition, charPosition + 5).includes('}')) {
      //   leftMargin -= 11;
      // }
      newPElement = createElement('p', leftMargin)
    } else if (char === '{') {
      substr += char;
      pElement.textContent = substr;
      mainContainer.append(pElement);
      leftMargin += 11;
      newPElement = createElement('p', leftMargin)
    } else if (char === '}') {
      if (substr.length > 1 || substr !== ' ') {
        pElement.textContent = substr;
        mainContainer.append(pElement);
      }
      // if (fnString.slice(charPosition - 3, charPosition - 1).includes('}')) {
      //   console.log('FOUND A } NEARBY')
      //   leftMargin -= 11;
      // }
      // let slice = fnString.slice(charPosition - 6, charPosition)
      // console.log(char, slice)
      // if (slice.includes('}')) leftMargin -= 11;
      // if (fnString.includes('diamond') && fnString[charPosition + 1] === ')') leftMargin = leftMargin - 11
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

