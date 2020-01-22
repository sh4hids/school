class Employee:

    raise_amount = 1.04
    total_employee = 0

    def __init__(self, first_name, last_name, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.salary = salary
        self.email = first_name.lower() + '.' + last_name.lower() + '@company.com'

        Employee.total_employee += 1

    def print_fullname(self):
        print(f"{self.first_name} {self.last_name}")

    def apply_raise(self):
        self.salary = int(self.salary * self.raise_amount)

    @classmethod
    def set_raise_amount(cls, amount):
        cls.raise_amount = amount

    @classmethod
    def from_string(cls, emp_info):
        first_name, last_name, salary = emp_info.split('-')
        return cls(first_name, last_name, salary)

    @staticmethod
    def is_workday(day):
        if day.weekday() == 5 or day.weekday() == 6:
            return False
        return True

print("Totatl employee: ", Employee.total_employee)

emp_1 = Employee('John', 'Doe', 5000)
emp_2 = Employee('Stuart', 'Bill', 10000)

print(emp_1.email)
print(emp_2.email)

emp_1.print_fullname()
emp_2.print_fullname()

print("-" * 10)
print(emp_1.salary)
emp_1.apply_raise()
print(emp_1.salary)

print("Totatl employee: ", Employee.total_employee)

Employee.set_raise_amount(1.5)
emp_1.apply_raise()

print(Employee.raise_amount)
print(emp_1.salary)

emp_3 = Employee.from_string("James-Bond-7500")
emp_3.print_fullname()

import datetime

date = datetime.date(2019, 7, 21)

print(Employee.is_workday(date))
