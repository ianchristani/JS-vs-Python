def add_dots(string):
    return ".".join(string)

def remove_dots(string):
    return "".join(string.split("."))

string = "test"
print(remove_dots(add_dots(string)))