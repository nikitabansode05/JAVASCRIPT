import SalesEmployee from "./salesEmployee.js";

class SalesManager extends SalesEmployee{
    constructor(id,name,email,hra,basicSalary,tax,incentive,bonus){
        super(id,name,email,hra,basicSalary,tax,incentive)
        this.bonus=bonus;
    }

    doWork(){
        return ("The Sales Manager is doing work");
    }

    computePay(){
        return (this.basicSalary+this.incentive+this.bonus+this.hra-this.tax);
    }
}

export default SalesManager;