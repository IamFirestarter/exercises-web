function myJSfunction(){
    var x = document.getElementById('input1').value;
    if (x == "ripley"){
        document.getElementById("reset").innerHTML = "<p> > Welcome commander Ripley. It has been a long time. </p><p>> My records show your last entry was on June 6th, 2122.</p><p>> How can I be of assistance?</p>"
        // var reply = "> Welcome commander Ripley"
    } else {
        document.getElementById("reset").innerHTML = "<p class='error'> > Please try again. </p>"
    }
    return 0;
}