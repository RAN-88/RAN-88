function showInfo() {
	document.getElementById("infoFrame").classList.toggle("showInfo");
	document.body.classList.toggle("bodyInfoStopScroll");
	document.getElementById("infoWrapperToScroll").scrollTop = 0;
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
		document.getElementById("footerInfoArea").contains(e.target) == false &&
		document.getElementById("cartEmailLink").contains(e.target) == false &&
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
	let clientTop = document.getElementById("orderToScroll").getBoundingClientRect().top;
	let placeToScroll = document.getElementById("infoIntro").getBoundingClientRect().top
	document.getElementById("infoWrapperToScroll").scrollTop = clientTop - placeToScroll;
}

function checkClicked(){
	showInfo();
	let clientTop = document.getElementById("checkToScroll").getBoundingClientRect().top;
	let placeToScroll = document.getElementById("infoIntro").getBoundingClientRect().top
	document.getElementById("infoWrapperToScroll").scrollTop = clientTop - placeToScroll;
}

function payClicked(){
	showInfo();
	let clientTop = document.getElementById("payToScroll").getBoundingClientRect().top;
	let placeToScroll = document.getElementById("infoIntro").getBoundingClientRect().top
	document.getElementById("infoWrapperToScroll").scrollTop = clientTop - placeToScroll;
}

function waitClicked(){
	showInfo();
	let clientTop = document.getElementById("waitToScroll").getBoundingClientRect().top;
	let placeToScroll = document.getElementById("infoIntro").getBoundingClientRect().top
	document.getElementById("infoWrapperToScroll").scrollTop = clientTop - placeToScroll;
}

function enjoyClicked(){
	showInfo();
	let clientTop = document.getElementById("enjoyToScroll").getBoundingClientRect().top;
	let placeToScroll = document.getElementById("infoIntro").getBoundingClientRect().top
	document.getElementById("infoWrapperToScroll").scrollTop = clientTop - placeToScroll;
}

