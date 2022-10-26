console.log('working...');

function is_anagram(string1, string2){
    let obj_str1 = {};
    let str1_lst = [];
    let obj_str2 = {};
    let str2_lst = [];
    let aux = [];

    str1_lst = (string1.split(''));
    str1_lst.forEach(letter =>{
        if(aux.includes(letter) == false){
            aux.push(letter);
        };
    });
    aux.forEach(dist_letter =>{
        let count = 0;
        str1_lst.forEach(sample_letter =>{
            if(dist_letter == sample_letter){
                count += 1;
            };
        });
        obj_str1[`${dist_letter}`] = count;
    });
    aux = [];
    console.log(obj_str1);

    str2_lst = (string2.split(''));
    str2_lst.forEach(letter =>{
        if(aux.includes(letter) == false){
            aux.push(letter);
        };
    });
    aux.forEach(dist_letter =>{
        let count = 0;
        str2_lst.forEach(sample_letter =>{
            if(dist_letter == sample_letter){
                count += 1;
            };
        });
        obj_str2[`${dist_letter}`] = count;
    });

    console.log(obj_str2);

    if(obj_str1 == obj_str2){
        return true;
    }else{
        return false;
    };    
};


let string1 = "typhoon";
let string2 = "opython";
console.log(is_anagram(string1, string2));