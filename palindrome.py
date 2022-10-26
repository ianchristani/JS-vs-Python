def palindrome(param):
    aux = []
    count = 1
    aux_rev = []
    for letter in param:
        aux.append(letter)
    while count <= len(aux):
        aux_rev.append(aux[-count])
        count += 1
    print(aux_rev)
    if aux == aux_rev:
        return True
    else:
        return False
 
print(palindrome("abba"))