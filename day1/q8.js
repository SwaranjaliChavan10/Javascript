const employees = [
    { name: "John Doe", salary: 50000 },
    { name: "Jane Smith", salary: 60000 },
    { name: "Bob Johnson", salary: 55000 },
    { name: "Alice Brown", salary: 45000 }
];
const filterSalary = employees.reduce((total, emp) => 
     total = total + emp.salary, 0
    );
console.log(filterSalary);