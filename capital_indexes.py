def capital_indexes(param):
    index_list=[]
    count = 0
    for letter in param:
        if letter == letter.upper():
            index_list.append(count)
        count += 1
    return index_list
            
teste = 'HeLlO'
capital_indexes(teste)
