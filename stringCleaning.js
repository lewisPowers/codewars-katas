function stringClean(s){
  return s.split('').filter( char => {
    if (isNaN(char) || char === ' ') return char;
  }).join('');
}