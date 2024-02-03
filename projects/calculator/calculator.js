function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "ERROR: Cannot divide by zero";
    }
    return a / b;
}

let first, second, operator;

function operate(operator, first, second) {
    let result;
    switch (operator) {
        case '+':
            result = add(first, second);
            break;

        case value:
            result = subtract(first, second);
            break;

        case value:
            result = multiply(first, second);
            break;

        case value:
            result = divide(first, second);
            break;
    
        default:
            break;
    }
    return result;
}