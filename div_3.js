console.log('working...');

function div_3(param){
    if(param % 3 == 0){
        return true;
    }else{
        return false;
    };
};

let numb = 6;
console.log(div_3(numb));

// solucao em python
/*

def  div_3(param):
    if param % 3 == 0:
        return True
    else:
        return False
    
numb = 6
print(div_3(numb))

*/