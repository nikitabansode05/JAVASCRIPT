import Employee from "./employee.js";
import SalesEmployee from "./salesEmployee.js";
import SalesManager from "./salesManager.js";

const emp = new Employee("Nikita Bansode", 1, "nikita@gmail.com", 50000, 5000, 3000);
const salesEmployee=new SalesEmployee(1,"Harry Potter","harry@gmail.com",40000,3000,5000,1000);
const salesManager=new SalesManager(1,"Hermaney Granger","hermaney@gmail.com",60000,5000,4000,1000,500);
console.log("*********************************************************************");
console.log(emp);
console.log(salesEmployee);
console.log(salesManager);

console.log("*********************************************************************");
console.log("Compute Pay of Employee : " + emp.computePay());
console.log("Compute Pay of Sales Employee : " + salesEmployee.computePay());
console.log("Compute pay of Sales Manager : "+salesManager.computePay());

console.log("*********************************************************************");
console.log(`Do Work of Sales Employee : ${salesEmployee.doWork()}`);
console.log("Do work of Sales Manager : "+salesManager.doWork());

console.log("*********************************************************************");
var checkTypeOf = typeof Employee;
console.log(checkTypeOf);
console.log("*********************************************************************");

const staff = [
    emp,salesEmployee,salesManager
];

for(const printEmployee of staff){
    console.log(printEmployee);
}
console.log("*********************************************************************");
salesManager.appraise();
console.log("*********************************************************************");

// only define behaviour/characteristics but it should be implemented by other class.
// when we want to create object then its defined as class.
// role is interface