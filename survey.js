function clear(){
	document.getElementById("fName").innerHTML="";
	document.getElementById("lName").innerHTML="";
	document.getElementById("mail").innerHTML="";
	document.getElementById("r").innerHTML="";
}

function sendSurvey() {
	clear();
	var first = document.getElementById("firstName").value;
	var last = document.getElementById("lastName").value;
	var mail = document.getElementById("eMail").value;	
	var rate = document.getElementById("rate").value;
	var isTrue = true;
	if(first == "") {
		document.getElementById("fName").innerHTML="input required";
		isTrue = false;
	}
	if (last == "") {
		document.getElementById("lName").innerHTML="input required";
		isTrue = false;
	}
	if (mail == "") {
		document.getElementById("mail").innerHTML="input required";
		isTrue = false;
	} 
	if (rate == "") {
		document.getElementById("r").innerHTML="please rate this site";
		isTrue = false;
	} 
	if (isTrue==true) {
		document.getElementById("form").submit();
	}
}
