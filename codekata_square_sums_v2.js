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

//I need a function that resets the loop

let finalAnswer = getFinalArray(squaresArray);
console.log(finalAnswer);

///Gettting closer!

//I now need to be able to reset the entire squares array loop for elem 2
//might need while

function getFinalArray(inputArray) {
    let finalArray = [];
    let squaresArray = inputArray;
    let secondArray = [];

    for (initialElem of squaresArray) {
      finalArray.push(initialElem);

      console.log('initial element is:', initialElem);
      for (elem1 of finalArray) {
        for (elem2 of squaresArray) {
          let recentElem = finalArray.slice(-1)[0];
          isSquareVal = isSquare(recentElem, elem2);
          if (!finalArray.includes(elem2) && recentElem != elem2 && isSquareVal) {
            finalArray.push(elem2);
          }
        }
        console.log(finalArray);
        if (finalArray.length === squaresArray.length) {
          return finalArray;
        } else {
          finalArray.length = 0;
        }
      }
    }
    if (finalArray.length !== squaresArray.length) {
      return false;
    } else {
      return finalArray;
    }
  }

  let finalAnswer = getFinalArray(squaresArray);
  console.log(finalAnswer);
