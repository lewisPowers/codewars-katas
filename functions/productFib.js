import frontend from '/modules/frontendModule.js';

function productFib(prod){
  function pushNextFibSequence() {
    let last = productFib.fib.length - 1;
    productFib.fib.push(productFib.fib[last] + productFib.fib[last - 1]);
  }

  if (!productFib.fib) productFib.fib = [1, 1];

  let targetNum = Math.ceil(Math.sqrt(prod)) * 1.2;
  let result = [];

  while (targetNum >= productFib.fib[productFib.fib.length - 1]) pushNextFibSequence();

  let num;
  let next;
  for (let i = 0; i < productFib.fib.length - 1; i++) {
    num = productFib.fib[i];
    next = productFib.fib[i + 1];
    if (next > targetNum && num < targetNum) {
      result.push(num, next);
      if (num * next === prod) {
        result.push(true);
      } else {
        result.push(false);
      }
      return result;
    }
  }

}

productFib.info = `The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.`;
productFib.link = 'https://www.codewars.com/kata/5541f58a944b85ce6d00006a';
productFib.newName = 'Product of Consecutive Fib Numbers';
productFib.kyu = 5;
// productFib.inputWidth = 10;

frontend(productFib, 4895) // ==> [55, 89, true]

// productFib(4895), [55, 89, true]
// productFib(5895), [89, 144, false]


