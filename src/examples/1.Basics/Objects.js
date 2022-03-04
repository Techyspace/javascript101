/*
 Javascript Object is collection of related variables.
 An object is a collection of properties, and
  a property is an association between a name (or key) and a value.
  A property's value can be a function, in which case the property is known as a method.

*/

//structure

const Person = {
  name: "sainty",
  surname: "Swedish",
  age: 12,
};

//Acces values inside Object

console.log(Person); //this will print your object

//to acces them see below

console.log(Person.name);
console.log(Person.surname);
console.log(Person.age);

//you can add object inside another object

const Reperson = {
  name: "sainty",
  surname: "Swedish",
  age: 12,
  address: {
    firstAddress: "Gauteng",
    secondLine: "Centurion",
    postalCode: "1234",
  },
};
//print Address object
console.log(Reperson.address);
//Access second object, json returns a string of values

console.log(JSON.stringify(Reperson.address));
console.log(Object.values(Reperson)); //return an array

//setting a property as a function

const DriveFunction = (ready) => {
  if (ready) {
    console.log("car is ready!");
  } else {
    console.log("car need to be  licenced!");
  }
};

const car = {
  drive: DriveFunction(false),
};

//car test

console.log(car.drive);
