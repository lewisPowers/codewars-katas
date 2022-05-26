function angle(n) {
  let res = 180;
  let sidesRemaining = n - 3;
  while (sidesRemaining > 0) {
    res += 180;
    sidesRemaining--;
  }
  return res;
}