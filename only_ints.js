console.log('working...')

function only_ints(p1,p2){
    if (typeof(p1) == 'number' && typeof(p2) == 'number'){
        return true;
    }else{
        return false;
    };
};

p1 = 1;
p2 = 2;

console.log(only_ints(p1,p2));