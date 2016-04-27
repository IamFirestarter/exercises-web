function myJSfunction(){
    var input1 = document.getElementById('formValueId1'), value1 = input1.value;

    var input2 = document.getElementById('formValueId2'), value2 = input2.value;
    // console.log(value,id);

    var div = document.getElementById('update');
    if (value1 && value2 ){
    	div.innerHTML = value2 +" once said: \"" +value1 +"\"";
    } else {
    	div.innerHTML = "You must enter something in both boxes.";
    }
}