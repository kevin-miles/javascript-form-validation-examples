var $ = function(id){ return document.getElementById(id); } 

var validate = function() 
{ 
    var first = $("f_name").value;
    var last = $("l_name").value;
    var error = false; //will turn to true if error is found, form won't submit unless this is false

    if(first==""){ $("error_f_name").innerText="* Please input first name"; 
error = true;}
    else { $("error_f_name").innerText=""; }
    if(last==""){ $("error_l_name").innerText="* Please input last name"; 
error = true; }
    else { $("error_l_name").innerText=""; }

    if(error==false){ $("send").submit(); }
    else{ return false;}
}

//wait for the window to load completely
window.onload = function() {
$("send").onclick = validate; //run the validate function when the send button is clicked
$("f_name").focus(); //make the browser focus on the first name input
 }
