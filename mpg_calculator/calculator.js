var $ = function(id) { return document.getElementById(id); }
var calculate = function()
{
    $("mpg").value = ""; 
    //clear last MPG value. this needs to be done to prevent an old correct value from continuing to show after erroneous input has been given

    var miles = parseFloat($("miles").value);
    var gas   = parseFloat($("gas").value);
    var error = false;

    //errors given when erroneous conditions are met
    var NaN_ERROR = "* Value must be numeric";
    var NEG_ERROR = "* Value must be a positive number";

    if(isNaN(miles))
    {
	error = true;
	$("miles_error").innerText = NaN_ERROR;
    }
    else if (miles < 0)
    {
	error = true;
	$("miles_error").innerText = NEG_ERROR;
    }
    else
    {
	$("miles_error").innerText = "";
    }

    if(isNaN(gas))
    {
	error = true;
	$("gas_error").innerText = NaN_ERROR;
    }
    else if (gas < 0)
    {
	error = true;
	$("gas_error").innerText = NEG_ERROR;
    }
    else
    {
	$("gas_error").innerText = "";
    }

    if(error == false)
    {
	var mpg = miles/gas; //gas is in gallons
	$("mpg").value = mpg.toFixed(2);
    }
}

var clear = function()
{
    $("miles").value = "";
    $("gas").value = "";
    $("mpg").value = "";
    $("miles_error").innerText = "";
    $("gas_error").innerText = "";
}

window.onload = function() {
    //add events
    $("calculate").onclick = calculate;
    $("clear").onclick = clear;
    $("miles").ondblclick = clear;

    $("miles").focus();
}
