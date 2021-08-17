const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

let returnValue = '';
let checkCounter = 0; //counter to evenly distribute types of pw elements

function generateHandler() {
  const pwLength = lenEl.value;

  for (let pwCounter = 0; pwCounter < pwLength; ) {
    randomVal = Math.floor(Math.random() * 4);
    // console.log('Random Val:', randomVal);
    if (randomVal === 0 && upperEl.checked) {
      getUpperCase();
      pwCounter++;
    } else if (randomVal === 1 && lowerEl.checked) {
      getLowerCase();
      console.log(lowerEl.checked);
      pwCounter++;
    } else if (randomVal === 2 && numberEl.checked) {
      getNumbers();
      pwCounter++;
    } else if (randomVal === 3 && symbolEl.checked) {
      getSymbols();
      pwCounter++;
    } else if (
      !upperEl.checked &&
      !lowerEl.checked &&
      !numberEl.checked &&
      !symbolEl.checked
    ) {
      return;
    }
  }

//   alert(returnValue);
//   alert(returnValue.length);
pwEl.innerText = returnValue;
  resetPw();
}

function resetPw() {
  returnValue = '';
}

function getUpperCase() {
  upperIdx = Math.floor(Math.random() * upperLetters.length);
  returnValue += upperLetters[upperIdx];
}

function getLowerCase() {
  lowerIdx = Math.floor(Math.random() * lowerLetters.length);
  returnValue += lowerLetters[lowerIdx];
}

function getNumbers() {
  numbersIdx = Math.floor(Math.random() * numbers.length);
  returnValue += numbers[numbersIdx];
}

function getSymbols() {
  symbolIdx = Math.floor(Math.random() * symbols.length);
  returnValue += symbols[symbolIdx];
}

generateEl.addEventListener('click', generateHandler);

