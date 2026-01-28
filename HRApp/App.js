import Employee from "./employee.js";
import SalesEmployee from "./salesEmployee.js";

const emp = new Employee("Nikita Bansode", 1, "nikita@gmail.com", 50000, 5000, 3000);
const salesEmployee=new SalesEmployee(1,"Harry Potter","harry@gmail.com",40000,3000,5000,1000);

console.log(emp);
console.log(salesEmployee);

console.log("Compute Pay of Employee : " + emp.computePay());
console.log("Compute Pay of Sales Employee : " + salesEmployee.computePay());


//console.log("Do Work of Employee : " + emp.doWork());
console.log("Do Work of Sales Employee : " + salesEmployee.doWork());










// only define behaviour/characteristics but it should be implemented by other class.
// when we want to create object then its defined as class.
// role is interface