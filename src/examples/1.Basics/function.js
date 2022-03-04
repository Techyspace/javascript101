
//a function which add two numbers, this function does'nt return anything

function sumOfTwoNumbers(number1,number2){
    var sum = number1 + number2;
    console.log('sum of ' +number1+ ' and ' +number2+ ' is ' + sum);
}

//call the function

sumOfTwoNumbers(10,3);

//return types (you can return any datatype)

function multiplication(number1,number2){
    var product = number1 + number2;

    return product;
    
}

var answer = multiplication(3,5);
console.log('our product is '+ answer);

// arrow function

const arrowFunction = () =>{

}

//BUILT IN FUNCTIONS, this are pre-defined function(check documentation)
console.log(Object.keys({name:'sainty',age:3}))
console.log("SAINTY".toLowerCase());
console.log("sainty".toUpperCase());

//link :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference