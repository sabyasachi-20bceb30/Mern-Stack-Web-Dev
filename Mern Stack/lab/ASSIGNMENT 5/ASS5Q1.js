function Employee(name,email,phone,basic_salary){
    return{
        name:name,
        email:email,
        phone:phone,
        basic_salary:basic_salary,

        total_salary:function(){
            let TS = this.basic_salary + 0.15*this.basic_salary + 0.20*this.basic_salary;
            if(this.basic_salary > 40000 && this.basic_salary <= 50000)
                TS = TS - 0.10*this.basic_salary;
            else if(this.basic_salary > 50000 && this.basic_salary <= 70000)
                TS = TS - 0.15*this.basic_salary;
            else if(this.basic_salary > 70000)
                TS = TS - 0.20*this.basic_salary;
            else
                TS = TS - 0.30*this.basic_salary;
            return TS;
        }
    }

}

const emp = Employee('Sabyasachi','sabyaschibiswal141@gmail.com',8456091733,65000);

console.log(` NAME:${emp.name} \n EMAIL:${emp.email} \n PHONE:${emp.phone} \n BASIC SAL:${emp.basic_salary} \n TOTAL SAL:${emp.total_salary()}`)