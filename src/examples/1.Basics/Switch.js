var age = 144;

switch(age){

    case 18:
        console.log('18 years old!!');
        break;
    case 21:
        console.log('21 years old!');
        break;
    case 12:
        console.log('12 years old!!');
        break;
    default:
        console.log('not valid age!!');
}

var count = 0;

while(count <=  10){
    count ++;
    switch(count){

        case 1:
            console.log('one printed!!');
            break;
        case 10:
            console.log('10 printed');
            break;
        case 3:
            console.log('3 printed');
            break;
        default:
            console.log('skipped a value');
    }

}