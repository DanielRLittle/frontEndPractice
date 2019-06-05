const Danny = {
    name: "Danny",
    age: 24,
    height: "5'8",
    pets: {
        Chester: "dog",
        Oliver: "dog",
    }
}
function printDanny() {
    document.getElementById("hello").innerText = Danny.name +'\n' + Danny.age;
    // document.getElementById("hello").innerHTML = Danny.age;
}

printDanny();