// Write your solution in this file!
const employee = { 
    name: "sarah",
    streetAddress: "67 spruce street" };


    function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}
    newObj[key] = value;

    return newObj;
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
        employee[key]= value;
        return employee
    }

    function deleteFromEmployeeByKey(employee, key) {
        const newObj = {...employee}
        delete newObj[key]
        return newObj

       // console.log(newObj)
    }
    
    function destructivelyDeleteFromEmployeeByKey(employee, key){
        delete employee[key]
        return employee
    }
