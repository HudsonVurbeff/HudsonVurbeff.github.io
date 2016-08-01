var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

if(!is_chrome)
{
    window.location.href = "http://stackoverflow.com";
    //window.location.href = "someOtherFile.html";
}

window.onload = function(){
var e = document.getElementById("circle");
e.addEventListener("animationend", myEndFunction);
}

function myEndFunction() {
    document.getElementById("RecRound").style.animationPlayState = "running";
}