import frontend from '/modules/frontendModule.js';

function chooseBestSum(maxMilesBeforeTired, maxTownsToVisit, listOfDistancesBetweenTowns) {
  if (listOfDistancesBetweenTowns.length < maxTownsToVisit) return null;
  let allPossibleRoutes = [];
  let distances = listOfDistancesBetweenTowns;
  for (let i = 0; i < distances.length - maxTownsToVisit; i++) {
    let firstNum = distances[i];
    let maxLen = maxTownsToVisit;
    let jump = 0;
    for (let j = i + 1; j < distances.length; j++) {
      let shortenedList = [];
      shortenedList.push(firstNum);
      while (shortenedList.length < maxTownsToVisit) {
        shortenedList.push(distances[j]);
        j++;
      }
      jump++;
      j = i + jump;
      allPossibleRoutes.push(sumArray(shortenedList))
    }
  }

  let answer = 0;

  allPossibleRoutes.forEach(route => {
    if (route > answer && route <= maxMilesBeforeTired) {
      answer = route;
    }
  })

  return answer || null;

  function sumArray(array) {
    return array.reduce((a,b) => a + b, 0);
  }
}

chooseBestSum.newName = 'Best Travel'
chooseBestSum.inputWidth = 9
chooseBestSum.kyu = 5;
chooseBestSum.link = 'https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/';
chooseBestSum.info = `Returns the greatest amount of miles without going over the limit.`;
let test = [91, 74, 73, 85, 73, 81, 87];
frontend(chooseBestSum, 230, 3, test);

// EXAMPLE
  // ts = [50, 55, 56, 57, 58]
  // chooseBestSum(163, 3, ts) -> 163

  // ts = [91, 74, 73, 85, 73, 81, 87]
  //   Test.assertEquals(chooseBestSum(230, 3, ts), 228)