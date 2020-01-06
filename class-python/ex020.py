from sys import argv

script, input_file = argv

def print_all(file):
    print(file.read())

def rewind(file):
    file.seek(0)

def print_a_line(line,file):
    print(line, file.readline(), end = "")

current_file = open(input_file)

print("First let's print the whole file:\n")
print_all(current_file)

print("Let's now rewind, kind of like a tape")
rewind(current_file)

print("Let's print 3 lines:\n")

current_line = 1

print_a_line(current_line, current_file)

current_line += 1
print_a_line(current_line, current_file)

current_line += 1
print_a_line(current_line, current_file)
