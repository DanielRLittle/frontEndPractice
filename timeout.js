function tOMessage() {
    document.getElementById("timeout").innerHTML = "You have been timed out! Redirecting to the homepage in 5 seconds."
}

function timeout(){
    setTimeout(() => {
        window.location.href = 'file:///C:/Users/Admin/Desktop/frontEndPractice/Account.html';    
        }, 5000);
    
}

tOMessage();
timeout();