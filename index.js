var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

if(!is_chrome)
{
    window.location.href = "http://stackoverflow.com";
    //window.location.href = "someOtherFile.html";
}

window.onload = function(){
document.getElementById("circle").addEventListener("animationend", myEndFunction);
document.getElementById("hello").addEventListener("animationend", myEndFunction2);
}

function myEndFunction() {
    document.getElementById("hello").style.animationPlayState = "running";
}

function myEndFunction2() {
    document.getElementById("listt").style.animationPlayState = "running";
}
