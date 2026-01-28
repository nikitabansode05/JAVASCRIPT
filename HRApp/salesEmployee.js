import Employee from "./employee.js"

class SalesEmployee extends Employee{

    constructor(id,name,email,hra,basicSalary,tax,incentive){
        super(id,name,email,hra,basicSalary,tax)
        this.incentive=incentive;
    }

    doWork(){
        console.log("The Sales Employee is busy in work");
    }

    computePay(){
        return (this.basicSalary+this.incentive+this.hra-this.tax);
    }
}
export default SalesEmployee;
//module.exports = SalesEmployee;