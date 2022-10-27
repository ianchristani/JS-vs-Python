def validate(param):
    obj_val = {
        'def': "missing def",
        ':': "missing :",
        '( and )': "missing paren",
        '()': "missing param",
        '   ': "missing indent",
        'validate': "wrong name",
        'return': "missing return"
    }
    
    for req in obj_val:
        if req not in param:
            return obj_val[req]
    return True

def paramCheck(param):
    param = param.split()
    index = 1
    while index < len(param)-1:
        caract_ini = param[index-1]
        caract = param[index]
        caract_end = param[index+1]
        if f'{caract_ini} {caract} {caract_end}' == '( and )':
            del param[index+1], param[index], param[index-1]
            param.append('( and )')
        index += 1
    return param


param = 'def : ( and ) () validate return'
print(validate(paramCheck(param)))