const findTheOldest = function(arr) {
    let oldestAge = 0, oldestIndex;
    for (let index = 0; index < arr.length; index++) {
        let age;
        if (arr[index].yearOfDeath == undefined) {
            age = new Date().getFullYear() - arr[index].yearOfBirth;
        }
        else {
            age = arr[index].yearOfDeath - arr[index].yearOfBirth;
        }
        if (age > oldestAge) {
            oldestAge = age;
            oldestIndex = index;
        }
    }
    return arr[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
