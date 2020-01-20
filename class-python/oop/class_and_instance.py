class Employee:
    def __init__(self, first_name, last_name, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.salary = salary
        self.email = first_name.lower() + '.' + last_name.lower() + '@company.com'

    def print_fullname(self):
        print(f"{self.first_name} {self.last_name}")


emp_1 = Employee('John', 'Doe', 5000)
emp_2 = Employee('Stuart', 'Bill', 10000)

print(emp_1.email)
print(emp_2.email)

emp_1.print_fullname()
emp_2.print_fullname()
