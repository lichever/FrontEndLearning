
function print(params) {
    console.log(params);
}
////////////////////////


//基本包装类
var str='andy';
print(str.length);//object 才有 属性啊

//基本包装类：js会自动把简单数据类型包装为 复杂数据类型: String, Number, Boolean
/*
上面代码等同于：

var temp= new String('andy');
str=temp;
temp=null;

*/




// string 不可变 类似java immutable
//所以不要大量拼接 字符串 不然爆内存

let s='';
for (let i = 0; i < 100; i++) {
    s+=i;
}
print(s);


//字符串所有方法 都不会修改字符串本身，操作完返回一个新字符串


//1 根据字符返回位置：  indexof( 'c',[start pos] )
// lastIndexOf similar
let s1='asds';
print(s1.indexOf('s',2));//必须加 引号
print(s1.lastIndexOf('s',2));//必须加 引号



//2. 根据位置 返回字符
// str[ind],  charCodeAr(ind)返回字符的ASCII
print(s1.charCodeAt(1));  


//3 判断对象 里面有没有属性
var o={age:12};

print(o['uqwe']==true);// undefined === false
print(o.qw);// undefined === false

for (const key in o) {
    print(key+' ' +o[key]);
}




//4 concat  和 +
//It is strongly recommended that the assignment operators (+, +=) 
//are used instead of the concat() method.


//concat(str1,str2...)  return a new string
let ss='asd';
ss=ss.concat(' ',4,'ww')

print(ss)



//5 截取substring
/* 
1. substr(start, length)

2. slice(start, end) end取不到  start可以是负数

3.subtring(start, end) end 取不到

*/

ss=ss.substring(1,3);
print(ss)






//6 replace('被替换的str','替换str') 只替换匹配到的第一个，但可以用正则表达式
let w='asdoesdjSd'

print(w.replace('sd', 'x'))

print(w.replace(/sd/gi, '???'))//g:global, i:ignore case




//7 string 转换为 数组  split('分隔符')  之前的join 是把数组转为 字符串
let e='asd,WET oj, iii'
print(e.split(' '))
print(e.split(','))



//8 转换大小写
 print(e.toLocaleLowerCase())
 print(e.toLowerCase())
 print(e.toUpperCase())