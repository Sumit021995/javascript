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