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


let string = 'hello';
console.log(double_letters(string));

// solucao em python
/*

def double_letters(param):
    letter0 = ''
    result = 0
    for letter in param:
        if letter == letter0:
            result += 1
        letter0 = letter
    if result > 0:
        return True
    else:
        return False

string = 'hello'
print (double_letters(string))

*/