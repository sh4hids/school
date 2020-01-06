def add(a, b):
    print(f"Adding {a} + {b}")
    return a + b

def subtract(a, b):
    print(f"Subtracting {a} + {b}")
    return a - b

def multiply(a, b):
    print(f"Multiplying {a} + {b}")
    return a * b

def devide(a, b):
    print(f"Deviding {a} + {b}")
    return a / b

print("Let's do some math with just functions!")

age = add(20, 6)
height = subtract(66, 3)
weight = subtract(multiply(30,2), 2)
iq = devide(100, 2)

print(f"Age: {age}, Height: {height}, Weight: {weight}, IQ: {iq}")

# Shorol Onko  😋
what = add(age, subtract(height * 23, multiply(weight, devide(iq , 2))))

print("That becomes: ", what, "Can you do it by hand?")
