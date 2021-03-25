/* 
two  ways to declare function
1. function  a( 参数 ){}   声明会前置

2. var  a  =  function( 参数 ){}  匿名函数


*/



//helper function

function print (arg){

    console.log(arg);
}
//////////////////////////////////////////////////////////////////////////////


//函数 实参  形参可以不匹配。。
function getSum(num1, num2) {
    print(num1+num2);
    
}


getSum(1,2,3);// 多了：只取到形参个数
getSum(1);// 少了： num2是变量 但没有值进来，所以num2是undined


//return an array?
function getArr(len)
{
    var arr=[];
    for (let index = 0; index < len; index++) {
        arr[index]=index+1;
        
    }

    return arr;
}

var res1=getArr(5);
print(res1);



//当不确定有多少个参数传递，可以用arguments which is the built-in object of the function
//arguments store all the passed input 
// arguments is a peudo array:1. has length; 2. can use [] index; 3. has no real array's functions
function argTest() {

    print(arguments.length);
    print(arguments);
    print(arguments[1]);
    
}

argTest(1,'asd',3);


//anonymous func

var f=function(arg){ print(arg); return ++arg;};

var qq=f(12);
print(typeof(f));
print(qq);