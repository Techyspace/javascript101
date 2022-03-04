var numbers = [1,2,3,4,5,6];

//map 
var newNumbers =numbers.map(
    (item) => (item +1)
    
    );

console.log(newNumbers);

//Reduce

var value = numbers.reduce(
    (accumulator,current) => (accumulator + current )
    )

    console.log(value);

    
//filter 

var filtered = numbers.filter( (item) => ( item % 2 === 0) )

console.log(filtered);