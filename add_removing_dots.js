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

// solucao em python
/*

def add_dots(string):
    return ".".join(string)

def remove_dots(string):
    return "".join(string.split("."))

string = "test"
print(remove_dots(add_dots(string)))

*/