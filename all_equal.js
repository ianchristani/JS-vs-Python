console.log('working...')

function all_equal(param){
    let element_0 = param[0];
    
    param.forEach(element => {
        if(element == element_0){
            element_0 = element;
        }else{
            console.log('entrou no false'); // nao esta retornando o false!!!!!!
            return false;
        };
    });
};

console.log(all_equal([1,2,1]));