let firstNum = '';
let secondNum = '';
let isEditingFirstNumber = true;
let operator = '';

function clearResult() {
    document.getElementById('result').value = '';
}

function display(value) {
    document.getElementById('result').value += value;
}

function numberClicked(value) {
    display(value);
    if (isEditingFirstNumber) {
        firstNum += value;
    } else {
        secondNum += value;
    }
}

function operatorClicked(value) {
    display(value);
    isEditingFirstNumber = false;
    operator = value;
}

function calc(value) {
    const parsedFirstNum = parseFloat(firstNum);
    const parsedSecondNum = parseFloat(secondNum);
    let result = 0;

    switch (operator) {
        case '+':
            result = parsedFirstNum + parsedSecondNum;
            break;
        case '-':
            result = parsedFirstNum - parsedSecondNum;
            break;
        case '*':
            result = parsedFirstNum * parsedSecondNum;
            break;
        case '/':
            result = parsedFirstNum / parsedSecondNum;
            break;
    }
    
    document.getElementById('result').value = result;
}