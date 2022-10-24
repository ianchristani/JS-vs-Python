console.log('working...')

function up_down(param){
    let pdown = param - 1;
    let pup = param + 1;
    // as we DONT HAVE TUPLE in JS we should return in a list, but we dont need to declare the object first, like in python.
    return [pdown,pup];
};


let param = 5;
console.log(up_down(param));


// solucao em python
/*

def up_down(param):
    pdown = param - 1
    pup = param + 1
    return (pdown,pup)

param = 5
print(up_down(param))


*/