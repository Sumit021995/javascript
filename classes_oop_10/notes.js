// Object literal

// 1.Objects
//     JavaScript is designed around objects. An object is a collection of key-value pairs, where values can be primitives, other objects, or functions.
//     Objects in JavaScript can be created using object literals or through constructor functions.

const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    start: function() {
      console.log('Engine started');
    }
  };
  
  // Constructor function
  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.start = function() {
      console.log('Engine started');
    };
  }
  
  const myCar = new Car('Toyota', 'Camry', 2022);

  /*
  2.Prototypes
    Each object in JavaScript has an associated prototype, which is another object that it inherits properties and methods from.
    Prototypes are used to implement inheritance and to share methods and properties between objects.
  */
  // Prototype-based inheritance
Car.prototype.drive = function() {
    console.log('Car is driving');
  };
  
  myCar.drive(); // Output: Car is driving

  /*
  3.Constructor Functions
    Constructor functions are used to create objects with a common structure.
    They are invoked using the new keyword to create instances of objects.
  */

 
 function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

/*
4.Encapsulation
Encapsulation is the bundling of data and methods that operate on the data into a single unit, or object.
JavaScript supports encapsulation through the use of objects and closures.
*/
function Counter() {
    let count = 0;
  
    this.increment = function() {
      count++;
    };
  
    this.getCount = function() {
      return count;
    };
  }
  
  const counter1 = new Counter();
  counter.increment();
  console.log(counter.getCount()); // Output: 1
  
/*
5.Inheritance
Inheritance allows a new object to inherit properties and methods from an existing object.
In JavaScript, inheritance is achieved through the prototype chain.
*/

function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.makeSound = function() {
    console.log('Some generic sound');
  };
  
  function Dog(name) {
    Animal.call(this, name); // Call the constructor of the parent class
  }
  
  Dog.prototype = Object.create(Animal.prototype); // Set up the prototype chain
  Dog.prototype.constructor = Dog; // Set the constructor back to Dog
  
  Dog.prototype.bark = function() {
    console.log('Woof! Woof!');
  };
  
  const myDog1 = new Dog('Buddy');
  myDog.makeSound(); // Output: Some generic sound
  myDog.bark(); // Output: Woof! Woof!
  


//   Four Pillars of Object-Oriented Programming

/*
Encapsulation:

Definition: Encapsulation is the bundling of data (attributes) and the methods (functions) that operate on the data into a single unit, known as a class.
*/ 

function Counter() {
  let count = 0;

  this.increment = function() {
    count++;
  };

  this.getCount = function() {
    return count;
  };
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1


/*
Abstraction:

Definition: Abstraction involves simplifying complex systems by modeling classes based on the essential properties and behaviors they should have, while hiding unnecessary details.
*/ 
class Shape {
    constructor() {
      if (new.target === Shape) {
        throw new Error('Shape class cannot be instantiated directly.');
      }
    }
  
    draw() {
      // Abstract method
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    draw() {
      console.log(`Drawing a circle with radius ${this.radius}`);
    }
  }
  
/*
Inheritance:

Definition: Inheritance allows a new class (subclass/derived class) to inherit properties and behaviors from an existing class (superclass/base class). It promotes code reuse and helps in creating a hierarchy of classes.

*/ 
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log('Some generic sound');
    }
  }
  
  class Dog extends Animal {
    makeSound() {
      console.log('Woof! Woof!');
    }
  }
  
  const myDog = new Dog('Buddy');
  myDog.makeSound(); // Output: Woof! Woof!
  
/*
Polymorphism:

Definition: Polymorphism allows objects of different classes to be treated as objects of a common base class. It enables a single interface to represent different types and allows objects to be used interchangeably.

*/ 
class Shape {
    area() {
      // Abstract method
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  

  /*
  These principles collectively provide a foundation for creating maintainable, scalable, and organized code in an object-oriented programming paradigm. Keep in mind that JavaScript, being a versatile language, allows for flexible implementation of these principles. */