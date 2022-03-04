/*

    for - loops through a block of code a number of times
    for/in - loops through the properties of an object
    for/of - loops through the values of an iterable object
    while - loops through a block of code while a specified condition is true
    do/while - also loops through a block of code while a specified condition is true



*/

var members = ['Winny','John','Sivis','Ian','Leon','Detoit'];

//For loop
console.log('for loop');
for(var item = 0; item < members.length; item++ ){
    console.log(members[item])
    console.log('*******')
}

//for in (position)
console.log('for in');
for(var item in members){
    console.log(members[item])
    console.log('*******')
}

//for of. (Value at that position)
console.log('for of');
for(var item of members){
    console.log(item)
    console.log('*******')
}

//while loop
console.log('while loop');
var item = 0;
while(item < members.length){
    console.log(members[item])
    console.log('*******')
    item++;
}

// do while
console.log('do while');
var doitem = 0;
do{
    console.log(members[doitem])
    console.log('*******')
    doitem ++;
}
while(doitem < members.length)