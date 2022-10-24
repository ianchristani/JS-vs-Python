console.log('working...')

function consecutive_zeros(param){
    let lst = [];
    let lst_analize = [];
    let numb_0 = 0;
    lst = param.split('1');
    
    lst.forEach(element =>{
        if(element.length > 0){
            lst_analize.push(element);
        };
    });
    lst_analize.forEach(element =>{
        if(element.length > numb_0){
            numb_0 = element.length;
        };
    });
    return numb_0;
};

let param = "1001101000110";
console.log(consecutive_zeros(param));

// solucao em python
/*

def consecutive_zeros(param):
    lst_analize = []
    lst = param.split('1')
    numb_0 = 0
    for element in lst:
        if len(element) > 0:
            lst_analize.append(element)
    for element in lst_analize:
        if len(element) > numb_0:
            numb_0 = len(element)
    return numb_0
    
param = "1001101000110"
print(consecutive_zeros(param))

*/