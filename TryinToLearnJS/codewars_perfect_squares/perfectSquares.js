const btn = document.getElementById('btn');

n = 15;
let squaresArray = [];

for (let i = 1; i <= n; i += 1) {
  squaresArray.push(i);
}

//check if adjascent values are perfect square when summed
function isSquare(elem1, elem2) {
  total = elem1 + elem2;
  sqrtVal = Math.sqrt(total);

  if (sqrtVal.isInteger) {
    return sqrtVal > 1 && sqrtVal % 1 === 0;
  } else {
    return sqrtVal > 1 && sqrtVal % 1 === 0;
  }
}

//function for removing specific items from JS Array
function arrayRemover(elem, array) {
  const index = array.indexOf(elem);
  if (index > -1) {
    array.splice(index, 1);
    return array;
  }
}

//function to initialize finalArray with random value
function finalArrayHandler(array) {
  const randomVal = Math.floor(Math.random() * array.length + 1);

  let returnedArray = [];
  returnedArray.push(randomVal);
  return returnedArray;
  // return randomVal;
}

function getFinalArray(inputArray) {
  let finalArray = [];

  for (elem1 of inputArray) {
    finalArray.push(elem1);
    //console.log('initial element is:', elem1);

    for (let i = 0; i < inputArray.length; i++) {
      let recentElem = finalArray.slice(-1)[0];
      let elem2 = inputArray[i];
      isSquareVal = isSquare(recentElem, elem2);
      if (!finalArray.includes(elem2) && recentElem != elem2 && isSquareVal) {
        finalArray.push(elem2);
        i = 0;
      }
    }

    //console.log(finalArray);
    if (finalArray.length === inputArray.length) {
      return finalArray;
    } else {
      finalArray.length = 0;
    }
  }
  if (finalArray.length !== inputArray.length) {
    return false;
  } else {
    return finalArray;
  }
}

btn.addEventListener('click', getFinalArray.bind(this, squaresArray));
