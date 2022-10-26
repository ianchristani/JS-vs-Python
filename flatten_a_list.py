def flatten(param):
    result=[]
    for lista in param:
        for element in lista:
            result.append(element)
    return result
    
    
print(flatten([[1, 2], [3, 4]]))