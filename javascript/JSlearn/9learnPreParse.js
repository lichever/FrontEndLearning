




//helper function
function print (arg){

    console.log(arg);
}
////////////////////////////////////



//bug1
print(num1);
var num1=10;//变量提升
/*
equal:

var num;
print(num1);
num=10;

*/


//ok 
function fn1(){

    print("a"+arguments[0]);
}
/*
function fn1(){

    print("a"+arguments[0]);
}

fn1(11);

*/




//bug2
// fn2(11);
// var fn2=function(){print("a"+arguments[0]); }
/*

var fn2;
fn2(11);
fn2=function(){print("a"+arguments[0]); }

*/





/////////
/*

解析器 运行 js分两步：  预解析 和 执行


预解析： js引擎 会把js 里面所有的var还有function提升到当前作用域的 最前面
1. 变量提升 把所有变量的声明提升到 *当前* 作用域的最前面， 不提升赋值操作

2. 函数提升 把所有的函数的声明提升到 *当前* 作用域的最前面， 不调用函数

代码执行： 按照代码书写顺序 *从上往下* 执行

*/



//example1
var x=10;

fun2();

function fun2() {
    print('x: '+x);
    var x=20;
}

/*
var x;
function fun2(){
    var x;
    print('x: '+x);
    x=20;
}

x=10;
fun2();
*/



//example 2
f1();
print(c);// b 和 c 有全局
print(b);
print(a);// a没有全局变量

function f1() {
    var a=b=c=9;//错误声明方式 相当于var a=9; b=9; c=9;  b,c have no var;当没有var声明时当全局变量
    // var a=9, b=9,c=9; //集体声明正确方式
    print('1: '+a);
    print('2: '+b);
    print('3: '+c);

}