const employee = {
        name: "firstName",
        streetAddress: "address",
}

console.log(employee)

function updateEmployeeWithKeyAndValue(object, key, value){
    return {
        ...object,
        [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue (object, key, value){
    object[key] = `${value}`
    return object
}

function deleteFromEmployeeByKey(object, key){
        const newObject = {...object}
        delete newObject[key]
        return newObject
}

function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object
}

console.log(deleteFromEmployeeByKey(employee, 'name'))

//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam"))

/*
'deleteFromEmployeeByKey(employee, key)'
function () {
    it('deletes `key` from a clone of employee and returns the new employee
    (it is non-destructive)',

    should delete the property with that key from the employee Object.
    This should not mutate original employee Object
    return newObject without identified key-value pair (use spread)
}
function destructivelyDeleteFromEmployeeByKey(){
    same as above but should mutate original object
}

*/