/* 
JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.


typically use Date constructor to create instance to deal with time

*/

//1. 必须使用构造函数 构造对象实例 Date没有字面量格式

var now=new Date();
console.log(now);//如果没参数， 输出当前时间


//2 参数一般用字符串 类型'2019-10-1 15:8:8'
var date1=new Date('2019-10-1 15:8:8');
console.log(date1);//如果没参数， 输出当前时间


//3 格式化日期年月日
var date2=new Date();
console.log(date2.getFullYear());//
console.log(date2.getMonth()+1);//month : 0-11
console.log(date2.getDate());//
console.log(date2.getDay());//day:0-6 and 0 means sunday

console.log(date2.getFullYear()+'-'+(date2.getMonth()+1)+'-'+date2.getDate());

console.log(date2.getHours()+':'+date2.getMinutes()+':'+(date2.getSeconds()<10?'0'+date2.getSeconds():date2.getSeconds()));


//4 获取日期的总的 毫秒 形式(时间戳)：距离1970-1-1 00:00:00 UTC过了多少毫秒
console.log(date2.valueOf());
console.log(date2.getTime());

/* 
The unary + operator, when used on types other than string, will internally attempt to 
call valueOf() or toString() (in that order) and then attempt to convert the result to a number.
*/
var res=+new Date();//常用写法 里面可带参数 
console.log(res);

//h5 新增  ECMAScript 5
console.log(Date.now());



//倒计时 case
//将来的时间 减去 现在的 时间
/* 
day=parseInt(time/60/60/24)
hour=parseInt(time/60/60%24)
minute=parseInt(time/60%60)
second=parseInt(time%60)


*/
 

function countDown(time) {
    var nowTime= +new Date();
    var inputTime= +new Date(time);

    var diff=(inputTime-nowTime)/1000;//secs
    var day=parseInt(diff/60/60/24);//parseInt用作 取整
    day=day<10?'0'+day:day;
    var hour=parseInt(diff/60/60%24);
    hour=hour<10?'0'+hour:hour;
    var minute=parseInt(diff/60%60);
    minute=minute<10?'0'+minute:minute;
    var second=parseInt(diff%60);
    second=second<10?'0'+second:second;


    return 'Left '+day+'days '+hour+'hours '+minute+'minutes '+second+'seconds';

}


console.log(countDown('2021-4-1 0:0:0'));

