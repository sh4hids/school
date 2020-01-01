from sys import argv
from os.path import exists

script, from_file, to_file = argv

print(f"Copying from {from_file} to {to_file}")

input_data = open(from_file).read()

print(f"The input file is {len(input_data)} bytes long")

print(f"Does the output file exist? {exists(to_file)}")
print("Ready, press ENTER to continue, CTRL-C to abort.")
input()

out_file = open(to_file, 'w')
out_file.write(input_data)

print("Yahoo! Operation successful!")
out_file.close()
