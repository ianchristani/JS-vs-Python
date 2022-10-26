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

print(online_count(statuses))