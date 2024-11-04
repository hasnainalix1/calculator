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
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}

function calculate(operation) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (operation === 'add') {
        result = add(num1, num2);
    } else if (operation === 'subtract') {
        result = subtract(num1, num2);
    } else if (operation === 'multiply') {
        result = multiply(num1, num2);
    } else if (operation === 'divide') {
        result = divide(num1, num2);
    }

    document.getElementById('result').innerText = result;
}