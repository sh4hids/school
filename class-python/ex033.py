i = 0
numbers = []

while i < 6:
    print(f"At the top i is {i}")
    numbers.append(i)

    i = i + 1
    print("Numbers now: ", numbers)
    print(f"At the bottom i is {i}")

print("The numbers:")

for num in numbers:
    print(num)

def print_nums(limit):
    i = 0
    while i < limit:
        print(i)
        i += 1

print("Print numbers from function --->")
print_nums(10)
