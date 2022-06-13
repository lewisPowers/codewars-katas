function stockList(listOfArt, listOfCat){
  let isEmpty = true;
  let storage = listOfCat.reduce( (result, check) => {
    result[check] = 0;
    return result;
  }, {} );
  listOfArt.forEach( bookStr => {
    if (bookStr[0] in storage) {
      let numOfBooks = Number(bookStr.split(' ')[1])
      if (numOfBooks > 0) isEmpty = false;
      storage[bookStr[0]] += numOfBooks;
    }
  });
  return isEmpty ? '' : listOfCat.map(code => {
    return code = `(${code} : ${storage[code]})`;
  }).join(' - ');
}
// console.log(stockList(['ABAR 200', 'CDXE 500', 'BKWR 250', 'AFRA 333'], ['A', 'B']));
