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

// solucao em python
/*

def flatten(param):
    result=[]
    for lista in param:
        for element in lista:
            result.append(element)
    return result
    
    
print(flatten([[1, 2], [3, 4]]))

*/