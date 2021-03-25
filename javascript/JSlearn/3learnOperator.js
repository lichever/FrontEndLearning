function print(params) {
	console.log(params);
}
////////////////////////
	
	
	/**
		 *  赋值运算符  =   +=   -= 等
			算术运算符  +  -   *   / 等
			字符串的 + 运算符 
		 *
		 *
		 * 
		 */

	var a = 1;
	a += 3; // a = a + 3;
    a%=3;
	console.log(a);

	var b = 2;
	b = b * 3;
	console.log(b);


	var c = 'hello';
	var d = 'world';
	var e = c + ' '+", "+d;// concatenate
	console.log(e);




	/**
			 *
			 *	<  小于 
				>  大于
				==  等于 1 == ‘1’ 
				===  绝对等于（值和类型均相等）??
				!=  不等于
				！== 绝对不等于
				&&  and   1) true && true 返回 true   2)true  && false 返回false
				||  or    1) true || false 返回 true  2) false || false 返回false

				逻辑与 高于  逻辑或
			 *
			 * 
			 */


	// console.log(5 == 5);
	console.log(5 == "5");
	// console.log(5 === 5);
	console.log(5 === '5');


	// console.log(5 != 4);

	// console.log(5 == 5 && 6 == 6);
	// console.log(5 == 4 && 6 == 6);


	// console.log(5 == 5 || 6 == 5); // true
	// console.log(4 == 3 || 2 == 1); // false


console.log('1' == 1);// == 会把string 转换为 number
console.log("'1' !== 1 "+('1' !== 1) );// == 会把string 转换为 number
// expected output: true

console.log(0 == false);//== convert the Boolean operand to 1 or 0
console.log(0 === false);//f
console.log(NaN == false);//== convert the Boolean operand to 1 or 0
console.log(null == false);//== convert the Boolean operand to 1 or 0
console.log(undefined == false);//== convert the Boolean operand to 1 or 0




console.log(null === undefined);//  special case   care！！！！！



console.log(NaN == undefined);
console.log(null == NaN);
console.log(null == 0);
console.log(NaN ==0);
console.log(undefined == 0);
// expected output: true



//1 浮点数 精度17位小数，
//不要直接判断2个浮点数是否相等 java/c 类似
//算数运算时 也有精度问题
var res=0.1+0.2
print(res)
print(0.07*100)


var e=10;
print(e++ + ++e)//from left to right 10+12




//Exponentiation (**)
/*
The exponentiation operator (**) returns the result of raising the first operand 
to the power of the second operand. It is equivalent to Math.pow, except it also 
accepts BigInts as operands.

*/

console.log(2 ** 3 ** 2);
// expected output: 512  right-associative



-2 ** 2;
// 4 in Bash, -4 in other languages.
// This is invalid in JavaScript, as the operation is ambiguous.