// Write your solution in this file!
const employee = {
    name: "Danielle",
    streetAddress: "123 Happy Street" 
}


function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    return {
        ...employee,
        name: "Sam",
        streetAddress: "11 Broadway"
    };
}

const newEmployee = updateEmployeeWithKeyAndValue(
    newEmployee,
    "Sam",
    "11 Broadway"
);


employee;

newEmployee;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = "Sam";
    employee.streetAddress = "12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, name, value) {
    const deletedFromEmployeeClone = {...employee};
    delete deletedFromEmployeeClone.name;
    delete deletedFromEmployeeClone.streetAddress;
    return deletedFromEmployeeClone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee.name;
        delete employee.streetAddress;
        return employee;
}

