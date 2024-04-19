class Employee:
    def __init__(self, emp_id, name, position, salary):
        self.emp_id = emp_id
        self.name = name
        self.position = position
        self.salary = salary

# Sample employee data
employees = [
    Employee(1, "John Doe", "Manager", 5000),
    Employee(2, "Jane Smith", "Developer", 4000),
    Employee(3, "Michael Johnson", "Designer", 3500),
    Employee(4, "Emily Davis", "Marketing", 3000),
    Employee(5, "David Brown", "Sales", 3200),
    Employee(6, "Sarah Wilson", "HR", 3800),
    Employee(7, "Daniel Miller", "Accountant", 4500),
    Employee(8, "Olivia Martinez", "Admin", 3700),
    Employee(9, "James Taylor", "Support", 3400),
    Employee(10, "Sophia Anderson", "Intern", 2500)
]

def process_salaries(employees, month):
    # Process salaries for the selected month
    for emp in employees:
        # Sample logic for calculating salary (e.g., based on position)
        if emp.position == "Manager":
            emp.salary += 1000
        elif emp.position == "Intern":
            emp.salary *= 0.8  # Example deduction for interns

def print_salary_report(employees, month):
    print(f"Salary Report for {month}:")
    for emp in employees:
        print(f"{emp.name} - {emp.salary}")

# Example usage
selected_employees = employees  # You can select specific employees here if needed
selected_month = "April 2024"

process_salaries(selected_employees, selected_month)
print_salary_report(selected_employees, selected_month)
