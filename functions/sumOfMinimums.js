function sumOfMinimums(arr) {
  // try Math.min(...nestArr) in next iteration
  let minimiumValues = [];
  arr.forEach(nestedArr => {
    minimiumValues.push(findSmallestsVal(nestedArr))
  })
  return minimiumValues.reduce((total, curr) => total + curr, 0)
  function findSmallestsVal(array) {
    return array.reduce((final, check) => {
      if (check < final) final = check;
      return final;
    }, Infinity)
  }
}