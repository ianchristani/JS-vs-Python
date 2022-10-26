console.log('working...');

function add_dots(string){
    let sep_letters = [];
    sep_letters = string.split('');
    return(sep_letters.join('.'));
};

function remove_dots(string){
    let joined_letters = string.split('.');
    return joined_letters.join('');
};

let string = "test";
console.log(remove_dots(add_dots(string)));