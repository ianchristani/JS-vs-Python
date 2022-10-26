def largest_difference(param):
    param = sorted(param)
    numbL = param[-1]
    numbS = param[0]
    return (numbL-numbS)

print(largest_difference([2, 1, 3]))  