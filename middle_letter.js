console.log('working...');

function mid(string){
    if((string.length % 2)!=0){
        return string[(string.length % 2)];
    }else{
        return "";
    };
};


console.log(mid("abc"));
