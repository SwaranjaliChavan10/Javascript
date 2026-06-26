const employees = [
    { name: "John Doe", salary: 50000 },
    { name: "Jane Smith", salary: 60000 },
    { name: "Bob Johnson", salary: 55000 }
];
const filterSalary = employees.filter(emp => {
    return emp.salary > 50000;
});
console.log(filterSalary);