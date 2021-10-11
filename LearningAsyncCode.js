//callbacks

const button = document.querySelector('button');
const output = document.querySelector('p');

//multiple callback example
//uses setTimeout()
// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition(
//     //arg 1: success callback function
//     (posData) => {
//       setTimeout(() => {
//         console.log(posData);
//       }, 2000);
//     },
//     //arg 2: error callback function
//     (error) => {
//       console.log(error);
//     }
//     //arg 3: options
//   );
//   console.log('getting position');
// }

button.addEventListener('click', trackUserHandler);

//promises

//Write your callback in a seperate function "setTimer",
//so you can re-use setTimer elsewhere
const setTimer = (duration) => {
  //Must create a promise using "new Promise()"
  //like a class
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!'); //built in function that marks the callback as resolved
    }, duration);
  }); //constructor takes a function as arg

  return promise;
};

// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition(
//     //arg 1: success callback function
//     (posData) => {
//       setTimer(2000).then((data) => {
//         console.log(data, posData);
//       }); //setTimer is defined to return a promise. Once promise is returned, the then statement is executed
//     },
//     //arg 2: error callback function
//     (error) => {
//       console.log(error);
//     }
//     //arg 3: options
//   );
//   setTimer(1000).then(() => {
//     console.log('Timer done!');
//   });
//   console.log('getting position');
// }

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error); //mark promise as failed
      },
      opts
    );
  });
  return promise;
};

//multipromise example
function trackUserHandler() {
  //Because I created the getPosition function with a promise
  //I can remove the chunk of code in prev trackUserHandler() example
  //CLEANER CODE!

  let positionData;

  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer();
    })
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log('Timer done!');
  });
  console.log('getting position');
}

//Async Awaits

//The function with async keyword automatically returns a promise
//The async keyword wraps all the promise/.then()
//It is basically the promise code that is condensed "cosmetically" behind the scenes
//We lose the promise specific error handling,
// but our code becomes much more readible/condensed.
//To do any type of error handling:
//use standard try/catch

//The async await version of the above promise version
async function trackUserHandler() {
  let posData;
  let timerData;
  try {
    const posData = await getPosition(); //getPosition is still declared as a promise function above
    const timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
}

///Notes
// In my example, the resolve in my promise
//is the setTimeout() function
//Once that setTimeout() function executes
//the promise is resoleved
//trivial example
