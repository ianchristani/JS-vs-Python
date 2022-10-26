def all_equal(param):
    element_0 = param[0]
    for element in param:
        if element == element_0:
            element_0 = element
        else:
            return False
    return True

print(all_equal([1, 1, 1]))