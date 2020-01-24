class Employee:

    raise_amt = 1.04
    initial_salary = 1000

    def __init__(self, firstname,lastname, salary):
        self.firstname = firstname
        self.lastname = lastname
        self.salary = salary

    @property
    def email(self):
        return f"{self.firstname}.{self.lastname}@email.com"

    @property
    def fullname(self):
        return self.firstname + " " + self.lastname

    def apply_raise(self):
        self.salary = int(self.salary * self.raise_amt)

    @fullname.setter
    def fullname(self, name):
        firstname, lastname = name.split(' ')
        self.firstname = firstname
        self.lastname = lastname
        self.salary = self.initial_salary
emp_1 = Employee('John', 'Doe', 1500)
emp_2 = Employee('Sturat', 'Stark', 2000)

print(emp_1.fullname)
print(emp_1.email)

emp_1.firstname = 'Json'

print(emp_1.fullname)
print(emp_1.email)

emp_1.fullname = "James Bond"

print(emp_1.fullname)
print(emp_1.email)




