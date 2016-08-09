var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
var PageHandler = 0;

if(!is_chrome)
{
    //window.location.href = "http://stackoverflow.com";
    //window.location.href = "someOtherFile.html";
}

window.onload = function(){
document.getElementById("Fname").addEventListener("animationend", myEndFunction3);
document.getElementById("Personal").addEventListener("animationend", myEndFunction);
document.getElementById("Business").addEventListener("animationend", myEndFunction2);
document.getElementById("scrollOutCircle").addEventListener("animationend", redirect);
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

function fullestt(){
var $this = $("#Pcircle");
 var offset = $this.offset();
 var width = $this.width();
 var height = $this.height();

 var centerX = offset.left + width / 2;
 var centerY = offset.top + height / 2;
 console.log(centerX ,centerY);
document.getElementById("scrollout").style.top = centerY;
document.getElementById("scrollout").style.left = centerX;
document.getElementById("scrollOutCircle").style.animationPlayState = "running";
document.getElementById("Personal").style.zIndex = 2;
PageHandler = 1;
}

function fullestt2(){
var $this = $("#Bcircle");
 var offset = $this.offset();
 var width = $this.width();
 var height = $this.height();

 var centerX = offset.left + width / 2;
 var centerY = offset.top + height / 2;
 console.log(centerX ,centerY);
document.getElementById("scrollout").style.top = centerY;
document.getElementById("scrollout").style.left = centerX;
document.getElementById("scrollOutCircle").style.animationPlayState = "running";
document.getElementById("Business").style.zIndex = 2;
PageHandler = 2;
}

function redirect(){
    if(PageHandler == 1){
        window.location.href = "personal.html"
    } else if(PageHandler == 2){
        window.location.href = "business.html"
    }
}
