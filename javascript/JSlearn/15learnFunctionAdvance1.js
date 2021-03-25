'use strict';//下面代码 开启严格模式 IE10以上才支持

function print(params) {
    console.log(params);
}
////////////////////////

// another way to declare function
// new Function('para1', 'para2', 'body');


var f=new Function('a','b','console.log(a+b)');
f(1,2)
print(f instanceof Function)

// inefficient but it means that all functions are objs/instances of Function

var a=[1,2,3,4]

print(Math.max(...a))

// num = 10;//'use strict':  err
// print(num)




// call anonymous function 

//(func(){})();


var a=[1,2,3,4];

for(let k in a)
{
    print(k);
}