def get_row_col(param):
    inv_coord = []
    for coord in param:
        inv_coord.append(coord)
    inv_coord.reverse()

    row = {"1":0, "2": 1, "3": 2}
    column ={"A": 0, "B": 1, "C": 2}
    result = []
    for carac in inv_coord:
        if carac in row:
            result.append(row[carac])
        if carac in column:
            result.append(column[carac])
    result = tuple(result)
    return result
    
turn = "C1"
print(get_row_col(turn))