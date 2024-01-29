const reverseString = function(str) {
    let finalString = '';
    for (let i = str.length; i > 0 ; i--) {
        finalString += str[i-1];
    }
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
