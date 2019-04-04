// calling the number function to appear on the answer feild when the buttons are clicked

function getNumber(numb) {
    let input_var = document.getElementById('answerFeild');
    switch (numb) {
        case 1:
            input_var.value += '1';
            break;
        case 2:
            input_var.value += '2';
            break;
        case 3:
            input_var.value += '3';
            break;
        case 4:
            input_var.value += '4';
            break;
        case 5:
            input_var.value += '5';
            break;
        case 6:
            input_var.value += '6';
            break;
        case 7:
            input_var.value += '7';
            break;
        case 8:
            input_var.value += '8';
            break;
        case 9:
            input_var.value += '9';
            break;
        case 0:
            input_var.value += '0';
            break;
        case '.':
            input_var.value += '.';
            break;
    }
}

// the clearScreen funtion to empty the answerfeild
function clearScreen() {
    document.getElementById('answerFeild').value = "";
}

// the function to get the math operators
function getOperand(operand) {
    let input_var = document.getElementById('answerFeild');
    switch (operand) {
        case '+':
            input_var.value += '+';
            break;
        case '-':
            input_var.value += '-';
            break;
        case '*':
            input_var.value += '*';
            break;
        case '/':
            input_var.value += '/';
            break;
    }
}

// the backspace function to delete the last input 
function backspace() {
    let input_var = document.getElementById('answerFeild');
    let backs = input_var.value;
    if (backs.length > 0) {
        backs = backs.substring(0, backs.length - 1);
        input_var.value = backs;
    }
}

// the equal to function...to equate calculations
function compute() {
    let input_var = document.getElementById('answerFeild');
    ans = Math.abs(+eval(input_var.value));
    document.getElementById('answerFeild').value = ans;
}