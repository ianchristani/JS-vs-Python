def double_letters(param):
    letter0 = ''
    result = 0
    for letter in param:
        if letter == letter0:
            result += 1
        letter0 = letter
    if result > 0:
        return True
    else:
        return False

print (double_letters('hello'))