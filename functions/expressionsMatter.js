import frontend from '/modules/frontendModule.js';

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}
expressionMatter.newName = 'Expressions Matter';
expressionMatter.kyu = 8;
expressionMatter.link = 'https://www.codewars.com/kata/5ae62fcf252e66d44d00008e'
expressionMatter.inputWidth = 3;
expressionMatter.info = `Given three integers a ,b ,c, this function returns the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words, the function tries every combination of a,b,c with [*+()] , and returns the Maximum Obtained`

frontend(expressionMatter, 9, 13, -3)
