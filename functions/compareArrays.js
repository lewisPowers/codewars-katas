import frontend from '/modules/frontendModule.js';
// Are they the "same"?
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
function comp(array1, array2){
  if (!Array.isArray(array1) || !Array.isArray(array1)) return false;
  if (array1 == null || array2 == null) return false;
  let slicedArr1 = array1.slice();
  let slicedArr2 = array2.slice();
  while (slicedArr1.length && slicedArr2.length) {
    let squared = slicedArr1[0] * slicedArr1[0];
    if (slicedArr2.includes(squared)) {
      slicedArr1.shift();
      slicedArr2.splice(slicedArr2.indexOf(squared), 1)
    } else {
      return false;
    }
  }
  return slicedArr1.length === 0 && slicedArr2.length === 0 ? true : false;
}

comp.link = 'https://www.codewars.com/kata/550498447451fbbd7600041c';
comp.kyu = 6;
comp.newName = "Are they the 'same'?";
// comp.inputWidth = 8;
comp.info = `Checks whether two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.`
let testArr1 = [121, 144, 19, 161, 19, 144, 19, 11];
let testArr2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
frontend(comp, testArr1, testArr2)