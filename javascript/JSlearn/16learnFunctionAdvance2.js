


function print(params) {
    console.log(params);
}
////////////////////////



//1 function as input para to another function


function fn(x, cb) {
    print(++x);
    print('ffff')
    cb(x,x+1);
}

function callback(a,b) {
    print(a+b);
    print('hhhh')
}

fn(12, callback)


//2 closure
//有权访问 另一个函数作用域中 变量 ， 被访问的变量所在的函数 称为 闭包函数。
//闭包的主要作用： 延伸了变量的作用范围


/* function fnClosure() {
    var x=10;
    function fun() {
        console.log(x);   
    }

    fun();
}

fnClosure();//在这里 断点  可以查看 closure

 */





//fnClosure外面的作用域可以访问 fnClosure 内部 的局部变量
function fnClosure() {
    var x=10;
    function fun() {
        console.log(x);   
    }

    //fun();
    return fun;
}

var f=fnClosure();//在这里 断点  可以查看 closure
//相当于
/* var f=function fun() {
    console.log(x);
} */

f();// can get x in fnClosure()