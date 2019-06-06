function newPage() {
    window.location.href = 'file:///C:/Users/Admin/Desktop/frontEndPractice/Account.html';
}
let output = window.sessionStorage.getItem("User");
output = JSON.parse(output);

function getThings() {
    console.log(output);
    document.getElementById("theID").innerHTML = output.id;
    document.getElementById("theName").innerHTML = output.name;
    window.sessionStorage.removeItem("User");
}

function checkThings() {
    if (!output) {
        window.location.href = 'file:///C:/Users/Admin/Desktop/frontEndPractice/timeout.html';
    }
}

checkThings();

getThings();
