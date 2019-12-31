from sys import argv

script, filename = argv

txt = open(filename)

print(f"Here's your file {filename}")
print(txt.read())
txt.close()

print("Type the filename again:")
filename2 = input("> ")
txt2 = open(filename2)

print(f"Here's the content of file2:")
print(txt2.read())
txt2.close()
