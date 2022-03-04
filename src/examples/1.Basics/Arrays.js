/*
Array allow you to orderly store list of items (Can be of different types)

*/

//structure

var coders = ['coder1','coder2','coder3','coder4']  // you can add different types

//positions

console.log(coders[0]); // position count from 0 upto n

//length

console.log(coders.length); // this returns number of items in an array.

//loop through aray
for (var item of coders){
  console.log(item);
}

//with this one you have access to index

coders.forEach(function(item,index)
{ 
    console.log(index + ' ***** ' + item);
})