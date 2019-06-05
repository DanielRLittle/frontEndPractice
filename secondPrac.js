const multiply1 = (num1, num2) => num1 * num2;

function multiplyNumbers() {
    const doMultiplication = (num1, num2) => num1 * num2;
    let val = 1;
    for (let i = 0; i < arguments.length; i++) {
        val = doMultiplication(val, arguments[i]);
    }
}
const multiply2 = () => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    // debugger;
    let val = multiply1(num1, num2);
    console.log(val);
    let val2 = document.createElement("p");
    val2.innerHTML = val;
    document.body.appendChild(val2);
}

function doThing(){
    console.log("Hello again!")
}