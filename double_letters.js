console.log('working...')

function double_letters(param){
    let letter0 = '';
    let result = 0;
    const paramf = param.split('');
    
    paramf.forEach(letter=>{
        if(letter0 == letter){
            result += 1;
        };
        letter0 = letter;
    });
    if (result > 0){
        return true;
    }else{
        return false;
    };    
};


console.log(double_letters('hello'));