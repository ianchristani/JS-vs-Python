console.log('working...');

function largest_difference(param){
    param = param.sort();
    let numbL = param[(param.length)-1];
    let numbS = param[0];
    return (numbL-numbS);
};

console.log(largest_difference([2, 1, 3])) 