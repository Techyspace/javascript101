/* A javascript variables is a placeholder that allows you to store values  
   Think of it as a bucket/container where you can store anything(datatype) you want
*/

//way of creating a variable ?

var nameOfYourVariable = "value";

//e.g
var myName = "sainty"; //data type string
var age = 12; // number
var hasMedicalAid = false; // boolean
var gender = undefined; //undefined

//to check data types you can use typeOf
var varType = typeof hasMedicalAid;
console.log("this is our type " + varType);

//console log  your value

console.log(nameOfYourVariable);

//SCOPE OF OUR VARIABLES
/*
Scope: Global scoped or function scoped. 
The scope of the var keyword is the global or function scope. 
It means variables defined outside the function can be accessed globally, 
and variables defined inside a particular function can be accessed within the function. */

//Const : you cannot give that variable another value later on (const is Block scoped)
//Let : you can change its value. you can't redeclare in the same block
//var : deals with global scope or function scope. you can redeclare as many time as you like

//E.G
var surname = "Swedish";

//test
const TestFunction = () => {
  let isDev = false;
  //isDev = true; YOU CAN REASIGN
  const yearsOfExperience = 90;
  //yearsOfExperience = 3;  DO NOT REASIGN
  if (isDev) {
    console.log(
      myName +
        " is a Developer. " +
        "with " +
        yearsOfExperience +
        " Years of coding"
    );
  } else {
    console.log(myName + " is not a Developer.");
  }
};
//console.log(isDev); //this is out of scope(is not defined)
//console.log(yearsOfExperience); //this is out of scope(is not defined)
console.log("my surname is " + surname); //you can call it anywhere.

//calling the function
TestFunction();
