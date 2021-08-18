//Create a Meal Suggester for James and co

const mealBtn = document.getElementById('meal-btn');

class Meal {
  constructor(_name, _type, _style, _url) {
    this.name = _name;
    this.type = _type;
    this.style = _style;
    this.url = _url;
  }

}

class MealList {
  constructor() {}

  mealList = [
    new Meal(
      'Juicy Steak',
      'Dinner',
      'American',
      'https://media-cdn.tripadvisor.com/media/photo-s/0b/ff/0d/64/delicious-steak-at-the.jpg'
    ),
    new Meal(
      'Sweet Affogato',
      'Dessert',
      'Italian',
      'https://static01.nyt.com/images/2021/08/15/magazine/affogato/affogato-articleLarge-v2.jpg'
    ),
    new Meal(
      'Creamy Eggs Benedict',
      'Breakfast',
      'American',
      'https://prods3.imgix.net/images/articles/2017_08/Non-Feature-eggs-benedict-recipe-breakfast1.jpg?auto=format%2Ccompress&ixjsv=2.2.3'
    ),
    new Meal(
      'Cambodian Nom Pajok',
      'Dinner',
      'Cambodian',
      'https://honestcooking.com/wp-content/uploads/2017/08/Nom-Ban-Chok.-Fish-Curry-Noodle-4-1.jpg'
    ),
  ];

  urlTest() {
    for (let meal of this.mealList) {
      console.log(meal.url);
    }
  }

  render() {
    let renderHook = document.getElementById('meal-output');
    let mealIdx = Math.floor(Math.random() * this.mealList.length);
  
    renderHook.innerHTML = `<img src=${this.mealList[mealIdx].url}></img>`;
    return renderHook;
  }
}

function mealBtnHandler() {
    let newMealList = new MealList();
    newMealList.render();
}
mealBtn.addEventListener('click', mealBtnHandler);
