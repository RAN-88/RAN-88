function showInfo() {
	document.getElementById("infoFrame").classList.toggle("showInfo");
	document.body.classList.toggle("bodyInfoStopScroll");
	document.getElementById("infoWrapperToScroll").scrollTop = 0;
	// document.getElementById("checkToScroll").offsetTop
}

function hideInfo() {
	document.getElementById("infoFrame").classList.remove("showInfo");
	document.body.classList.remove("bodyInfoStopScroll");
}

document.getElementById("hoverConceptComment").addEventListener("click", showInfo);
document.getElementById("headerInfoBtn").addEventListener("click", showInfo);
document.getElementById("infoFrameClose").addEventListener("click", hideInfo);

document.body.addEventListener("click", closeInfoOnMissClick);

function closeInfoOnMissClick(e) {
	// console.log(e.target);
if (document.getElementById("infoFrame").contains(e.target) == false &&
	 e.target.id != "infoFrameClose" &&
	 e.target.id != "headerInfoBtn" &&
	 e.target.id != "hoverConceptComment" &&
	 e.target.id != "orderToScroll" &&
	 e.target.id != "checkToScroll" &&
	 e.target.id != "payToScroll" &&
	 e.target.id != "waitFrameClose" &&
	 e.target.id != "enjoyFrameClose" &&
	 document.getElementById("conceptWrapper").contains(e.target) == false){
		hideInfo()
}
}

function orderClicked(){
	showInfo();
	document.getElementById("infoWrapperToScroll").scrollTop = document.getElementById("orderToScroll").offsetTop - document.getElementById("infoWrapperToScroll").getBoundingClientRect().top;
	// document.getElementById("infoWrapperToScroll").scrollTop = 427 - 200;
	// document.getElementById("orderToScroll").scrollIntoView();
	// infoFrame
	// console.log(document.getElementById("infoFrame").getBoundingClientRect().top);

// console.log(document.getElementById("infoWrapperToScroll").getBoundingClientRect().top);
// console.log(document.getElementById("orderToScroll").offsetTop);
// console.log(document.getElementById("orderToScroll").getBoundingClientRect().top);

}
function checkClicked(){
	showInfo();
	document.getElementById("infoWrapperToScroll").scrollTop = document.getElementById("checkToScroll").offsetTop - document.getElementById("infoWrapperToScroll").getBoundingClientRect().top;
}

function payClicked(){
	showInfo();
	document.getElementById("infoWrapperToScroll").scrollTop = document.getElementById("payToScroll").offsetTop - document.getElementById("infoWrapperToScroll").getBoundingClientRect().top;
}

function waitClicked(){
	showInfo();
	document.getElementById("infoWrapperToScroll").scrollTop = document.getElementById("waitToScroll").offsetTop - document.getElementById("infoWrapperToScroll").getBoundingClientRect().top;;
}

function enjoyClicked(){
	showInfo();
	document.getElementById("infoWrapperToScroll").scrollTop = document.getElementById("enjoyToScroll").offsetTop - document.getElementById("infoWrapperToScroll").getBoundingClientRect().top;;
}

