import frontend from '/modules/frontendModule.js';

function multipleOfIndex(array) {
  return array.filter((element, index) => element % index === 0);
}

multipleOfIndex.newName = 'Multiple of Index';
multipleOfIndex.kyu = 8;
multipleOfIndex.link = 'https://www.codewars.com/kata/5a34b80155519e1a00000009';
multipleOfIndex.inputWidth = 20;
multipleOfIndex.info = `Returns a new array consisting of elements which are multiple of their own index in input array`;

frontend( multipleOfIndex, [22, -6, 32, 82, 9, 25]) // =>  [-6, 32, 25]
