'use strict';

// // 1 constructor functions and the new operator

// const Person = function (firstName, birthYear) {
//   console.log(this);
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   //   Never do this
//   //   this.calAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const sonu = new Person('sonu', 1999);
// console.log(sonu);

// // 1 New {} is created
// // 2 function is called, this ={}
// // 3 {} linked to prototype
// // 4 function automatically return {}

// const samir = new Person('samir', 1998);
// const kabir = new Person('kabir', 1888);

// console.log(samir, kabir);

// console.log(samir instanceof Person);

// // 2 Prototypes

// Person.prototype.calAge = this.calAge = function () {
//   console.log(2037 - this.birthYear);
// };

// console.log(Person.prototype);

// sonu.calAge();
// samir.calAge();

// console.log(sonu.__proto__);
// console.log(sonu.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(sonu));
// console.log(Person.prototype.isPrototypeOf(kabir));

// // .prototypeoflinkedobjects

// Person.prototype.species = 'homo sapiens';

// console.log(sonu.species, kabir.species);

// console.log(sonu.hasOwnProperty('firstName'));

// // 3  Prototypal inheritance on built-in Object

// console.log(sonu.__proto__);

// // object.prototype (top of prototype chain)
// console.log(sonu.__proto__.__proto__);

// console.log(sonu.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// //prototype of array

// const arr = [34, 56, 66, 55, 5, 55, 55, 66, 66];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());
// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// // coding challenge 1

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // // protype

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`${this.make} is going at ${this.speed} km/h`);
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.make} is going at ${this.speed} km/h`);
// // };
// const bmwCar = new Car('BMW ', 120);
// const mercedes = new Car('mercedes ', 95);

// bmwCar.accelerate();

// bmwCar.accelerate();
// bmwCar.accelerate();

// console.log(bmwCar.__proto__);

// //  4   ES6 classes

// // class expression

// // const PersonCl = {};

// // class declaration

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // methods will be added to .prototype property
//   calAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet = function () {
//     console.log(`hey ${this.firstName}`);
//   };

//   get year() {
//     return 2037 - this.birthYear;
//   }

//   //set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // 6 static method

//   // static method
//   static hey() {
//     console.log('hey there');
//     console.log(this);
//   }
// }

// PersonCl.hey();

// PersonCl.prototype;
// const sameer = new PersonCl('kabir sharma', 1996);
// console.log(sameer);

// sameer.calAge();

// console.log(sameer.year);

// console.log(sameer.__proto__ === PersonCl.prototype);

// // PersonCl.prototype.greet = function () {
// //   console.log(`hey ${this.firstName}`);
// // };

// sameer.greet();

// //  5  setters and getters

// const walter = new PersonCl('walter white', 1965);

// const account = {
//   owner: 'sonu',
//   movements: [200, 540, 456, 120],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// // 7 object .create

// const PersonProto = {
//   calAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const jonas = Object.create(PersonProto);
// console.log(jonas);

// jonas.name = 'jonas';
// jonas.birthYear = 1997;
// jonas.calAge();

// console.log(jonas.__proto__ === PersonProto);

// const latika = Object.create(PersonProto);

// latika.init('latika', 1996);
// latika.calAge();

// //  coding challenge 2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCl('ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// // 8 inheritance between "classes": constructor function

// const ConstrPerson = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// ConstrPerson.prototype.calAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const jonasP = new ConstrPerson('sonu', 1999);

// const Student = function (firstName, birthYear, course) {
//   ConstrPerson.call(this, firstName, birthYear);
//   this.course = course;
// };

// // linking prototype
// Student.prototype = Object.create(ConstrPerson.prototype);

// Student.prototype.introduce = function () {
//   console.log(`my name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('mike', 2988, 'computer science');

// mike.calAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof ConstrPerson);

// Student.prototype.constructor = Student;

// console.dir(Student.prototype.constructor);

// console.log(mike);

// coding challenge 3

// // class 1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// // protype

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// // class 2
// const Ev = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // link the prototypes
// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new Ev('tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);

// tesla.brake();
// tesla.accelerate();
// tesla.accelerate();

// // 9  inheritance between "classes": ES6 classes

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // instance methods
//   calAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`hey ${this.firstName}`);
//   }

//   get year() {
//     return 2037 - this.birthYear;
//   }

//   //set a property that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // static method
//   static hey() {
//     console.log('hey there');
//     console.log(this);
//   }
// }

// class Student extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`my name is ${this.fullName} and i study ${this.course}`);
//   }

//   calAge() {
//     console.log(
//       `i am ${
//         2037 - this.birthYear
//       } years old, but as a student i feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new Student('martha sharma', 1999, 'computer sciense');
// martha.introduce();
// martha.calAge();
// console.log(martha);

//  10 inheritance between "classes" : object.create

const PersonProto = {
  calAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const jonas = Object.create(PersonProto);
console.log(jonas);

const StudentProto = Object.create(PersonProto);
const latika = Object.create(StudentProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`my name is ${this.firstName} and i study ${this.course}`);
};

latika.init('latika', 2000, 'commerce');
console.log(latika);
latika.introduce();
latika.calAge();

// 11  another class example
class Account {
  // 1) public fields (instances)
  locale = navigator.language;

  // 2) Private filds (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected properties
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account ${owner}`);
  }

  // 3) public methods
  // public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`loan approved`);
      return this;
    }
  }

  // 4 Private methods

  // #approveLoan(val) {
  //   return true;
  // }
}

const acc1 = new Account('sonu', 'EUR', 1111, []);

// acc1.movements.push(250);
// acc1.movements.push(-1500);
acc1.deposit(250);
acc1.withdraw(1500);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);

// console.log(acc1.#approveLoan(1000));

// 12 Encapsulation: private class fields methods

//  note ---->  check uper section

// 13 Chaining method in class

acc1.deposit(300).deposit(1000).withdraw(35).requestLoan(35000).withdraw(4000);

console.log(acc1.getMovements());

//  coding challenge 4

// class 1
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  // protype

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }
}

// class 2
class Ev extends Car {
  // private field
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new Ev('rivian', 120, 23);
console.log(rivian);
rivian.accelerate().accelerate().accelerate().chargeBattery(80).brake();
