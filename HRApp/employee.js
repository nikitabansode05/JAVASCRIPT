class Employee{
    // #name = "";   // # is used for declaring private 
    // #id = 0;
    // #email = " ";
    // #basicSalary = 0.0;
    // #hra = 0.0;
    // #tax = 0.0;

    constructor(name,id,email,basicSalary,hra,tax){
        this.name=name;
        this.id=id;
        this.email=email;
        this.basicSalary=basicSalary;
        this.hra=hra;
        this.tax=tax;
    }

    computePay(){
        return (this.basicSalary+this.hra-this.tax);
    }

    doWork(){
        throw new Error("The abstract class is not implemented");
    }
}

module.exports=Employee;
// - Allowing var, let, or const would mix two different paradigms: block-scoped variables vs instance fields
