export default function(input) {

  return formatOutputString(input)


  function formatOutputString(input) {
    if (Array.isArray(input)) {
      return formatArrayIntoString(input)
    } else if (Object.prototype.isPrototypeOf(input)) {
      return formatObjectIntoString(input);
    } else if (typeof input === 'string') {
      return `"${input}"`;
    } else {
      return input;
    }
  }

  function formatObjectIntoString(obj) {
    let objStr = '{';
    Object.keys(obj).forEach( (key, i) => {
      if (i === Object.keys(obj).length - 1) {
          objStr += `"${key}": ${formatOutputString(obj[key])}`;
      } else {
          objStr += `"${key}": ${formatOutputString(obj[key])}, `;
      }
    })
    objStr += '}';
    return objStr;
  }

  function formatArrayIntoString(arr) {
    let arrStr = '[ ';
    arr.forEach( (el, i) => {
        if (i === arr.length - 1) {
          arrStr += `${formatOutputString(el)}`;
        } else {
          arrStr += `${formatOutputString(el)}, `;
        }
    })
    arrStr += ' ]';
    return arrStr;
  }
}