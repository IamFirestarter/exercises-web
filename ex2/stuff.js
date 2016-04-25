function myJSfunction(elem){
    var value = elem.value;
    var id = elem.id;
    // console.log(value,id);

    var div = document.getElementById('update');
    if (value == ''){
        div.innerHTML = "You must enter something.";
    } else {
    div.innerHTML = "Length is: "+ value.length;}

}