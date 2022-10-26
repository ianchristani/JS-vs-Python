console.log('working...');

function get_row_col(param){
    param = param.split('').reverse();
    
    const row = {"1":0, "2": 1, "3": 2};
    const column ={"A": 0, "B": 1, "C": 2};
    let result = [];

    param.forEach(carac =>{
        if(carac in row){
            result.push(row[carac]);
        };
        if(carac in column){
            result.push(column[carac]);
        };
    });
    return result;
};


let turn = "C1";
console.log(get_row_col(turn));