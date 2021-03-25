/*

three ways to create object

1. use literal {}  // []is for array

2. use new object

3. use constructor

*/

function print(params) {
    console.log(params);
}
////////////////////////



//1 use literal {}
//var obj1 = {};//empty obj

var obj1 = {
    uname: 'jack', age: 18,
    sayHi: function (params) {
        print('x: ' + params);
    },
    sex: 'male'
};//empty obj

/* 
1. 里面的属性和方法采用  key: value
2. 多个属性 用 逗号 隔开
3. 方法冒号后面跟 匿名函数

4.使用对象属性 采取： obj.key  或  obj['key']

5. 使用方法： obj.func();


*/


print(obj1.uname);
print(obj1['sex']);
obj1.sayHi(12);



//2 use new object

var obj2= new Object();//empty obj
obj2.uname='mm';
obj2.sayHello=function(){print(arguments[0]);}

/* 
1. 这里用 等号 添加属性和方法
2. 每个属性和方法用 分号结束

*/
obj2.sayHello(22);


//3 use constructor 优点在于前面2种方法一次只能创建一个对象
/* 
a. format:

function constructor_name(){
    this.field=value;
    this.method=function(){}
}

new constructor_name();

b. new的作用
1. 在内存创建一个空对象
2. this就会指向这个空对象
3. 执行构造函数代码 添加属性和方法到空对象
4. 返回这个对象（所以构造函数不需要return）



c. convention:
1.构造函数名字首字母大写
2.构造函数不需要return 就可以返回这个对象
3.我们调用构造函数， 必须使用new
4.this 不能省略 
5.构造函数 是 类似hava的 类 class， 这里的对象是类的实例

*/

function Dog(uname, sex) {
    this.uname=uname;
    this.sex=sex;
    this.bark=function(){print('wang~'); print(arguments[0])}
}


var dog1=new Dog('luck', 'male');

dog1.bark('howl~');
print(dog1.sex);



// 遍历对象
/* 用for-in which is best for obj although can be for array

for(变量 in 对象){

}

*/

for(const k in dog1)
{
    print(k+": "+ dog1[k]);//k is field and obj[k] is value
}



/* for (const key in dog1) {
    if (Object.hasOwnProperty.call(dog1, key)) {
        const element = dog1[key];
        print(element);


    }

} */


var a=12.1;
var q='weawea';
var w=true;

var ww=null;
var oo=undefined;

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}