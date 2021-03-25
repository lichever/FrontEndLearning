/**
 * if
 * switch
 * 
 */

var a = 6;

/* if( a < 4 ){
	console.log('条件成功~~');
}


if(a < 6){

}else if(a > 8){
	console.log('a > 8执行了~~')
}  */

if (a < 6) {
    console.log('执行了a < 6')
} else if (a < 8) {
    console.log('执行了a < 8')
} else {
    console.log('执行了else')
}



/* var a = 1;

switch (a) {
    case 1:
        console.log('a = 1');
        break;
    case 2:
        console.log('a = 2');
        break;
    default:
        console.log('a = default');
}
 */


var b='1';

//Switch cases use strict comparison (===).
//The values must be of the same type to match.
switch (b) {
    case "1":
        console.log('a');
        break;
    case  1:
        console.log('b');
        break;
    default:
        console.log('default');
}