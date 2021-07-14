//Goal is to practice OOP in Javascript

const peopleRoom = [];


//create a person
class Person {
  defaultName = 'Default Name';
  room = [];
  //   room = new RoomGenerator();

  constructor(name, age, gender, relationship) {
    if (this.name === '') {
      this.name = this.defaultName;
    } else {
      this.name = name;
    }

    this.age = age;

    this.gender = gender;
    this.relationship = relationship;
  }

  addToList() {
    peopleRoom.push(this.name);
  }
}

let names = [
  'bra',
  'jen',
  'jai',
  'chr',
  'mar',
  'rya',
  'hen',
  'gar',
  'dan',
  'gra',
  'joe',
  'jon',
];

for (const name of names) {
    //hard coding last 3 args for simplicity
  p = new Person(name, 30, 'male', 'married');
  p.addToList();
}

console.log(peopleRoom);

//initialize a room full of people
//the class receives a list of people and organizes them into lists of 5
class RoomOfPeople {
  constructor(room) {
    this.room = room;
  }

  roomGenerator() {
    let newRoom = [];
    //let roomIterator = this.room;

    for (let i = 0; i < 5; i++) {
      let person = this.room[Math.floor(Math.random() * this.room.length)];
      //let idx = roomIterator.indexOf(person);
      newRoom.push(person);
      //roomIterator.splice(idx, 1);
    }
    return newRoom;
  }
}

function addPersonHandler() {
  let rearragedRoom = new RoomOfPeople(peopleRoom).roomGenerator();

  console.log(rearragedRoom);
  return rearragedRoom;
}

//addPersonHandler();
const addPersonBtn = addBtn.addEventListener('click', addPersonHandler);
