// taking Input 
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const result = parseFloat(inputText);
    // clear the field
    inputField.value = '';
    return result;
}

function calculate(num1, num2) {
    const addition = (num1 + num2).toFixed(2);
    const addTotal = document.getElementById('add');
    addTotal.innerText = addition;

    const subtraction = (num1 - num2).toFixed(2);
    const subTotal = document.getElementById('subtraction');
    subTotal.innerText = subtraction;

    const multipliaction = (num1 * num2).toFixed(2);
    const multiTotal = document.getElementById('multiplication');
    multiTotal.innerText = multipliaction;

    const division = (num1 / num2).toFixed(2);
    const divTotal = document.getElementById('division');
    divTotal.innerText = division;

}

document.getElementById('calculate_button').addEventListener('click',
    function () {
        const firstValue = getInputValue('first_input');
        const secondValue = getInputValue('second_input');
        calculate(firstValue, secondValue);


    });
