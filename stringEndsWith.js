function solution(str, ending){
  let start = str.length - ending.length;
  return str.slice(start) === ending;
}