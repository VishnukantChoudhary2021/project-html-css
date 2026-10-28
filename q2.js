let employees = [
    { id: 101, name: "Rahul", salary: 45000, department: "IT" },
    { id: 102, name: "Priya", salary: 60000, department: "HR" },
    { id: 103, name: "Amit", salary: 75000, department: "IT" },
    { id: 104, name: "Neha", salary: 35000, department: "Sales" },
    { id: 105, name: "Vikas", salary: 80000, department: "IT" }
];



let namee=employees.map( emp => emp.name)
console.log(namee);


// let highsal=employees.filter((emp)=>{
//     if(emp.salary>50000){
//         return emp.salary
//     }
// })


let highsal=employees.filter( emp => emp.salary>5000)
console.log("employee with highest salry >50000 :",highsal);


// let emp=employees.find( (emp)=>{
//     if(emp.id == 103){
//         return emp
//     }
// })


//employe with id 103
let emp=employees.find( (emp)=> emp.id==103)
console.log("employee with id 103 ",emp);


let itEmployees = employees.filter(emp => emp.department === "IT");
console.log("IT Employees:", itEmployees);




let increasedSalary=employees.map( (emp)=>({
    name:emp.name,
    salary:emp.salary*1.10
})
    
)

console.log(increasedSalary);



































