const repeatString = function(message, numRepeats) {
    let finalString = '';
    if (numRepeats < 0) {
        return "ERROR";
    }
    for (let i = 0; i < numRepeats; i++) {
        finalString += message;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
