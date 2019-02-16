//Project 1 Button
var counter1 = true;
var contentsm1 = "More Content";
var contentsl1 = "Less Content";

//Project 2 Button
var counter2 = true;
var contentsm2 = "More Content";
var contentsl2 = "Less Content";

document.getElementById("button1").addEventListener("click", ContentChange ("button1", counter1, "data1", contentsm1, contentsl1));
document.getElementById("button2").addEventListener("click", ContentChange ("button2", counter2, "data2", contentsm2, contentsl2));
document.getElementById("button1").addEventListener("click", console.log("Hi!"));

//Show moreless function
function ContentChange (btn, counter, data, contentsm, contentsl) {
	if (counter1 == true) { 
		document.getElementById("data1").innerHTML = "Please Work";
		//document.getElementById(btn).innerHTML = "Show More";
		counter1 = false;
	}
	else { 
		document.getElementById("data1").innerHTML = "Please work more";    
		//document.getElementById(btn).innerHTML = "Show Less";
		counter1 = true;
	}
}
