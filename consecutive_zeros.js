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
