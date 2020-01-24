# __ is called dunder
class Employee:
    
    raise_amt = 1.04

    def __init__(self, firstname,lastname, salary):
        self.firstname = firstname
        self.lastname = lastname
        self.salary = salary

    def get_fullname(self):
        return self.firstname + " " + self.lastname

    def apply_raise(self):
        self.salary = int(self.salary * self.raise_amt)

    def __repr__(self):
        return f"Employee ('{self.firstname}', '{self.lastname}', {self.salary})"

    def __str__(self):
        return f"{self.get_fullname()} - {self.salary}"

    def __add__(self, other):
        return self.salary + other.salary

emp_1 = Employee('John', 'Doe', 1500)
emp_2 = Employee('Sturat', 'Stark', 2000)

print(emp_1)

print(repr(emp_1))
print(str(emp_1))
print(emp_1 + emp_2)

print(emp_1)
print(f"{emp_1.get_fullname()}'s salary: {emp_1.salary}")
emp_1.apply_raise()
print(f"{emp_1.get_fullname()}'s salary: {emp_1.salary}")

