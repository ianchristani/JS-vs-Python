console.log('working...');

function online_count(param){
    count = 0;
    for (let person in param){
        if(param[person] == "online"){
            count += 1;
        };      
    };
    return count;          
};

let statuses = {
    "Alice": "online",
    "Bob": "offline",
    "Eve": "online",
};

console.log(online_count(statuses));


// solucao em python
/*

def online_count(param):
    count = 0
    for person in param.items():
        if "online" in person:
            count += 1
    return count
    
statuses = {
    "Alice": "online",
    "Bob": "offline",
    "Eve": "online",
}

result = online_count(statuses)
print(result)

*/