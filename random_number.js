console.log('working...')

const random = require('random');

function random_bumber(){
    let num = random.int((min = 1), (max = 100));
    return num;
};

result = random_bumber()
console.log(result)