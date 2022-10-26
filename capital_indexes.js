console.log('working...');

function capital_indexes(param){
    index_list = [];
    letters_list = param.split('');
    letters_list.forEach(letter=>{
        if(letter == letter.toUpperCase()){
            index_list.push(letters_list.indexOf(letter));
        };
    });
    console.log(index_list);
};

let str = "HeLlO";
capital_indexes(str);