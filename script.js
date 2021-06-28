const myClock = setInterval( ()=> {
    myTime();
}, 1000);

function myTime() {
    let date = new Date();
    document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}
