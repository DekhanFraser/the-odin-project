// Interactable items
let display = document.querySelector('.display');
let ac = document.querySelector('#AC');
let digits = document.querySelectorAll('.digit');
let operators = document.querySelectorAll('.operator');

// Operations variables
let a, b, operator;

// Operation stage
let enteringA = true, enteringB = false, operationComplete = false;

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
        return "ERROR";
    }
    return a / b;
}

function operate(operator, first, second) {
    let result;
    switch (operator) {
        case '+':
            result = add(first, second);
            break;

        case '-':
            result = subtract(first, second);
            break;

        case 'x':
            result = multiply(first, second);
            break;

        case '/':
            result = divide(first, second);
            break;
    
        default:
            break;
    }
    return result;
}

function resetCalculator() {
    a = undefined;
    b = undefined;
    operator = undefined;
    enteringA = true;
    enteringB = false;
    operationComplete = false;
    display.textContent = 0;

    console.log("Calculator reset");
}

// Event handlers
ac.addEventListener('click', () => resetCalculator());

// Digits
digits.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent.length >= 6 || operationComplete)
        {
            return;
        }
        if (display.textContent == 0 || enteringB) {
            display.textContent = button.textContent;
            enteringB = false;
        }
        else {
            display.textContent += button.textContent;
        }
    });
});

operators.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent == '=') {
            b = parseFloat(display.textContent);
            display.textContent = Math.round(operate(operator, a, b) * 100) / 100;
            operationComplete = true;
        }
        if (enteringA) {
            a = parseFloat(display.textContent);
            operator = button.textContent;
            enteringA = false;
            enteringB = true;
        }
    })
});

// Testing