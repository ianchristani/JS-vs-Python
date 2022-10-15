console.log('working...');

function mid(string){
    if((string.length % 2)!=0){
        return string[(string.length % 2)];
    }else{
        return "";
    };
};

string = "ab";
result = mid(string);
console.log(result);


// solucao em python
// lembre-se que // ira fornecer o quociente em numero inteiro
// e o / fornece o quociente em numero real

/*
def mid(string):
    if len(string)%2 != 0:
        return string[(len(string)//2)]
    else:
        return ""
        
 
string = "abc"
result = mid(string)
print(result)
*/