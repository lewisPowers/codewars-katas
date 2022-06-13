function solve(str) {
  let lowerCaseCount = 0;
  let upperCaseCount = 0;
  for (let i in str) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 91) upperCaseCount++
    if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) lowerCaseCount++
  }
  return upperCaseCount > lowerCaseCount ? str.toUpperCase() : str.toLowersCase()
}
// console.log(String.fromCharCode(65))