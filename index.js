var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

if(!is_chrome)
{
    window.location.href = "http://stackoverflow.com";
    //window.location.href = "someOtherFile.html";
}

window.onload = function(){
document.getElementById("Fname").addEventListener("animationend", myEndFunction3);
document.getElementById("Personal").addEventListener("animationend", myEndFunction);
document.getElementById("Business").addEventListener("animationend", myEndFunction2);
}

function myEndFunction() {
    document.getElementById("Pname").style.animationPlayState = "running";
}

function myEndFunction2() {
    document.getElementById("Bname").style.animationPlayState = "running";
}

function myEndFunction3() {
    document.getElementById("Personal").style.animationPlayState = "running";
    document.getElementById("Business").style.animationPlayState = "running";
}
