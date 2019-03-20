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
