def is_anagram(string1, string2):
    obj_str1 = {}
    str1_lst = []
    obj_str2 = {}
    str2_lst = []

    for letter in string1:
        if letter not in str1_lst:
            str1_lst.append(letter)
    for letter in str1_lst:
        freq = string1.count(letter)
        obj_str1[letter] = freq
    
    for letter in string2:
        if letter not in str2_lst:
            str2_lst.append(letter)
    for letter in str2_lst:
        freq = string2.count(letter)
        obj_str2[letter] = freq    
    
        if obj_str1 == obj_str2:
            return True
    else:
        return False

string1 = "typhoon"
string2 = "opython"
result = is_anagram(string1, string2)