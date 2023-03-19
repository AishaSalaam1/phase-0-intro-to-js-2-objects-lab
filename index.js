// Write your solution in this file!
const employee = {
    "name":"Ali",
    "streetAddress":"11 Broadway"
   };
   function updateEmployeeWithKeyAndValue(employee , key, value) {
    // let moreInfo = {...object};
    let newemployee ={...employee}
    newemployee[key]=value
    return newemployee
   }
   console.log(employee);
   console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Sam'));
   function destructivelyUpdateEmployeeWithKeyAndValue(employee , key, value) {
   employee[key]=value
   return employee
   }
   // console.log(destructivelyUpdateEmployeeWithKeyAndValue());
   function deleteFromEmployeeByKey(employee, key) {
    let anothernewemployee = {...employee}
    delete anothernewemployee[key]
    return anothernewemployee;
   }
   console.log(deleteFromEmployeeByKey(employee, 'name'));
   function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
   }
   console.log(deleteFromEmployeeByKey(employee, 'name'));
