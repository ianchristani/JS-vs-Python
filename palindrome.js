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

// solucao em python
/*

def palindrome(param):
    aux = []
    count = 1
    aux_rev = []
    for letter in param:
        aux.append(letter)
    while count <= len(aux):
        aux_rev.append(aux[-count])
        count += 1
    print(aux_rev)
    if aux == aux_rev:
        return True
    else:
        return False
 
param = "abba"
print(palindrome(param))

*/