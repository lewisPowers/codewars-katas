import frontend from '/frontendModule.js';
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]
// area of two sides is w * h
// area of two sides is d * h
// area of two last sides is w * d
  // getSize(4, 2, 6) ==> two sides area = 16, two sides = 24, last two = 48
  // ==> [88, 48]
function getSize(w, h, d) {
  let area = 2 * ( (w * h) + (d * h) + (w * d) );
  let volume = w * h * d;
  return [ area, volume ]
}
getSize.newName = 'Area & Volume of Box'
frontend(getSize, 10, 20, 5)
