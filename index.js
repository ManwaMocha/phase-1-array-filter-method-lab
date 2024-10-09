const { any } = require("expect");

// Code your solution here
const drivers = [
    'Alice ',
    'Bob ',
    'Charlie ',
    'Daisy ',
    'Ethan ',
    'Fiona ',
    'George ',
    'Hannah ',
    'Ian ',
    'Jessica ',
    'Kyle ',
    'Liam ',
    'Mia ',
    'Mora ',
    'Oscar ',
    'Paula ',
    'Sammy',
    'Sarah',
    'Sally'
];

function findMatching(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, query) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().startsWith(query.toLowerCase());
    });
}
function matchName(drivers, name) {
    return drivers.filter(function(driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}


