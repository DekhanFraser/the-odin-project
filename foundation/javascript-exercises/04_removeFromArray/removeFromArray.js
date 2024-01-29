const removeFromArray = function(arr, ...values) {
    return arr.filter(val => !values.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
