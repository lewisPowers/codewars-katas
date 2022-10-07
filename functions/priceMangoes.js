import frontend from '/modules/frontendModule.js';

function mango(quantity, price){
  const freeMangoes = Math.floor(quantity / 3);
  const mangoesCharged = quantity - freeMangoes;
  return mangoesCharged * price;
}

mango.newName = 'Price of Mangoes';
mango.info = `There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.`;
mango.link = 'codewars.com/kata/57a77726bb9944d000000b06';
mango.kyu = 8;
// mango.changeMargin = 10;
frontend(mango, 3, 3) // ===> 6

 // mango(9, 5) ==> 30


