function compute()
{
    var principal = document.getElementById("principal").value;
    if (!validate(principal, "Amount", "principal")) {
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var res = principal * years * rate / 100;
    var targetYear = new Date().getFullYear() + parseInt(years);
    //alert("prinicipal " + principal + ", targetYear " + targetYear + ", res " + resFormat);
    document.getElementById("result").innerHTML = 
        "If you deposit <span class='highlight'>" + principal +"</span>,<br>"
      + "at an interest rate of <span class='highlight'>" + rate + "%</span>.<br>"
      + "You will receive an amount of <span class='highlight'>" 
      + res + "</span>,<br>"
      + "in the year <span class='highlight'>" + targetYear + "</span>"
      ;
}

//update rate-val when rate is changed.
function rateChanged()
{
    rate = document.getElementById("rate").value;
    document.getElementById("rate-val").innerHTML = rate + "%";
}

//validation for val - if value is null, displays a message telling the user
//to enter a value for name (label of the element) and sets focus to id (id of the element).
function validate(val, name, id) 
{
    if ((val === undefined || val == null || val.length <= 0)) {
        alert("Please enter a value for " + name);
        document.getElementById(id).focus();
        return false;
    }
    return true;
}