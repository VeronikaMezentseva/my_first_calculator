const numbers = document.querySelectorAll('.num');
const tabletEnter = document.querySelector('.tablet-enter');

let operator;

function print(currentButton) {
  console.log(currentButton.textContent);
  tabletEnter.textContent = tabletEnter.textContent + currentButton.textContent;
}

function calcIfResultCalculated() {
  if (document.querySelector('.tablet-result').textContent !== '') {
    
  }
}

document.querySelector('.sum').addEventListener('click', calcIfResultCalculated);
document.querySelector('.subtract').addEventListener('click', calcIfResultCalculated);
document.querySelector('.devider').addEventListener('click', calcIfResultCalculated);
document.querySelector('.multiply').addEventListener('click', calcIfResultCalculated);



function calc() {
 if (document.querySelector('.tablet-result').textContent == '') {
  console.log(tabletEnter.textContent);
  let equation = tabletEnter.textContent;
  let enteredSymbolsArr = equation.split('');
  let result;
  enteredSymbolsArr.forEach((item) => {
   switch(item) {
     case '+':
       operator = '+';
       break;
     case '-':
       operator = '-';
       break;
     case '*':
       operator = '*';
       break;
     case '/':
       operator = '/';
       break;
   }
  }); //сюда передать функцию которая вытаскивает оператор
  let operandsArr = equation.split(operator);
  operandsArr.forEach(() => {
   switch (operator) {
     case '+':
       result = +operandsArr[0] + +operandsArr[1];
       break;
     case '-':
       result = +operandsArr[0] - +operandsArr[1];
       break;
     case '*':
       result = +operandsArr[0] * +operandsArr[1];
       break;
     case '/':
       result = +operandsArr[0] / +operandsArr[1];
       break;
   }
  });
  document.querySelector('.tablet-result').textContent = result;
  console.log(result);
  operator = undefined; //??
 }
}

document.querySelectorAll('.button').forEach((currentButton) => currentButton.addEventListener('click', () => print(currentButton)));

let buttonResult = document.querySelector('.result');
buttonResult.addEventListener('click', calc); //сюда передавать функцию calc

function deleteLastEnteredSymbol() {
  let currentString = tabletEnter.textContent;
  console.log(currentString);
  currentString = currentString.slice(0, -1);
  console.log(currentString);
  tabletEnter.textContent = currentString;
}

document.querySelector('.delete').addEventListener('click', deleteLastEnteredSymbol); //передать удаляющую функцию

function clearHistory() {
  tabletEnter.textContent = '';
  document.querySelector('.tablet-result').textContent = '';
}

document.querySelector('.c').addEventListener('click', clearHistory);

function powered() {
  let poweredNum = +tabletEnter.textContent * +tabletEnter.textContent;
  document.querySelector('.tablet-result').textContent = poweredNum;
}

document.querySelector('.x-doubled').addEventListener('click', powered);

function deleteLastElementOfString() {
  document.querySelector('.tablet-result').textContent = '';
  let currentString = document.querySelector('.tablet-enter').textContent;
  console.log(currentString);
  if (typeof(operator) !== 'undefined') {
    currentString = currentString.split(operator);
    console.log(currentString);
    console.log(operator + 'hi1');
    if (currentString[currentString.length - 1] == '') {
      currentString.pop();
      console.log(currentString);
      tabletEnter.textContent = currentString.join('');
      console.log(operator + 'hi2');
      operator = undefined;
    }
    if (currentString.length == 2) {
      currentString.pop();
      currentString.push(operator);
      document.querySelector('.tablet-enter').textContent = currentString.join('');
      console.log(currentString);
      console.log(operator + 'hi3');
    }
  }
  else {
    tabletEnter.textContent = '';
    console.log(operator);
  }
}

document.querySelector('.ce').addEventListener('click', deleteLastElementOfString);

document.querySelector('.sum').addEventListener('click', () => {operator = '+'});
document.querySelector('.subtract').addEventListener('click', () => {operator = '-'});
document.querySelector('.devider').addEventListener('click', () => {operator = '/'});
document.querySelector('.multiply').addEventListener('click', () => {operator = '*'});
