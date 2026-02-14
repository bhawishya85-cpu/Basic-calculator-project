let display = document.getElementById("display"); //getting display to show numbers and calculations

function appendValue(value) {
    display.value += value;
} //function to append the value of the button clicked to the display

function clearDisplay() {
    display.value = "";
} //function to clear the display when the clear button is clicked

function deleteLast() {
    display.value = display.value.slice(0, -1);
} //function to delete the last character from the display when the delete button is clicked

function calculate() {
    let expression = display.value;

    if (expression === "") {
        display.value = "Empty";
    }

    else if (
        expression.endsWith("+") ||
        expression.endsWith("-") ||
        expression.endsWith("*") ||
        expression.endsWith("/")
    ) {
        display.value = "Invalid";
    }

    else {
        display.value = eval(expression);
    }
} //function to check for empty input and invalid expressions before evaluating the expression using eval() function when the equals button is clicked 
