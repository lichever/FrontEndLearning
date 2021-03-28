let e='asd,WET     oj, iii'




console.log(e.split(/\s+/g));




var numDifferentIntegers = function(word) {
    


    for (let index = 0; index < word.length; index++) {
        if(word[index]>='a' && word[index]<='z')
        {
            word[index]=' ';
        }
        
        console.log(word[index]=='a');
        
    }
    
    word.split(/\s+/g);

    console.log(word);


    console.log('a'>'b');
    console.log('a'<'b');
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
    
    
};



numDifferentIntegers("a1b01c001");