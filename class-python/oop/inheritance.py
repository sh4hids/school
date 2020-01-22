class Employee:
    
    raise_amt = 1.04

    def __init__(self, first_name, last_name, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.salary = salary

    def apply_raise(self):
        self.salary = int(self.salary * self.raise_amt)

    def get_fullname(self):
        return self.first_name + " " + self.last_name


class Developer(Employee):
    raise_amt = 1.10

    def __init__(self, first_name, last_name, salary, prog_lang):
        super().__init__(first_name, last_name, salary)
        self.prog_lang = prog_lang


class Manager(Employee):
    def __init__(self, first_name, last_name, salary, employees=None):
        super().__init__(first_name, last_name, salary)
        if employees is None:
            self.employees = []
        else:
            self.employees = employees

    def add_employee(self, employee):
        if employee not in self.employees:
            self.employees.append(employee)

    def remove_employee(self, employee):
        if employee in employees:
            self.employees.remove(employee)

    def list_employee(self):
        for e in self.employees:
            print('-->', e.get_fullname())
 

dev_1 = Developer('John', 'Doe', 5000, 'Python')
dev_2 = Developer('Micheal', 'Jonson', 6000, 'JavaScript')

print(dev_1.get_fullname())

print(dev_1.salary)
dev_1.apply_raise()
print(dev_1.salary)

print(dev_1.prog_lang)

man_1 = Manager('James', 'Bond', 1000,  [dev_1])

man_1.list_employee()
man_1.add_employee(dev_2)
man_1.list_employee()
