console.log('working...');

function flatten(param){
    let result = [];
    param.forEach(lista =>{
        lista.forEach(element =>{
            result.push(element);
        });
    });
    return result;
};

console.log(flatten([[1, 2], [3, 4]]))