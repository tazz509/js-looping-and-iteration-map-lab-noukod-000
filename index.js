// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function (driver) {
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue){
    return driversWithRevenueOver(drivers,revenue).map(driver => driver.name);
}

function exactMatch(drivers, objectSpec){
    return drivers.filter(function (driver) {
        return driver[Object.keys(objectSpec)[0]] == Object.values(objectSpec)[0];
    });
}

function exactMatchToList(drivers, objectSpec){
    return exactMatch(drivers,objectSpec).map(driver => driver.name);
}
