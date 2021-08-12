class Person {
  constructor(name, url, position, theme) {
    this.name = name;
    this.url = url;
    this.position = position;
    this.theme = theme;
  }

  render() {
    //1. Call the "Main" HTML element where you want to render your items
    const renderHook = document.getElementById('app');
    //2.Create new HTML items to append to the "Main" Item
    const personEl = document.createElement('li');
    personEl.className = 'product-item'; //Named poorly because I'm using CSS lables
    personEl.innerHTML = `
        <div>
        <img src="${this.url}" alt="${this.name}"
        <div class="product-item__content">
        <h2>Hi! My name is ${this.name}</h2>
        <h3>My current position is: ${this.position}</h3>
        <p> This is my theme song:
        <iframe width="420" height="315" src="${this.theme}"> </iframe>
</p>
<h4 style="background-color:black;"> .</h4>
        </div>
        
        `;
    //Append new HTML item to Main Item
    renderHook.append(personEl);
    //return newly edited "Main" HTML
    return renderHook;
    // return personEl;
  }}

const peopleList = [
  {
    name: 'Jamebroni',
    url: 'https://m.media-amazon.com/images/I/41bt2nub+3L._AC_.jpg',
    position: 'Chief Beef',
    theme: 'https://www.youtube.com/embed/MtN1YnoL46Q'
  },
  {
    name: 'ChristobellXoXo',
    url: 'https://static.wikia.nocookie.net/muc/images/7/7f/Jimmy_Timmy.jpg/revision/latest?cb=20130716094737',
    position: 'Song Person',
    theme: 'https://www.youtube.com/embed/MtN1YnoL46Q'
  },
  {
    name: 'Professor Hank',
    url: 'https://m.media-amazon.com/images/I/41a+9E6qtNL._AC_SS450_.jpg',
    position: 'Illich Acolyte',
    theme: 'https://www.youtube.com/embed/MtN1YnoL46Q'
  },
  {
    name: 'Fryin Ry',
    url: 'https://static.wikia.nocookie.net/edwikia/images/6/64/Rolf_transparent.png/revision/latest/scale-to-width/360?cb=20171030001040',
    position: 'Air Marshaller',
    theme: 'https://www.youtube.com/embed/MtN1YnoL46Q'
  },
  {
    name: 'The Great Brandini',
    url: 'https://static.wikia.nocookie.net/edfanon/images/d/dd/Edd.jpg/revision/latest?cb=20141201012822',
    position: 'Unpaid Intern',
    theme: 'https://www.youtube.com/embed/MtN1YnoL46Q'
  },
];

//render Page
for (person of peopleList) {
  const personObj = new Person(
    person.name,
    person.url,
    person.position,
    person.theme
  );

  personObj.render();
}


// const peopleList = {
//   peoples: [
//     new Person(
//       'Jamebroni',
//       'https://m.media-amazon.com/images/I/41bt2nub+3L._AC_.jpg',
//       'Chief Cheif',
//       'https://www.youtube.com/embed/MtN1YnoL46Q'
//     ),
//   ],

//   //code to render person on page
//   render() {
//     const renderHook = document.getElementById('app');
//     const personList = document.createElement('ul');
//     personList.className = 'product-list';

//     for (person of this.peoples) {
//       const personEl = document.createElement('li');
//       personEl.className = 'product-item'; //Named poorly because I'm using CSS lables
//       personEl.innerHTML = `
//           <div>
//           <img src="${person.url}" alt="${person.name}"
//           <div class="product-item__content">
//           <h2>Hi! My name is ${person.name}</h2>
//           <h3>My current position is: ${person.position}</h3>
//           <p> This is my theme song:
//           <iframe width="420" height="315" src="${person.theme}"> </iframe>
//   </p>
//           </div>
//           `;
//       personList.append(personEl);
//     }
//     renderHook.append(personList);
//   },
// };

// peopleList.render();
