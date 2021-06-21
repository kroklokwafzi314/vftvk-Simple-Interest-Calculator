function compute()
{
    p = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    var res = p * (1 + (rate /100))**years;
    var resFormat = res.toFixed(2);
    var targetYear = 2020 + years;
    document.getElementById("result").innerHTML = "If you deposit " + p +",<br>"
      + "at an interest rate of " + rate + "%.<br>"
      + "You will receive an amount of " + resFormat + ",<br>"
      + "in the year " + targetYear;
}

function rateChanged()
{
    rate = document.getElementById("rate").value;
    document.getElementById("rate-val").innerHTML = rate + "%";
}
        