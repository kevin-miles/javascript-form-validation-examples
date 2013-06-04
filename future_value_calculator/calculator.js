var $ = function(id) { return document.getElementById(id); }

var futureValue = function(time, annual_rate, inv)
{
    var investment = inv,
        rate       = annual_rate,
        years      = time;

    for(var i=1, future=investment; i<=years; i++)
    {
	future += (future * rate / 100);
    }
    return parseInt(future); //convert from float to int
}
var calculate = function()
{
    $("future").value = ""; 
    //clear future value. this needs to be done to prevent an old correct value from continuing to show after erroneous input has been given

    var investment = parseFloat($("investment").value);
    var interest   = parseFloat($("interest").value);
    var years      = parseInt($("years").value);

    var error = false;

    //errors given when erroneous conditions are met
    var NaN_ERROR = "* Value must be numeric";
    var NEG_ERROR = "* Value must be a positive number";                                                                                                                      
    if(isNaN(investment)) 
    {
	error = true;
	$("investment_error").innerText = NaN_ERROR;
    }
    else if (investment < 0)
    {
	error = true;
	$("investment_error").innerText = NEG_ERROR;
    }

    else
    {
	$("investment_error").innerText = "";
    }

    if(isNaN(interest))
    {
	error = true;
	$("interest_error").innerText = NaN_ERROR;
    }
    else if (interest < 0)
    {
	error = true;
	$("interest_error").innerText = NEG_ERROR;
    }
    else
    {
	$("interest_error").innerText = "";
    }

    if(isNaN(years))
    {
	error = true;
	$("years_error").innerText = NaN_ERROR;
    }
    else if (years < 0)
    {
	error = true;
	$("years_error").innerText = NEG_ERROR;
    }
    else
    {
	$("years_error").innerText = "";
    }

    if(error == false)
    {
	future = futureValue(years, interest, investment);
	$("future").value = future;
    }
}

var clear = function()
{
    $("investment").value = "";
    $("investment_error").innerText = "";
    $("interest").value = "";
    $("interest_error").innerText = "";
    $("years").value = "";
    $("years_error").innerText = "";
    $("future").value = "";
}

window.onload = function() {
    //add events
    $("calculate").onclick = calculate;
    $("clear").onclick = clear;

    $("investment").focus();
}
