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

// solucao em python
/*

def is_anagram(string1, string2):
    obj_str1 = {}
    str1_lst = []
    obj_str2 = {}
    str2_lst = []

    for letter in string1:
        if letter not in str1_lst:
            str1_lst.append(letter)
    for letter in str1_lst:
        freq = string1.count(letter)
        obj_str1[letter] = freq
    
    for letter in string2:
        if letter not in str2_lst:
            str2_lst.append(letter)
    for letter in str2_lst:
        freq = string2.count(letter)
        obj_str2[letter] = freq    
    
        if obj_str1 == obj_str2:
        return True
    else:
        return False

string1 = "typhoon"
string2 = "opython"
result = is_anagram(string1, string2)

*/