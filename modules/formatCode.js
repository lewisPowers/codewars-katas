export default function formatCode(fnString) {
  fnString = removeExcessWhitespace(fnString);
  let mainContainer = createElement('div');
  let pElement = createElement('p');
  let line = '';
  let leftMargin = 0;
  let triggers = [';', '{', '}', '`', ',', '|' ];
  for (let i = 0; i < fnString.length; i++) {
    let char = fnString[i];
    if (triggers.includes(fnString[i])) {
      if (fnString[i] === '`') {
        formatCode['`'] === undefined ? formatCode['`'] = 1 : formatCode['`']++;
        line += fnString[i];
      } else if (isInBackTickQuotes()) {
        if ( fnString[i] === '}' && ( fnString[i + 1] === ')' ||  // for '})'
        ( fnString[i + 1] === ')' && line.length > 4 ) ||
        (areSymbolsAfterObject(i)) || // & '};'  & '}''
        (fnString[i + 1] === "," || fnString[i + 2] === "e") ) || // & "}," & "} else"
          (fnString[i] === ';' && fnString[i + 1] === "'") || // for ; as string
          (fnString[i] === ';' && fnString[i + 2] === "i") || // in for loop definitions
          (fnString[i] === ',' && fnString[i - 1] !== "]") || // in objects
          /* (fnString[i] === ',' && fnString[i + 2] !== "'") || // in objects */
          (fnString[i] === '|' && fnString[i + 1] === "|") ||
          (fnString[i] === '{' && fnString[i + 1] === "'") ||
          (fnString[i] === '{' && fnString[i + 1] === "}") ) { // for '{' as string
          if ( (fnString[i] === '}' && fnString[i + 1] === ')') ||
            (fnString[i] === '}' && (fnString[i - 1] === ' ' || fnString[i - 1] === '}')) ) {
            leftMargin -= 11;
            pElement.style.marginLeft = `${parseNum(pElement.style.marginLeft) - 11}px`
          }
          line += fnString[i];
        } else {
          if (fnString[i] === '|' && line.length < 40) {
            line += fnString[i];
          } else {
            pElement = newLine(fnString[i], line, i);
            line = '';
          }
        }
      } else {
        line += fnString[i];
      }
    } else {
      line += fnString[i];
    }
  }

  return mainContainer;

  function isInBackTickQuotes() {
    return !formatCode['`'] || formatCode['`'] % 2 === 0;
  }

  function areSymbolsAfterObject(index) {
    return fnString[index + 1] === ';' || fnString[index + 1] === "'";
  }



  function newLine(char, substr) {
    let newPElement;
    if (char === ';' || char === ',' || char === '|' ) {
      substr += char;
      pElement.textContent = substr;
      mainContainer.append(pElement);
      newPElement = createElement('p', leftMargin);
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

function parseNum(str) {
  let arr = str.split('')
  while (isNaN(arr[arr.length - 1])) {
      arr.length--;
  }
  return Number(arr.join(''));
}

function removeExcessWhitespace(str) {
  let noSpacesStr = '';
  for (let i in str) {
    if (
      str[i] !== ' ' ||
      (str[i] === ' ' && noSpacesStr[noSpacesStr.length - 1] !== ' ')
    ) noSpacesStr += str[i];
  }
  return noSpacesStr;
}
