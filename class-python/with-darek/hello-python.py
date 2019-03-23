import random
import sys
import os

'''
The following code
will print "Hello world!"
'''

print("Hello world!") # this code will print "Hello world!"

name = "John Doe"
print(name)
name = 15
print(name)

print("5 + 2 = ", 5 + 2)
print("5 - 2 = ", 5 - 2)
print("5 * 2 = ", 5 * 2)
print("5 / 2 = ", 5 / 2)
print("5 % 2 = ", 5 % 2)
print("5 ** 2 = ", 5 ** 2)
print("5 // 2 = ", 5 // 2)

quote = "Someone said, \"This is a quote\"."
print(quote)

multiline_quote = '''A crazy
text to show multiline text.
'''

print("%s %s" % (quote, multiline_quote)) # formatted print

print("----- 5 newlines starts -----")
print("\n" * 5)
print("----- 5 newlines ends -----")

# list
book_list = ['Feluda', 'Tenida', 'Golpoguccho']
print(book_list)
print("My favourite book is", book_list[0])
print("My other favourite books are", book_list[1:3])

book_list.append("Eloquent JavaScript")
print(book_list)

book_list.insert(3, "You Don't Know JS")
print(book_list)

book_list.remove("You Don't Know JS")
print(book_list)

book_list.sort()
print(book_list)

book_list.reverse()
print(book_list)

del book_list[2]
print(book_list)

print(len(book_list))

# tuple
numbers = (2,4,6,8,10)
numbers_list = list(numbers)
print(numbers)
print(numbers_list)
print(numbers[1])
print(numbers_list[1])

# dictionary
todo_list = {'task1': 'Eat lunch', 'task2': 'Drink Coffee', 'task3': 'Fix Bugs'}
print(todo_list)
print("First task is",todo_list['task1'])
print("Total tasks",len(todo_list))
print("Last task is",todo_list.get('task3'))
print(todo_list.keys())
print(todo_list.values())

# conditionals
age  = 19

if age >= 21:
    print('You can marry')
else:
    print('Sorry, you can\'t marry right now according to BD law.')

if age >= 21:
    print("Anyone can marry")
elif age >= 18:
    print("Only girls can marry")
else:
    print("No one can marry")

age = 21
gender = 'female'
if age >= 21:
    print("Anyone can marry")
elif (age >= 18) and (gender == 'female'):
    print("Only girls can marry")
else:
    print('None can marry')

# loops
for x in range(0, 10):
    print(x)

# print even and numbers
print('----------> Even odd numbers')
for x in range(0, 10):
    if x % 2 == 0:
        print(x, '--> even')
    else:
        print(x, '<- odd')

# while loop
random_num = random.randrange(0,10)

while random_num != 4:
    print(random_num)
    random_num = random.randrange(0,10)

# print Even
print('---> Prints even numbers')
i = 0
while i <= 20:
    if i % 2 == 0:
        print(i)
    i += 1

# functions
def addNumbers(num1, num2):
    sum = num1 + num2
    return sum

print("The sum is:", addNumbers(5,8))

print('What is your name?')
# name = sys.stdin.readline()

# print("Hello", name)

# strings

long_strings = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

print(len(long_strings))

print(long_strings[0:5])
print(long_strings[-5:])
print(long_strings[:-5])
print(long_strings[:4] + " ipsum nulla.")

formatter = "My {} is {}."

print(formatter.format('name','Shahid'))

name = "john"

print(name.capitalize())

fruits = 'Apple, Banana, Mango'

fruits_list = fruits.split(', ')
print(fruits_list)

# file

test_file = open("test.txt", "wb")
print(test_file.mode)
print(test_file.name)

test_file.write(bytes("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n", 'UTF-8'))

print(test_file.mode)

test_file.close()

test_file = open('test.txt', 'r+')
text_in_file = test_file.read()

print(text_in_file)

os.remove('test.txt')

# objects

class Animal(object):
    __name = ""
    __height = 0
    __weight = 0
    __sound = ""

    def __init__(self, name, height, weight, sound):
        self.__name = name
        self.__height = height
        self.__weight = weight
        self.__sound = sound

    def set_name(self, name):
        self.__name = name

    def get_name(self):
        return self.__name

    def set_height(self, height):
        self.__height = height

    def get_height(self):
        return self.__height

    def set_weight(self, weight):
        self.__weight = weight

    def get_weight(self):
        return self.__weight

    def set_sound(self, sound):
        self.__sound = sound

    def get_sound(self):
        return self.__sound

    def get_type(self):
        print("Animal")

    def toString(self):
        return "{} is {} cm tall and {} kilograms and say {}.".format(self.__name,
                    self.__height,
                    self.__weight,
                    self.__sound)

cat = Animal('Tom', 35, 10, 'Meawo')

print(cat.get_name())
print(cat.toString())

# inheritance

class Dog(Animal):
    __owner = ""

    def __init__(self, name, height, weight, sound, owner):
        self.__owner = owner
        super(Dog, self).__init__(name, height, weight, sound)

    def set_owner(self, owner):
        self.__owner = owner

    def get_owner(self):
        return self.__owner

    def get_type(self):
        print("Dog")


    def multiple_sounds(self, sound_times=None):
        if sound_times is None:
            print(self.get_sound())
        else:
            print(self.get_sound() * sound_times)

    def toString(self):
        return "{} is {} cm tall and {} kilograms and say {}. His owner is {}.".format(self.get_name(),
                    self.get_height(),
                    self.get_weight(),
                    self.get_sound(),
                    self.__owner)

spot = Dog("Spot", 55, 15, 'Ruff', 'Darek')

print(spot.toString())

# polimorphism

class AnimalTesting:
    def get_type(self, animal):
        animal.get_type()

test_animals = AnimalTesting()

test_animals.get_type(cat)
test_animals.get_type(spot)

spot.multiple_sounds(4)
