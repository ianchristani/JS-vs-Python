'''lembre-se que // ira fornecer o quociente em numero inteiro
 e o / fornece o quociente em numero real'''


def mid(string):
    if len(string)%2 != 0:
        return string[(len(string)//2)]
    else:
        return ""
        
print(mid("abc"))