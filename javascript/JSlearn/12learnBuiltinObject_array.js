
function print(params) {
    console.log(params);
}
////////////////////////
/* 
The JavaScript Array class is a global object that is used in the construction of arrays;
 which are high-level, list-like objects.


 Since an array's length can change at any time, and data can be stored at non-contiguous 
 locations in the array, JavaScript arrays are not guaranteed to be dense; this depends on 
 how the programmer chooses to use them. 
 */


//创建数组方式
//1  利用字面量
var arr = [1, 2, 3];



//2 利用 new Array()
var arr1 = new Array(); //empty
var arr2 = new Array(3);// length=3 empty
var arr3 = new Array([1, 2], [3])// 超过1个参数 则变为字面量形式


print(arr3);



//检测是否为数组  
//1  instanceof 运算符
print(arr instanceof Array);

print(typeof (arr));//array is built-in obj, so typeof不能细分obj的小类型


//2. Array.isArray()  H5新增的方法，ie9以上版本支持
print(Array.isArray(arr));




//添加 删除 数组元素
//1 push： 在数组末尾添加 一个或多个元素; 返回新的length
arr2.push(111, 222);//参数直接写 数组元素
print(arr2);

//2 unshift: 在数组开头 添加 一个或多个元素; 返回新的length
arr.unshift(11, 'qe');
print(arr);


//3 pop: 删除数组最后一个元素； 返回 删除的那个元素
arr.pop();
print(arr);

//4 shift: 删除数组开头一个元素； 返回 删除的那个元素
arr.shift();
print(arr);




//reverse and sort
arr.reverse();
print(arr);

arr.sort();
print(arr);

//bug. 
arr = [9, '80', 12];
arr.sort();
print(arr);

/*  
因为默认sort是先转换为
all non-undefined array elements are sorted by converting them to strings and 
comparing strings in UTF-16 code units order. For example, "banana" comes before "cherry". 
In a numeric sort, 9 comes before 80, but because numbers are converted to strings, 
"80" comes before "9" in the Unicode order. All undefined elements are sorted to 
the end of the array.

所以number的排序 自己要写个  compare function

*/


arr.sort(function (a, b) { return a - b; });//ascending
arr.sort((a, b) => { return b - a; });//es6  arrow function
print(arr);





//find index
//1 indexof : 在数组中查找给定元素 的 第一个索引； 返回index ， 失败-1
print(arr.indexOf(12));



//2 lastIndexOf: 在数组中查找给定元素 的 最后一个索引； 返回index ， 失败-1
print(arr.lastIndexOf(12));


print(arr.includes(12));



//convert to string
//1 toString()  默认逗号
print(arr.toString());


//2 join('分隔符')
print(arr.join());//== toString()
print(arr.join(' '));
print(arr.join('-'));






//concat: 连接2个 或 多个 数组，不影响原数组； 返回一个新数组
//const new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
/*

Object references (and not the actual object): concat copies object references into the new 
array. Both the original and new array refer to the same object. That is, if a referenced 
object is modified, the changes are visible to both the new and original arrays. This includes 
elements of array arguments that are also arrays.

*/


const letters = ['a', 'b', 'c'];
const num2 = [1, 2, 3];
const num3 = [7, 8, 9];

let ll = letters.concat(num2, num3);
print(ll);
// result in ['a', 'b', 'c', 1, 2, 3]


//nested
const num11 = [[1]];
const num22 = [2, [3]];
const numbers = num11.concat(num22);
print(numbers);

// modify the first element of num1 !!!!!!!  nested里面一层的变化 会影响 新数组！！！！！！！！
num11[0].push(4);
num11[0].shift();
num11.push(1212);
num22.shift();
num22.push(999)
num22[0].push(111)
print(numbers);

numbers[1]=99;
numbers[0]=[2,3];// no effect on original arr
print(numbers);
print(num11);
print(num22);






//slice() 数组截取[begin, end); 返回被截取的新数组 shallow copy!!!
//begin :A negative index can be used
//end can be ignored 
/*
slice()
slice(start)
slice(start, end)



For object slice copies object references into the new array. Both the original and 
new array refer to the same object. If an object changes, the changes are visible 
to both the new and original arrays.
For strings, numbers and booleans (not String, Number and Boolean objects), slice 
copies the values into the new array. Changes to the string, number, or boolean in
 one array do not affect the other array.
If a new element is added to either array, the other array is not affected.

*/


let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', ['Mango']]
let citrus = fruits.slice(1, 5)
print(citrus)
fruits[4].push('asd')//nested里面一层的变化 会影响 新数组！因为[mango]本身是个OBJ reference

print(citrus)

citrus[3].push('mmm')//改变任何一个array里面的obj reference都会影响另外一个
print(fruits)




print('\n=======================================================\n')



//splice() :
/*

changes the contents of an array by removing or replacing 
existing elements and/or adding new elements in place. 
会影响原数组

return: An array containing the deleted elements.
If only one element is removed, an array of one element is returned.

If no elements are removed, an empty array is returned.



*/
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');//0 : insert
// inserts at index 1
print(months);


months.splice(1, 2, 'May', 'asd');
// replaces 2 element at index 1
print(months);


months.splice(2, 0, 'xx', 'qq');//0 : insert
print(months);


months.splice(2, 3,'haha');//第一个参数表示起始位置，第二参数表示删除元素个数，第三个参数表示插入的元素们
print(months);

months.splice(2, 1);//也可以理解成先在para1 remove para2个，再insert para3
print(months);



var q=[1,2,3];

print(q[-2]);










