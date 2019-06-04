function multiply(num1, num2) {
    return num1 * num2;
}

function multiplyReturn(num1, num2) {
    let val = multiply(num1, num2);
    console.log(val);
}

multiplyReturn(3, 4);