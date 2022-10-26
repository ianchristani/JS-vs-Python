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