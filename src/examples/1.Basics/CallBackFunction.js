function callBackExample(birthYear,CurrentYear, callback){
  console.log(callback(birthYear,CurrentYear))
}

var callback = function(birthYear,CurrentYear){
    return 'Hellos ' + 'your age is ' + (CurrentYear - birthYear) ;
}

callBackExample(2007,2022,callback)