import frontend from '/modules/frontendModule.js';

function calculator(numA, numB, operatorSign){
  let operators = {
    '+': numA + numB,
    '-': numA - numB,
    '/': numA / numB,
    '*': numA * numB
  }
  if (isNaN(numA) || isNaN(numB) || operators[operatorSign] == undefined) return 'unknown value';
  return operators[operatorSign];
}

calculator.link = 'https://www.codewars.com/kata/5810085c533d69f4980001cf';
calculator.kyu = 8;
calculator.newName = 'Simple Calculator';
calculator.info = `You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.`

frontend(calculator, 1, 2, "+") //  ===> 3
