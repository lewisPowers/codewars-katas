function isValidWalk(walk) {
  if (walk.length !== 10) return false;
  let [xAxis, yAxis] = [0, 0]
  walk.forEach(direction => {
    if (direction === 'n') {
      yAxis++;
    } else if (direction === 's') {
      yAxis--;
    } else if (direction === 'e') {
      xAxis++;
    } else if (direction === 'w') {
      xAxis--;
    }
  })
  return xAxis === 0 && yAxis === 0;
}