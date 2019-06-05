function requestyBoi() {
    if (req.readyState === 4) {
        console.log(req.responseText);

    }
}

function fetchData(url) {
    return new Promise((resolve, reject) => {
        const req2 = new XMLHttpRequest();
        req2.onreadystatechange = () => {
            if (req2.readyState === 4) {
                if (req2.status === 200) {
                    console.log("Yo bredda, it worked!")
                    resolve(req2);
                }
                else {
                    reject("nope");
                }
            }
        }
        req2.open("GET", url);
        req2.send();
    })
}

function requestyRoi(request) {
    if (request.readyState === 4) {
        console.log(request.responseText);
        document.getElementById("requesty").innerHTML = JSON.parse(request.responseText).squadName;
        document.getElementById("superhero1").innerHTML = JSON.parse(request.responseText).members[0].name;
        document.getElementById("shage1").innerHTML = JSON.parse(request.responseText).members[0].age;
        document.getElementById("superhero2").innerHTML = JSON.parse(request.responseText).members[1].name;
        document.getElementById("shage2").innerHTML = JSON.parse(request.responseText).members[1].age;
        document.getElementById("superhero3").innerHTML = JSON.parse(request.responseText).members[2].name;
        document.getElementById("shage3").innerHTML = JSON.parse(request.responseText).members[2].age;
    }
}

fetchData("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json").then((x) => {
    requestyRoi(x);
});