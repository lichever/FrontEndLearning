/* basic date type */

function print(params) {
    console.log(params);
}
////////////////////////


/**
 *  变量必须以字母开头    
	变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）  
	变量名称对大小写敏感（y 和 Y 是不同的变量）
 * 
 */

// var a = 1; 

// var a1 = 4;

// var $a = 5;

// var _a = 6;

var a = 55;
var A = 66;

console.log('a:', a);
console.log("A: ", A);

var a1 = 4,
    $a = 5,
    _a = 6;



/**
 * FIVE 基本数据type
 * 字符串 (String)
 * 数字 (Number)
 * 布尔 (Boolean)
 * 空 (Null)
 * 未定义 (Undefined)
 * 
 * 
 * 复杂数据类型
 * 对象 (Object)
 * 数组 (Array) 也属于Object
 */


// var可以声明各种类型
var x; // x 为 undefined
var y = 5; // y 为数字
var z = 'John'; // z 为字符串




// 1 字符串
var carname = "Volvo XC60";//js code 约定用single quote 因为html用的“”
var carname = 'Volvo XC60';
//js可以用 单引号嵌套 双引号， 或者 外双内单

var nest='asd"s?\tss"dsd';//就近匹配 第一个单引号从左到右 找第一个 单引号
print(nest)
var nest='asd\"s\'?ss\"dsd';//可以用escape 随便搞

print('11'+3);//只要有string ’+‘ 表示拼接，而 ’- / *‘ 可以进行implicit convert to Number
print('12'-2);
print('12'*2);





//2. 数字
var x1 = 34.00; //使用小数点来写
var x2 = 34; //不使用小数点来写

//八进制  前面加0
var oct=010

var foo = parseInt('1111', 2);//第二个参数是 radix
console.log(foo);

//ES6 spec
var bin = 0b1111;    // bin will be set to 15
var oct = 0o17;      // oct will be set to 15
var oxx = 017;       // oxx will be set to 15
var hex = 0xF;       // hex will be set to 15
// note: bB oO xX are all valid

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);//-Infinity
console.log(Number.POSITIVE_INFINITY);//Infinity
console.log(Number.MAX_SAFE_INTEGER);//2^53 - 1
console.log(Number.MIN_SAFE_INTEGER);//-(2^53 - 1)
console.log(typeof Number.NaN);//type : number               isNan
//Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 that's the safe mean

//BigInt(Big) can be used for arbitrarily large integers.
//A BigInt is created by appending n to the end of an integer literal — 10n — or by calling the function BigInt().
//这玩意必须同类比较 运算 ，不能和Number类 混在一起用






//3. 布尔
//arithmetic op will see true 1 and false 0;
var x = true;
var y = false;
print(99+true)
print(100*false)







//4. Undefined 
// Undefined 表示有变量声明但没赋值
var persons;
console.log(persons)
console.log(typeof persons)// undefine  not an object
console.log('asd'+ persons)//undefined convert to str
console.log(12+ persons)//undefined 和 数字 运算是 NAN
console.log(12* persons)//undefined 和 数字 运算是 NAN
console.log(persons/12)//undefined 和 数字 运算是 NAN




//5、 Null
// 可以通过将变量的值设置为 null 来清空变量
// null用来 赋给  初始化的 对象变量
var car = "Volvo";
car = null
print(typeof null)// 返回一个 空的Object
print(null+'asd')
print(null+12)// 注意！！  这里 null 代表0
print(null*12)// 注意！！  这里 null 代表0
print(null-12)// 注意！！  这里 null 代表0
print(null/12)// 注意！！  这里 null 代表0
print(12/0)// 注意！！  这里 null 代表0
print(null==undefined)// true。。。 注意 不要这样 用！！东西都不一样
print(null===undefined)// false



//总结：5类基本简单数据类型，存在内存 stack里，  value type
//复杂数据类型(用new)，例如Object(Array...)。在存储时，变量保存地址,存在内存 stack里，然后这个地址指向内存 堆里面的数据
//reference type







// typeof 是个 operator 来区分类型  但无法区分Object里面 具体的分类  那个要用另外一个operator instanceof




// 数组
//1
var cars = new Array();
cars[0] = "Saab";
cars[1] = 2.23;
cars[2] = true;

console.log(cars);
console.log(cars.length);

//2
var cars = new Array("Saab", "Volvo", "BMW");
//3
var cars = ["Saab", "Volvo", "BMW"];



// JavaScript 对象   键值对
var person = {
    firstname: "John",
    lastname: "Doe",
    id: 5566
};

console.log(person.firstname)
console.log(person["firstname"])



//不声明 直接赋值可以使用 默认全局变量 但不提倡
qq=100;
print(qq)




//data conversion

// 1 convert to Number
//parseInt(), parseFloat() , Number()强制转换, 隐私转换（除了加号）str [-/*] '0'

print(parseInt('11', 2));//  将11 视为binary  并 convert to decimal
console.log('12' - 1);
console.log('12' * '2');
console.log('12' / 3);



//2 convert to String
// toString(), String()强制转换, ’+‘

let num=12;
print(num.toString())

print(String(num))

print(num+'')


//3 convert to Boolean
//Boolean()强制转换
// 代表空、否定、未知 的值  都会变为  false， 其余值为 true
print(Boolean(''))
print(Boolean(null))
print(Boolean(undefined))
print(Boolean(NaN))
print(Boolean(0))
print(Boolean('asd'))


