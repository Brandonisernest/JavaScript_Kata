class Rectangle {
  //set up obj
  constructor(_width, _height, _color) {
    console.log('The rectangle is being created');
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }
  //getters and setters are ways to define methods that also behave as properties and vice versa
  get area() {
    return this.width * this.height;
  }

  //setter CHANGES the initial properties from the constructor to NEW values

  set area(area) {
    this.width = Math.sqrt(area);
    this.height = this.width;
  }

  getArea() {
    return this.width * this.height;
  }
}

// let square1 = new Square(4);
// console.log(square1.area); //like a function that doesn't need to get "called" via ()
// console.log(square1.getArea()); //

//Practice Getters and Setters
//Getters Get a value (uses props like methods and vice versa)
//Setters set/mutate existing properties to new values

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  get personInfo() {
    // return 'Hi';
    return `My Name is: ${this.name} and I am ${this.age} years old!`;
  }

  set personProp(value) {
    this.name = value[0];
    this.age = value[1];
  }
}

// let person1 = new Person('Brandoodoo', 40);
// console.log(person1);
// console.log(person1.personInfo);
// person1.personProp = ['Brannnd', 2];
// console.log(person1);
// console.log(person1.personInfo);

//Static Methods
//Methods that don't need obj instantiation to be used
//Often used as utility

class NewSquare {
  constructor(_width) {
    this.width = _width;
    this.height = _width;
  }
  //No need to use "this" kwd because no instances is binded to a static method
  static equals(a, b) {
    return a.width * a.height === b.width * b.height;
  }

  static isValidDimensions(width, height) {
    return width === height;
  }
}

let square1 = new NewSquare(8);
let square2 = new NewSquare(9);
console.log(NewSquare.equals(square1, square2));
console.log(NewSquare.isValidDimensions(7, 6));

//Extends and Inheritance

class NewPerson {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  describe() {
    console.log(`My Name is: ${this.name} and I am ${this.age} years old!`);
  }
  code() {
    console.log(`${this.name} is coding`);
  }
}

class Programmer extends NewPerson {
  constructor(_name, _age, _yearsOfExperience) {
    //call the parent constructor
    super(_name, _age);
    this.yearsOfExperience = _yearsOfExperience;
  }
}

let person1 = new NewPerson('Jeff', 45);
let programmer1 = new Programmer('Dom', 56, 12);

console.log(person1);
console.log(programmer1);
programmer1.code();

const programmers = [
  new Programmer('Dom', 56, 12),
  new Programmer('Brand', 32, 1),
];

function developSoftware(programmers) {
  for (let programmer of programmers) {
    programmer.code();
  }
}


developSoftware(programmers);

///Very helpful video