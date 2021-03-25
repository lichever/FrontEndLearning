/**
		 *
		 *  for - 循环代码块一定的次数
			for/in - 循环遍历 '对象'
			while - 当指定的条件为 true 时循环指定的代码块
		 */
		
		for( var i = 0; i < 10 ; i++ ){
			console.log('i:'+ i);
		}

        console.log(i);

		for( let j = 0; j < 3 ; j++ ){
			// console.log('i:'+ i);
		}

        // console.log(j);


		var person = {
			name : 'json',
			age : 25,
			sg: 170
		}

		for( key in person ){//object loop
			console.log(person[key]);
		}

		var count = 1;
		while( count < 10 ){
			count++ ;
			console.log('执行while循环');
		}


        /**
		 *  break 语句可用于跳出循环
			continue 语句跳出本次循环，继续执行
		 */
		
		// for (var i=0;i<10;i++){
		//     if (i==3)
		//     {
		//         break;
		//     }
		//     console.log( "The number is " + i + "<br>");
		// }



		for (var i=0;i<10;i++){
		    if (i==3){ 
		    	continue;
		    }
		    console.log("The number is " + i + "<br>");
		}