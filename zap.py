def zap(a,b):
    lst = []
    aux = []
    index = 0
    while index < len(a):
        aux = (a[index], b[index])
        lst.append(aux)
        index += 1
    return lst

print(zap([0, 1, 2, 3], [5, 6, 7, 8]))    