const sumAll = function(start, end) {
    let sum = 0;
    if (start > end) {
        [start, end] = [end, start];
    }
    if (start < 0 || end < 0 || !Number.isFinite(start) || !Number.isFinite(end)) {
        return "ERROR";
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
