const moonBtn = document.getElementById('moon-btn');
const moonBoiContainer = document.getElementById('moon-army-container');
// const inputBar = document.getElementById('input-bar');
let moonBoiArr = [];

function inputHandler() {
  const moonBoi = {
    name: '',
    age: 0,
    imageUrl:''
  };

  const urlArr = ['https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png'
];

  const nameBar = document.getElementById('name-bar');
  const ageBar = document.getElementById('age-bar');

  moonBoi.name = nameBar.value;
  // moonBoi.age = parseInt(ageBar.value);

  if (isNaN(parseInt(ageBar.value))){
    moonBoi.age = Math.floor(Math.random() * 1000);
  } else {
    moonBoi.age = ageBar.value;
  }

  moonBoi.imageUrl = urlArr[Math.floor(Math.random() * urlArr.length)];
  return moonBoi;
}

function moonBtnHandler() {
  const moonBoi = inputHandler();
  moonBoiArr.push(moonBoi);
  //   console.log(moonBoiArr);
  moonBoiRender();
}

function moonBoiRender() {
  // const moonBoiContainer = document.getElementById('moon-army-container');
  

  moonBoiArr.forEach((boi) => {
    // const moonBoiContainer = document.getElementById('moon-army-container');

    const moonBoiDiv = document.createElement('div');
    const moonEl = document.createElement('ul');
    const deleteBtn = document.createElement('button');
    moonEl.innerHTML = `
    <div> My name is ${boi.name} and I am ${boi.age} years old!
      <div class = 'moon-boi-div'>
        <img src = ${boi.imageUrl}>
      </div>
    </div>
    `;
    deleteBtn.textContent = 'Kill the MoonBoi?'
  

    moonBoiDiv.appendChild(moonEl); 
    moonBoiDiv.appendChild(deleteBtn);
    moonBoiContainer.appendChild(moonBoiDiv);
    deleteBtn.addEventListener('click', deleteBtnHandler.bind(this));
  
    
  });

  moonBoiArr = []; //Reset array so you don't duplicate in render
  return moonBoiContainer;
}

function deleteBtnHandler(ev) {
  // console.log(renderhook);
  // console.log(moonBoiContainer);
    moonBoiContainer.removeChild(ev.currentTarget.parentNode);
}

moonBtn.addEventListener('click', moonBtnHandler);


//Ask Henry:
//The code above works...however it doesn't when I declare "moonBoiContainer" as a local var inside moonBoiRender()
//I can't seem to get deleteBtn to work when I declare locally