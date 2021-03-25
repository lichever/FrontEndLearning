/* 

js 作用域（es6）之前：全局 和  局部
全局：整个script label or a single js file
局部：函数内部

全局变量只有浏览器关闭的时候才销毁，比较占内存

局部变量在代码块运行结束后 自行销毁 节约内存空间

es6 才有块级 作用域{}  if{} for{}
*/


//helper function
function print (arg){

    console.log(arg);
}
////////////////////////////////////

// 内部函数访问外部函数的变量，链式查找，，从内到外 找num，这叫作用域链



var num=10;//全局
function fun1(params) {//外部函数
    var num=20;
    fun2();
    function fun2(params) {//内部函数
        // var num=30;
        print(num);
    }
}

fun1();