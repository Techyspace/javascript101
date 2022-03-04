

var item = 0;
while(item < 10){
    item ++;
    
    if(item == 4){
       // continue;  //the iteration will skip 4
        break;    // we will stop at 4 (we won't print it)
    }
    console.log(item)
}