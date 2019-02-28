// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function (emp){return emp.toLowerCase()});
}

function nameToAttributes(drivers) {
    return drivers.map(function (emp){const fullName = emp.split(' '); return {firstName: fullName[0], lastName: fullName[1]};})
}

function attributesToPhrase(drivers){
    return drivers.map(function (emp){
        return `${emp.name} is from ${emp.hometown}`;
    });
}
