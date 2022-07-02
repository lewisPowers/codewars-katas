import frontend from '/modules/frontendModule.js';

function angle(n) {
  if (n < 3) return `A polygon cannot have ${n} sides!`;
  let res = 180;
  let sidesRemaining = n - 3;
  while (sidesRemaining > 0) {
    res += 180;
    sidesRemaining--;
  }
  return res;
}

angle.newName = 'Sum of Angles';
angle.info = 'Total sum of internal angles (in degrees) in an n-sided simple polygon.';
angle.link = 'https://www.codewars.com/kata/5a03b3f6a1c9040084001765';
angle.kyu = 7;
angle.inputWidth = 5;
frontend(angle, 5)