import SalesEmployee from "./salesEmployee.js";
import IAppraisal from "./interface/IAppraisal.js"
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

    appraise(){
        console.log("The Sales Manager is appraising sales employee");
    }
}

export default SalesManager;