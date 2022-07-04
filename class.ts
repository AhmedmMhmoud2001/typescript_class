class Employee 
{
    name:string;
    private age: number;
    constructor(){
        console.log("Employee")
    }
    ShowEmployeeInfo()
    {
        console.log(this.name)
        // console.log(this.age)
    };
}
let ahmed =new Employee;
ahmed.name="ahmed";
// ahmed.age=21;
ahmed.ShowEmployeeInfo();

let mahmoud = new Employee;
mahmoud.name="mahmoud";
// mahmoud.age =30 ;
mahmoud.ShowEmployeeInfo();

class Clint extends Employee 
{
    project:string;

    ShowClintInfo()
    {
        console.log(this.project);
    }
}

let clint1 =new Clint;
clint1.name="hamd";
// clint1.age=38;
clint1.project="fronend";
clint1.ShowEmployeeInfo();