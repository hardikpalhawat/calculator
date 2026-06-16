function calculate(operator) {
    
    let num1Input = document.getElementById('num1').value;
    let num2Input = document.getElementById('num2').value;
    let resultDisplay = document.getElementById('resultDisplay');

    if (num1Input === '' || num2Input === '') 
       { resultDisplay.textContent = "Error: enter the values in both fields.";
        return; }
    
    let num1 = parseFloat(num1Input);
    let num2 = parseFloat(num2Input);
    let result = 0;

    if (operator === '+') {
        result = num1 + num2;
    } 
    else if (operator === '-')
         {
        result = num1 - num2;
    } 
    else if (operator === '*')
         {
        result = num1 * num2;
    } 
    else if (operator === '/')
         {
        // Validation: Prevent division by zero
        if (num2 === 0)
             {
            resultDisplay.textContent = "Cannot divide by zero.";
            return;
        }
        result = num1 / num2;
    }

    resultDisplay.textContent = "Result: " + result;
}