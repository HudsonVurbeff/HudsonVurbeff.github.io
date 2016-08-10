window.onload = function(){
    document.getElementById("zIn").style.animationPlayState = "running";
    $("#Grad").click(function() {
  console.log("clicker");
        $("#ContentHolder").scrollintoview({duration: 500});
});
}