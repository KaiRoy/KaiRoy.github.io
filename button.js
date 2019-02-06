//Project 1 Button
var counter1 = 0;
var contentsm1 = "More Content";
var contentsl1 = "Less Content";
document.getElementById("button1").addEventListener("click", ContentChange("button1", counter1, "data1", contentsm1, contentsl1));

//Project 2 Button
var counter2 = 0;
var contentsm2 = "Even More Content";
var contentsl2 = "Even Less Content";
document.getElementById("button2").addEventListener("click", ContentChange("button2", counter2, "data2", contentsm2, contentsl2));

//Show moreless function
function ContentChange(btn, counter, data, contentsm, contentsl) {
	if (counter == 0) { 
		console.log("Hi!");
		document.getElementById(data).innerHTML = contentsl;
		document.getElementById(btn).innerHTML = "Show More";
		counter = 1;
	}
	else { 
		console.log("Bye!");
		document.getElementById(data).innerHTML = contentsm;    
		document.getElementById(btn).innerHTML = "Show Less";
		counter = 0;
	}
}
