function myJSfunction(){
	var str1 = "<p> > Welcome commander Ripley. It has been a long time. </p>";
	var str2 = "<p>> My records show your last entry was on June 6th, 2122.</p>";
	var str3 = "<p>> How can I be of assistance? (e.g. logs, status, crew...)</p>";
    var str4 = "<p><input type='text' id='input1' size='28' autofocus /></p>";
	var res = str1.concat(str2,str3,str4);
    var x = document.getElementById('input1').value;
    if (x == "ripley"){
        document.getElementById("reset").innerHTML = res;
        // var reply = "> Welcome commander Ripley"
    } else {
    	var err1 = "<p class='error'> > Your ID: '"
    	var err2 = "' is unknown. Login will reset in 3 seconds... </p>"
    	var error = err1.concat(x,err2);
        document.getElementById("reset").innerHTML = error;
        // timeout https://stackoverflow.com/questions/24849/is-there-some-way-to-introduce-a-delay-in-javascript
        setTimeout(function(){location.reload()},3000);
    }
}