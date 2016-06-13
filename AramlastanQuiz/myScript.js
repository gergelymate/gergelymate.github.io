var min = 1
var max = 10
var alert = "Alert"


function myFunction() {
    var x = document.getElementById("demo");
    x.style.fontSize = "25px";
    x.style.color = "red";
}

function myFunction2() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < min || x > max) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

function myFunction3() {
	window.alert(alert)
}

function myFunction4() {
	window.write("Test")
}

console.log("Test")


document.getElementById("demo2").innerHTML = 10.50