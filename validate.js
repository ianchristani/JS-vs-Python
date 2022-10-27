console.log('working...');

function validate(param){
   const obj_val = {
    'def': "missing def",
    ':': "missing :",
    '( and )': "missing paren",
    '()': "missing param",
    '   ': "missing indent",
    'validate': "wrong name",
    'return': "missing return"
    } ;

    console.log(param);
    for(let req in obj_val){
        
        if(param.includes(req) === false){
            console.log(obj_val[req]);
        };
    };
    return true;
};

function paramCheck(param){
    param = param.split(' ');
    let index = 1;

    while(index < param.length){
        let caract_ini = param[index-1];
        let caract = param[index];
        let caract_end = param[index+1];
        if(caract_ini+" "+caract+" "+caract_end == '( and )'){
            param.splice(index-1,3);
            param.push('( and )');
        };
        index += 1;
    };
    return param;
};

param = 'def : ( and ) () validate ian return';
validate(paramCheck(param));