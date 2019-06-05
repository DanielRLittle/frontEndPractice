function requestyToy(url) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 200) {
                    console.log("got the stuff!");
                    resolve(req);
                }
                else {
                    reject("could not find data!")
                }
            }
        }
        req.open("GET", url);
        req.send();
    });
}

function sendyPloy(data, url) {
    data = JSON.stringify(data);
    console.log(data);
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = () => {
            if (req.readyState === 4) {
                if (req.status === 201) {
                    console.log("Sent the stuff!");
                    resolve(req);
                }
                else {
                    reject("Where were you mate?!");
                }
            }
        }
        req.open("POST", url);
        req.setRequestHeader("Content-Type", "application/json");
        req.send(data);
    });
}

function displayeeMoi(request) {
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
}

requestyToy("http://localhost:8080/JavaEEServer-1.0/api/accounts/").then((x) => {
    displayeeMoi(x);
});

function transferPageyEnvoy() {
    let account = new Account(document.getElementById("inputtyfoi").value);
    console.log(account);
    sendyPloy(account, "http://localhost:8080/JavaEEServer-1.0/api/accounts/");
}