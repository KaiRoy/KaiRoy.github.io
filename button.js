//Project 1 Button
var counter1 = 0;
var counter2 = 0;

var contentsm1 = "More Content";
var contentsl1 = "Less Content";
document.getElementById("button1").addEventListener("click", ContentChange("button1", counter1, "data1", contentsm1, contentsl1));

//Project 2 Button

var contentsm2 = "Even More Content";
var contentsl2 = "Even Less Content";
document.getElementById("button2").addEventListener("click", ContentChange("button2", counter2, "data2", contentsm2, contentsl2));

//Show moreless function
function ContentChange(btn, counter, data, contentsm, contentsl) {
	if (counter == 0) { 
		document.getElementById(data).innerHTML = contentsl;
		document.getElementById(btn).innerHTML = "Show More";
		counter = 1;
	}
	else { 
		document.getElementById(data).innerHTML = contentsm;    
		document.getElementById(btn).innerHTML = "Show Less";
		counter = 0;
	}
}
