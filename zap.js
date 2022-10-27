console.log('working...');

function zap(a,b){
    let lst = [];
    let aux = [];
    let index = 0;
    while(index < a.length){
        aux = [a[index], b[index]];
        lst.push(aux);
        index += 1;
    };
    return lst;
};

console.log(zap([0, 1, 2, 3], [5, 6, 7, 8]));