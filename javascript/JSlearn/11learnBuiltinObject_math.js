
function print(params) {
    console.log(params);
}
////////////////////////

/*

内置对象的方法 和 属性 都是静态的 直接使用 不用new

用 MDN 查  doc

Unlike many other global objects, Math is not a constructor.
All properties and methods of Math are static. You refer to the constant pi as 
Math.PI and you call the sine function as Math.sin(x), where x is the method’s argument. 
Constants are defined with the full precision of real numbers in JavaScript.

*/




print(Math.E);
print(Math.LN10);





//max
var arr1 = [[1, 2], [3, 4, 5]];
print(arr1[1]);
print(Math.max(...arr1[0]));//...传参数 apply

print(Math.max())
print(Math.min())

print(Infinity > 100)




//encapsulate my own math obj

var mymath = {
    PI: 3.14,
    max: function () {
        var maxValue = arguments[0];

        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > maxValue) {
                maxValue = arguments[i];
            }
        }

        return maxValue;
    }

}


print(mymath.PI);
print(mymath.max(1, 2, 3, -4));




//abs
print(Math.abs('-11'));//implicit convert
print(Math.floor(1.5));
print(Math.ceil(1.1));
print(Math.round(1.5));
print(Math.round(-1.5));//特殊情况，.5是往数轴大的方向取!!!!



//random  return [0,1)


var myRandom = {
    getRandomInt: function (min, max) {//[min,max]
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;//random:[0,1)
    }

    //float
    //exclusive

}

print(myRandom.getRandomInt(2,5));