document.getElementById("buttonUpIcon").addEventListener("click", scrollToStart);

window.addEventListener("scroll", checkButtonVisibility);
// window.addEventListener("scroll", stopButton);


function checkButtonVisibility(){
	if(pageYOffset >= window.innerHeight){
		document.getElementById("buttonUpIcon").classList.add("buttonUpShow");
	} else {
		document.getElementById("buttonUpIcon").classList.remove("buttonUpShow");
	}
}

// function stopButton(){
// 	let footerWrapperBotCoord = document.getElementById("footerWrapper").getBoundingClientRect().bottom - 570;
// 	let buttonUpBotCoord = document.getElementById("buttonUpIcon").getBoundingClientRect().bottom;
// 	let footerHeight = document.getElementById("footerWrapper").offsetHeight - 1;
	
	
// 	console.log(footerHeight);
// 	console.log(footerWrapperBotCoord);
// 	// console.log(buttonUpBotCoord);
// if(footerWrapperBotCoord < buttonUpBotCoord && footerWrapperBotCoord < footerHeight){
// 	console.log(1);
// 			document.getElementById("buttonUpIcon").style.bottom = `${footerWrapperBotCoord + 10}px`;
// }

// 	// if(buttonUpCoord > footerWrapperTopCoord){
// 	// 	document.getElementById("buttonUpIcon").style.bottom = `${footerWrapperBotCoord + 10}px`;
// 	// 	console.log(footerWrapperCoord);
// 	// } else {
// 	// 	// document.getElementById("buttonUpIcon").style.bottom = `10px`;
// 	// 	// console.log(footerWrapperCoord);
// 	// }
// }
