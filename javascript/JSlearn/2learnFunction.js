	/**
		 *  函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块
         * 2 ways to define function
			function  a( 参数 ){}   声明会前置
			var  a  =  function( 参数 ){}  匿名函数
			函数中的 return
		 *
		 *
		 *
		 * 
		 */
		
		// function a(){
		// 	console.log(1111);
		// 	console.log(2222);
		// 	console.log(3333);
		// 	console.log(4444);
		// 	console.log(5555);
		// 	console.log(6666);
		// }

		// a();
		// a();
		// a();
		// a();



		b('hello', 'world');//b() 声明会前置, so ok.
		// console.log(2222)
		// var cc = 123;



		function b(cs1, cs2){
			console.log(cs1, cs2);
		}




		var c = function(cs1, cs2, cs3){//anonymous func
			console.log(cs1, cs2, cs3);
		}

		c(1,2,3);



		function d(a,b){
			return a+b;
		}

		var d1 = d(12,23);
		console.log('this is a d1: ',  d1);
		console.log('this is a d1: ',  d(1,2));




