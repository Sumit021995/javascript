# javascript and classes

Q.1- Do javaScript really have classes?

JavaScript does have a concept called "classes" introduced in ECMAScript 2015 (ES6), but it's important to note that JavaScript's classes are syntactic sugar over its existing prototype-based inheritance system. JavaScript's prototype-based inheritance is different from the class-based inheritance found in some other languages like Java or C++.

The class syntax in JavaScript provides a more convenient and familiar way to define constructor functions and prototype methods. It doesn't introduce classical class-based inheritance like in Java. Instead, it uses prototypes to achieve a form of object-oriented programming.

## OOP - Object oriented Programming

Object-oriented programming (OOP) is a programming paradigm that uses objects to organize code. In JavaScript, OOP is achieved through the use of objects, prototypes, and the prototype chain. While JavaScript is a prototype-based language, it supports object-oriented programming principles.


Here are key concepts related to OOP in JavaScript:
1.Objects
    JavaScript is designed around objects. An object is a collection of key-value pairs, where values can be primitives, other objects, or functions.
    Objects in JavaScript can be created using object literals or through constructor functions.
2.Prototypes
    Each object in JavaScript has an associated prototype, which is another object that it inherits properties and methods from.
    Prototypes are used to implement inheritance and to share methods and properties between objects.
3.Constructor Functions
    Constructor functions are used to create objects with a common structure.
    They are invoked using the new keyword to create instances of objects.
4.Encapsulation
    Encapsulation is the bundling of data and methods that operate on the data into a single unit, or object.
    JavaScript supports encapsulation through the use of objects and closures.
5.Inheritance
    Inheritance allows a new object to inherit properties and methods from an existing object.
    In JavaScript, inheritance is achieved through the prototype chain.

These are fundamental concepts of OOP in JavaScript. While JavaScript's approach to OOP is prototype-based, ES6 introduced a more familiar class syntax, which is essentially syntactic sugar over the existing prototype system.    

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism