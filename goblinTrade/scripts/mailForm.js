document.getElementById("headerMail").addEventListener("click", showMailForm);
document.getElementById("infoMailTo").addEventListener("click", showMailForm);
document.getElementById("footerMailInfo").addEventListener("click", showMailForm);
document.getElementById("mailFormIconClose").addEventListener("click", hideMailForm);

function showMailForm(){
	document.getElementById("mailFormWrapper").classList.toggle("showMailForm");
	returnBar();
	returnAdvancedSearch();
	hideInfo();
}

function hideMailForm(){
	document.getElementById("mailFormWrapper").classList.remove("showMailForm");
	document.getElementById("mailFormTextAbsent").classList.remove("mailFormTextAbsentOn");
}

document.body.addEventListener("click", closeMail);
function closeMail(e) {
	if (document.getElementById("mailFormWrapper").contains(e.target) == false &&
			e.target.id != "headerMail" &&
			e.target.id != "infoMailTo" &&
			e.target.id != "buttonUpIcon" &&
			document.getElementById("footerMailInfo").contains(e.target) == false) {
		hideMailForm();
	}
}

document.getElementById("mailFormSendButton").addEventListener("click", sendMail);
document.getElementById("mailFormClearButton").addEventListener("click", clearMailText);
function clearMailText() {
	document.getElementById("mailFormText").value = '';
	document.getElementById("mailFormClientEmail").value = '';
	}

function sendMail() {
	let loadingCounter = 0;
	let clientMailText = document.getElementById("mailFormText").value;
	let clientMailAdress = document.getElementById("mailFormClientEmail").value;

	if (checkClientMailCorrect(clientMailAdress) && clientMailText != ''){
		document.getElementById("wrongMailFormClientEmail").innerHTML = "Enter your E-mail here:";
		document.getElementById("wrongMailFormClientEmail").style.color = "#32231a";
		document.getElementById("wrongMailFormClientEmail").style.filter = "drop-shadow(0px 0px 0px rgba(0,0,0,0.7))";
		sendMailToServer(clientMailText, clientMailAdress);
		showMailSend();
	} 

if (checkClientMailCorrect(clientMailAdress) == false) {
		document.getElementById("wrongMailFormClientEmail").innerHTML = "Wrong E-mail";
		document.getElementById("wrongMailFormClientEmail").style.color = "#ff5b38";
		document.getElementById("wrongMailFormClientEmail").style.filter = "drop-shadow(1px 1px 0px rgba(0,0,0,0.7))";
} else {
	document.getElementById("wrongMailFormClientEmail").innerHTML = "Enter your E-mail here:";
	document.getElementById("wrongMailFormClientEmail").style.color = "#32231a";
	document.getElementById("wrongMailFormClientEmail").style.filter = "drop-shadow(0px 0px 0px rgba(0,0,0,0.7))";
}

if (clientMailText == ''){
	document.getElementById("mailFormTextAbsent").innerHTML = "Write something to send";
	document.getElementById("mailFormTextAbsent").classList.add("mailFormTextAbsentOn");
} else {
	document.getElementById("mailFormTextAbsent").classList.remove("mailFormTextAbsentOn");
}
}


function showMailSend(){
	removeAllClicksOnLoad();
	// document.getElementById("mailFormTextAbsent").innerHTML = ``;
	document.getElementById("mailFormTextAbsent").classList.add("mailFormTextAbsentOn");
	let loadingCounter = 0;
	let loadingMailInterval = setInterval (function(){
		loadingCounter = loadingCounter + Math.floor(Math.random() * Math.floor(20));
		if (loadingCounter <= 100){
			document.getElementById("mailFormTextAbsent").classList.add("mailFormTextAbsentOn");
			document.getElementById("mailFormTextAbsent").innerHTML = `Sending your Mail: ${loadingCounter}%`;
			// console.log(document.getElementById("mailFormTextAbsent").innerHTML);
		} else if(loadingCounter > 100){
			document.getElementById("mailFormTextAbsent").classList.add("mailFormTextAbsentOn");
			loadingCounter = 0;
			window.clearInterval(loadingMailInterval);
			document.getElementById("mailFormTextAbsent").innerHTML = `Thanks for your Mail!`;
			// console.log(document.getElementById("mailFormTextAbsent").innerHTML);
			returnAllClicksOnLoad();
			clearMailText();
		}
	},300)
}

document.getElementById("mailFormText").addEventListener("input", hideMailFormTextAbsentOn);
function hideMailFormTextAbsentOn(){
	document.getElementById("mailFormTextAbsent").classList.remove("mailFormTextAbsentOn");
}


function checkClientMailCorrect(clientEmail){
	let spaceCheck = (clientEmail.match(/\s/g) || []).length;
	let atNumber = (clientEmail.match(/@/g) || []).length; // number of @ (should be one)
	let atOn = (clientEmail.match(/[^@]\@[^.@]/g) || []).length; // symbol(non at) "@" symbol(non dote,at,space)
	let doteOn = (clientEmail.match(/[^.@]\.[^.@]/g) || []).length; // symbol(non dote,at,space) "." symbol(non dote,at,space)

	if (clientEmail.length > 0 && atNumber == 1 && atOn == 1 && doteOn >= 1 && spaceCheck == 0){
		return true
	}else{
		return false
	}
}


function sendMailToServer(clientMailText, clientMailAdress){
		console.log(clientMailText);
		console.log(clientMailAdress);
}