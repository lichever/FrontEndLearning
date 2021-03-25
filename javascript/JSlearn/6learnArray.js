// 数组
//1 new
var cars = new Array();
cars[0] = "Saab";
cars[1] = 2.23;
cars[2] = true;

console.log(cars);
console.log(cars.length);

//2
var cars = new Array("Saab", "Volvo", "BMW");

//3 利用数组字面量 创建
var cars = ["Saab", "Volvo", "BMW",123];//any data types
var a=[];


//traversal
for (let index = 0; index < cars.length; index++) {
    
    console.log(cars[index]);
}


cars.forEach(element => {
    console.log(element);
    
});


for (const key in cars) {
    
    console.log(cars[key]);


}


//enlarge the size of array
//1 change length
var a=[1];
console.log(a.length);//property length dynamically detect change
a.length=3;
console.log(a.length);
console.log(a[1]);


//property length dynamically detect change
var b=[];
for (let index = 0; index < 5; index++) {
    b[b.length]=index;
}
console.log(b);


//2 direct append
var a=[1];
a[1]=12;
a[5]=33;
console.log(a);

// swap(b[1], b[2]);
// console.log(b);







