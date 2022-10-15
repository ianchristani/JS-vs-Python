console.log('working...')

const random = require('random');

function random_bumber(){
    let num = random.int((min = 1), (max = 100));
    return num;
};

result = random_bumber()
console.log(result)

// solucao em python
/*

from random import randint

def random_number():
    num = randint(1,101)
    return num
    
result = random_number()
print(result)

*/