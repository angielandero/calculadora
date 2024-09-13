const panelInput = document.getElementById('panel-input');
let firstNum, secondNum;
let operation;

function btnDeleteClicked(e) {
    panelInput.value = null;
}

function btnEqualClicked(e) {
    let result;
    secondNum = parseFloat(panelInput.value);

    switch (operation) {
        case '+':
            result = firstNum + secondNum;
            break;

        case '-':
            result = firstNum - secondNum;
            break;

        case '*':
            result = firstNum * secondNum;
            break;

        case '/':
            result = firstNum / secondNum;
            break;

        default:
            result = firstNum;
            break;
    }

    panelInput.value = result;
}

function btnNbrClicked(e) {

    const value = e.target.innerHTML;
    if (value === '+'
        || value === '-'
        || value === 'x'
        || value === '/') {
        firstNum = parseFloat(panelInput.value);
        operation = value;
        panelInput.value = null;

    } else {
        panelInput.value += value;
    }
}