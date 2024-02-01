const palindromes = function (str) {
    const toEvaluate = str.replace(/\W+/g, '').toLowerCase();
    let arrayLength = toEvaluate.length;
    for (let index = 0; index < toEvaluate.length/2; index++) {
        if (toEvaluate[index]!=toEvaluate[arrayLength-1-index]) {
            return false;
        }        
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
