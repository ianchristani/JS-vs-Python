console.log('working...');

function palindrome(param){
    let aux = [];
    let aux_rev = [];
    let count = 1;
    
    aux = param.split("");
    
    while(count <= aux.length){
        aux_rev.push(aux[aux.length-count]);
        count += 1;
    };
    if (aux == aux_rev){ // note that this identity do not work!!!!
        return true;
    }else{
        return false;
    };
};


let param = "abba"
console.log(palindrome(param));