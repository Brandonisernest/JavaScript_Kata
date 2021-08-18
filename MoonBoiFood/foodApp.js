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
  constructor(_score) {
    this.score = _score
  }

  goodMealList = [
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


  badMealList = [
    new Meal(
      'Gross Hot Pocket',
      'Dinner',
      'American',
      'https://www.thespruceeats.com/thmb/bdQcbuwkcj-I0O8WFCRaAhNZBGc=/2595x1726/filters:fill(auto,1)/Hotpockethoriz-39f64d7e4c5048e3af541c677b435351.jpg'
    )
  ];

  urlTest() {
    for (let meal of this.goodMealList) {
      console.log(meal.url);
    }
  }

  render() {
    let renderHook = document.getElementById('meal-output');
    // let renderHook = document.getElementById('meal-output')
    let goodMealIdx = Math.floor(Math.random() * this.goodMealList.length);
    let badMealIdx = Math.floor(Math.random() * this.badMealList.length);
 
    if (this.score > 0){
    renderHook.innerHTML = `<img src=${this.goodMealList[goodMealIdx].url}></img>`;
    return renderHook;}
    else { renderHook.innerHTML = `<img src=${this.badMealList[badMealIdx].url}></img>`;
    return renderHook;}
  }
}
