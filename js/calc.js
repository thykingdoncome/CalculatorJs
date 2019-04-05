// calling the number function to appear on the answer feild when the buttons are clicked

function getNumber(numb) {
    let input_var = document.getElementById('answerFeild');
    input_var.value += numb;
}

// the clearScreen funtion to empty the answerfeild 
function clearScreen() {
    document.getElementById('answerFeild').value = "";
}

// the function to get the math operators
function getOperand(operand) {
    let input_var = document.getElementById('answerFeild');
    input_var.value += operand;
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