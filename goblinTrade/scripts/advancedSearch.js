document.getElementById("advancedSearch").addEventListener("click", moveAdvancedSearch);
document.getElementById("advReset").addEventListener("click", advReset);
document.getElementById("advApply").addEventListener("click", advApply);


function moveAdvancedSearch() {
	document.getElementById("advancedSearchWrapper").classList.toggle("advancedSearchActive");
	document.body.classList.toggle("bodyAdvancedStopScroll");
	returnBar();
}
function returnAdvancedSearch() {
	document.getElementById("advancedSearchWrapper").classList.remove("advancedSearchActive");
	document.body.classList.remove("bodyAdvancedStopScroll");
}

document.getElementById("advancedSearchCardType").addEventListener("click", advancedSearchCardTypeOn);
document.getElementById("advancedSearchSet").addEventListener("click", advancedSearchSetOn);
document.getElementById("advancedSearchRarity").addEventListener("click", advancedSearchRarityOn);

function advancedSearchCardTypeOn(){
	clearAdvansedSearchClasses();
	document.getElementById("advancedSearchListWrapper").classList.toggle("advancedSearchListWrapperTypeOn");
	document.getElementById("advancedSearchCardType").classList.toggle("advancedSearchCardTypeOn");
	document.getElementById("advancedSearchSet").classList.toggle("advancedSearchSetOff");
	document.getElementById("advancedSearchRarity").classList.toggle("advancedSearchRarityOff");
	// console.log(document.getElementById("advancedSearchListWrapper").classList);
}

function advancedSearchSetOn(){
	clearAdvansedSearchClasses();
	document.getElementById("advancedSearchListWrapper").classList.toggle("advancedSearchListWrapperSetOn");
	document.getElementById("advancedSearchCardType").classList.toggle("advancedSearchCardTypeOff");
	document.getElementById("advancedSearchSet").classList.toggle("advancedSearchSetOn");
	document.getElementById("advancedSearchRarity").classList.toggle("advancedSearchRarityOff");
}

function advancedSearchRarityOn(){
	clearAdvansedSearchClasses();
	document.getElementById("advancedSearchListWrapper").classList.toggle("advancedSearchListWrapperRarityOn");
	document.getElementById("advancedSearchCardType").classList.toggle("advancedSearchCardTypeOff");
	document.getElementById("advancedSearchSet").classList.toggle("advancedSearchSetOff");
	document.getElementById("advancedSearchRarity").classList.toggle("advancedSearchRarityOn");
}

function clearAdvansedSearchClasses(){
	document.getElementById("advancedSearchListWrapper").classList.remove("advancedSearchListWrapperTypeOn", "advancedSearchListWrapperSetOn", "advancedSearchListWrapperRarityOn");
	document.getElementById("advancedSearchCardType").classList.remove("advancedSearchCardTypeOn","advancedSearchCardTypeOff");
	document.getElementById("advancedSearchSet").classList.remove("advancedSearchSetOn","advancedSearchSetOff");
	document.getElementById("advancedSearchRarity").classList.remove("advancedSearchRarityOn","advancedSearchRarityOff");
}

// window.onload = advancedSearchListFrameHover();
advancedSearchListFrameHover();
function advancedSearchListFrameHover(){
for (let q = 0; q < document.body.querySelectorAll(".advancedSearchListFrame").length; q++){
	document.body.querySelectorAll(".advancedSearchListFrame")[q].onmouseenter = function(e){
		e.target.querySelector("div.roundSearch").classList.toggle("roundSearchHover");
		e.target.querySelector("div.advancedSearchListFrameText").querySelector("h4").classList.toggle("advancedSearchListFrameTextMouseOn");
	}
	document.body.querySelectorAll(".advancedSearchListFrame")[q].onmouseleave = function(e){
		e.target.querySelector("div.roundSearch").classList.remove("roundSearchHover");
		e.target.querySelector("div.advancedSearchListFrameText").querySelector("h4").classList.remove("advancedSearchListFrameTextMouseOn");
	}
}
}

function setadvancedSearchListFrameMouseOn(frame){
	frame.target.querySelector("div.roundSearch").classList.toggle("roundSearchHover");
	frame.target.querySelector("div.advancedSearchListFrameText").querySelector("h4").classList.toggle("advancedSearchListFrameTextMouseOn");
}

function setadvancedSearchListFrameMouseOut(frame){
	frame.target.querySelector("div.roundSearch").classList.remove("roundSearchHover");
	frame.target.querySelector("div.advancedSearchListFrameText").querySelector("h4").classList.remove("advancedSearchListFrameTextMouseOn");
}



function advancedClick(advacedID){
	if (document.getElementById(`${advacedID}`).classList.contains("advancedClicked") || document.getElementById(`${advacedID}`).classList.contains("advancedClickedTypeSetRarity")) {
		document.getElementById(`${advacedID}`).classList.remove("advancedClicked");
		document.getElementById(`${advacedID}`).classList.remove("advancedClickedTypeSetRarity");
		document.getElementById(`${advacedID}`).parentElement.querySelector("div.advancedSearchListFrameText").querySelector("h4").classList.remove("advancedSearchListFrameTextOn");
		if (advacedID.includes("color")){
			removeColor(advacedID);
		}
		else if (advacedID.includes("cmc")){
			removeCMC(advacedID);
		}
		else if (advacedID.includes("condition")){
			removeCondition(advacedID);
		}
		else if (advacedID.includes("type")){
			removeType(advacedID);
		}
		else if (advacedID.includes("set")){
			removeSet(advacedID);
		}
		else if (advacedID.includes("rarity")){
			removeRarity(advacedID);
		}
	}
else{
	if (advacedID.includes("color")){
		document.getElementById(`${advacedID}`).classList.toggle("advancedClicked");
		setColor(advacedID);
	}
	else if (advacedID.includes("cmc")){
		document.getElementById(`${advacedID}`).classList.toggle("advancedClicked");
		setCMC(advacedID);
	}
	else if (advacedID.includes("condition")){
		document.getElementById(`${advacedID}`).classList.toggle("advancedClicked");
		setCondition(advacedID);
	}
	else if (advacedID.includes("type")){
		document.getElementById(`${advacedID}`).classList.toggle("advancedClickedTypeSetRarity");
		document.getElementById(`${advacedID}`).parentElement.querySelector("div.advancedSearchListFrameText").querySelector("h4").classList.toggle("advancedSearchListFrameTextOn");
			setType(advacedID);
	}
	else if (advacedID.includes("set")){
		document.getElementById(`${advacedID}`).classList.toggle("advancedClickedTypeSetRarity");
		document.getElementById(`${advacedID}`).parentElement.querySelector("div.advancedSearchListFrameText").querySelector("h4").classList.toggle("advancedSearchListFrameTextOn");
		setSet(advacedID);
	}
	else if (advacedID.includes("rarity")){
		document.getElementById(`${advacedID}`).classList.toggle("advancedClickedTypeSetRarity");
		document.getElementById(`${advacedID}`).parentElement.querySelector("div.advancedSearchListFrameText").querySelector("h4").classList.toggle("advancedSearchListFrameTextOn");
		setRarity(advacedID);
	}
	}
}
// set
function setColor(colorID) {
	let colorStr = colorID.replace("color","");
	globalAdvancedSearchColor.push(colorStr);
	// console.log(globalAdvancedSearchColor);
}

function setCMC(cmcID) {
	let cmcStr = cmcID.replace("cmc","");
	globalAdvancedSearchCMC.push(cmcStr);
	// console.log(globalAdvancedSearchCMC);
}

function setCondition(conditionID) {
	let conditionStr = conditionID.replace("condition","");
	globalAdvancedSearchCondition.push(conditionStr);
	// console.log(globalAdvancedSearchCondition);
}

function setType(typeID) {
	let typeStr = typeID.replace("type","");
	globalAdvancedSearchType.push(typeStr);
	// console.log(globalAdvancedSearchType);
}

function setSet(setID) {
	let setStr = setID.replace("set","");
	globalAdvancedSearchSet.push(setStr);
	// console.log(globalAdvancedSearchSet);
}

function setRarity(rarityID) {
	let rarityStr = rarityID.replace("rarity","");
	globalAdvancedSearchRarity.push(rarityStr);
	// console.log(globalAdvancedSearchRarity);
}


// remove
function removeColor(colorID) {
	let colorStr = colorID.replace("color","");
	for (let i = 0; i < globalAdvancedSearchColor.length; i++){
		if (globalAdvancedSearchColor[i] == colorStr){
			globalAdvancedSearchColor.splice(i, 1);
		}
	}
	// console.log(globalAdvancedSearchColor);
}

function removeCMC(cmcID) {
	let cmcStr = cmcID.replace("cmc","");
	for (let i = 0; i < globalAdvancedSearchCMC.length; i++){
		if (globalAdvancedSearchCMC[i] == cmcStr){
			globalAdvancedSearchCMC.splice(i, 1);
		}
	}
	// console.log(globalAdvancedSearchCMC);
}

function removeCondition(conditionID) {
	let conditionStr = conditionID.replace("condition","");
	for (let i = 0; i < globalAdvancedSearchCondition.length; i++){
		if (globalAdvancedSearchCondition[i] == conditionStr){
			globalAdvancedSearchCondition.splice(i, 1);
		}
	}
	// console.log(globalAdvancedSearchCondition);
}

function removeType(typeID) {
	let typeStr = typeID.replace("type","");
	for (let i = 0; i < globalAdvancedSearchType.length; i++){
		if (globalAdvancedSearchType[i] == typeStr){
			globalAdvancedSearchType.splice(i, 1);
		}
	}
	// console.log(globalAdvancedSearchType);
}

function removeSet(setID) {
	let setStr = setID.replace("set","");
	for (let i = 0; i < globalAdvancedSearchSet.length; i++){
		if (globalAdvancedSearchSet[i] == setStr){
			globalAdvancedSearchSet.splice(i, 1);
		}
	}
	// console.log(globalAdvancedSearchSet);
}

function removeRarity(rarityID) {
	let rarityStr = rarityID.replace("rarity","");
	for (let i = 0; i < globalAdvancedSearchRarity.length; i++){
		if (globalAdvancedSearchRarity[i] == rarityStr){
			globalAdvancedSearchRarity.splice(i, 1);
		}
	}
	// console.log(globalAdvancedSearchRarity);
}

// рисуем при клике Apply
function advApply(){
	checkAdvCMC();
	returnAdvancedSearch();
	scrollToMarket();
}

// сброс всего при клике Reset
function advReset(){

	for (let f = 0; f < document.body.querySelectorAll(".advancedSearchListFrame").length; f++){
		document.body.querySelectorAll(".advancedSearchListFrame")[f].querySelector(".advancedSearchListFrameText").querySelector("h4").classList.remove("advancedSearchListFrameTextOn");
	}

	
	document.getElementById("colorw").classList.remove("advancedClicked");
	document.getElementById("coloru").classList.remove("advancedClicked");
	document.getElementById("colorb").classList.remove("advancedClicked");
	document.getElementById("colorr").classList.remove("advancedClicked");
	document.getElementById("colorg").classList.remove("advancedClicked");
	document.getElementById("color<>").classList.remove("advancedClicked");
	document.getElementById("colormulticolor").classList.remove("advancedClicked");
	document.getElementById("cmc0").classList.remove("advancedClicked");
	document.getElementById("cmc1").classList.remove("advancedClicked");
	document.getElementById("cmc2").classList.remove("advancedClicked");
	document.getElementById("cmc3").classList.remove("advancedClicked");
	document.getElementById("cmc4").classList.remove("advancedClicked");
	document.getElementById("cmc5").classList.remove("advancedClicked");
	document.getElementById("cmc6").classList.remove("advancedClicked");
	document.getElementById("cmc7").classList.remove("advancedClicked");
	document.getElementById("conditionnearmint").classList.remove("advancedClicked");
	document.getElementById("conditionplayed").classList.remove("advancedClicked");
	document.getElementById("conditionheavilyplayed").classList.remove("advancedClicked");
	document.getElementById("typecreature").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("typeplaneswalker").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("typesorcery").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("typeinstant").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("typeland").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("typeenchantment").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("typeartifact").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("typetribal").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("raritycommon").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("rarityuncommon").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("rarityrare").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("raritymythicrare").classList.remove("advancedClickedTypeSetRarity");
	document.getElementById("rarityspetial").classList.remove("advancedClickedTypeSetRarity");

for (let t = 0; t < document.getElementById("advancedSearchSet").querySelectorAll("div.roundSearch").length; t++){
		document.getElementById("advancedSearchSet").querySelectorAll("div.roundSearch")[t].classList.remove("advancedClickedTypeSetRarity");
}
globalAdvancedSearchCMC.length=0;
globalAdvancedSearchColor.length=0;
globalAdvancedSearchCondition.length=0;
globalAdvancedSearchSet.length=0;
globalAdvancedSearchType.length=0;
globalAdvancedSearchRarity.length=0;

if (document.getElementById("textSearch").value == '') {
drawMarket(globalCardCollection); //рисуем
}

returnAdvancedSearch();
}

// цепочка фильтров
function checkAdvCMC(){
	let cmcArray = [];
	if (globalAdvancedSearchCMC.length != 0){
for (let i = 0; i < globalCardCollection.length; i++){
	for (let z = 0; z < globalAdvancedSearchCMC.length; z++){
		if (parseInt(globalCardCollection[i][17], 10) == parseInt(globalAdvancedSearchCMC[z],10)){
			cmcArray.push(globalCardCollection[i]);
			break;
		} else if (parseInt(globalAdvancedSearchCMC[z], 10) == 7 && parseInt(globalCardCollection[i][17], 10) > 7){
			cmcArray.push(globalCardCollection[i]);
			break;
		}
	}
}
// console.log ("checkAdvCMC");
// console.log (cmcArray);
checkAdvColor (cmcArray);
	}else{
		cmcArray = globalCardCollection.slice();
		// console.log ("checkAdvCMC");
		// console.log (cmcArray);
		checkAdvColor (cmcArray);
	}
}

function checkAdvColor(cmcCheckedArr){
	let colorArray = [];
	if (globalAdvancedSearchColor.length != 0){

	for (let i = 0; i < cmcCheckedArr.length; i++){
		for (let q = 0; q < globalAdvancedSearchColor.length; q++){
			if (cmcCheckedArr[i][16].includes(globalAdvancedSearchColor[q]) && globalAdvancedSearchColor[q] != "multicolor"){
				colorArray.push(cmcCheckedArr[i]);
				break;
			} else if (globalAdvancedSearchColor[q] == "multicolor" && cmcCheckedArr[i][16].length > 1 && cmcCheckedArr[i][16] != "<>"){
				colorArray.push(cmcCheckedArr[i]);
				break;
			}
		}
	}
	// console.log("checkAdvColor");
	// console.log(colorArray);
	checkAdvCondition (colorArray);
	} else {
		colorArray = cmcCheckedArr.slice();
		// console.log("checkAdvColor");
		// console.log(colorArray);
		checkAdvCondition (colorArray);
	}
}

function checkAdvCondition(colorCheckedArr){
	let conditionArray = [];
	if (globalAdvancedSearchCondition.length != 0){

		for (let i = 0; i < colorCheckedArr.length; i++){
			for (let q = 0; q < globalAdvancedSearchCondition.length; q++){
				if (colorCheckedArr[i][3].toLowerCase().replace(/[" "\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "") == globalAdvancedSearchCondition[q]){
					conditionArray.push(colorCheckedArr[i]);
					break;
				} 
			}
		}
		// console.log("checkAdvCondition");
		// console.log(conditionArray);
		checkAdvSet (conditionArray);
		} else {
			conditionArray = colorCheckedArr.slice();
			// console.log("checkAdvCondition");
			// console.log(conditionArray);
			checkAdvSet (conditionArray);
		}
}

function checkAdvSet(conditionCheckedArr){
	let setArray = [];
	if (globalAdvancedSearchSet.length != 0){

		for (let i = 0; i < conditionCheckedArr.length; i++){
			for (let q = 0; q < globalAdvancedSearchSet.length; q++){
				if (conditionCheckedArr[i][7].toLowerCase().replace(/[" "\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "") == globalAdvancedSearchSet[q]){
					setArray.push(conditionCheckedArr[i]);
					break;
				} 
			}
		}
		// console.log("checkAdvSet");
		// console.log(setArray);
		checkAdvType (setArray);
		} else {
			setArray = conditionCheckedArr.slice();
			// console.log("checkAdvSet");
			// console.log(setArray);
			checkAdvType (setArray);
		}
}

function checkAdvType(setCheckedArr){
	let typeArray = [];
	if (globalAdvancedSearchType.length != 0){

		for (let i = 0; i < setCheckedArr.length; i++){
			for (let q = 0; q < globalAdvancedSearchType.length; q++){
				if (setCheckedArr[i][15].toLowerCase().replace(/[" "\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "") == globalAdvancedSearchType[q]){
					typeArray.push(setCheckedArr[i]);
					break;
				} 
			}
		}
		// console.log("checkAdvType");
		// console.log(typeArray);
		checkAdvRarity (typeArray);
		} else {
			typeArray = setCheckedArr.slice();
			// console.log("checkAdvType");
			// console.log(typeArray);
			checkAdvRarity (typeArray);
		}
}

function checkAdvRarity(typeCheckedArr){
	let rarityArray = [];
	if (globalAdvancedSearchRarity.length != 0){

		for (let i = 0; i < typeCheckedArr.length; i++){
			for (let q = 0; q < globalAdvancedSearchRarity.length; q++){
				if (typeCheckedArr[i][2].toLowerCase().replace(/[" "\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "") == globalAdvancedSearchRarity[q]){
					rarityArray.push(typeCheckedArr[i]);
					break;
				} 
			}
		}
		// console.log("checkAdvRarity");
		// console.log(rarityArray);
		drawMarket(rarityArray); //рисуем
		// return (rarityArray);
		} else {
			rarityArray = typeCheckedArr.slice();
			// console.log("checkAdvRarity");
			// console.log(rarityArray);
			drawMarket(rarityArray); //рисуем
			// return (rarityArray);
		}
}



function drawAdvanced(advArray){
let advUnicArray = [];
let advSearchListFrame = '';

	for (let i=0; i < advArray.length; i++){
		if(advUnicArray.includes(advArray[i][7]) == false){
			advUnicArray.push(advArray.slice()[i][7]);
		}
	}
	
for(let q=0; q < advUnicArray.length; q++){
	advSearchListFrame += 	`<div class="setSearch advancedSearchListFrame grid" onmouseenter ="setadvancedSearchListFrameMouseOn(event)" onmouseleave ="setadvancedSearchListFrameMouseOut(event)">`;
	advSearchListFrame += 	`<div class="roundSearch" onclick="advancedClick('set${advUnicArray[q].toLowerCase().replace(/[" "\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "")}')" id="set${advUnicArray[q].toLowerCase().replace(/[" "\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "")}"></div>`;
	advSearchListFrame += 	`<div class="advancedSearchListFrameText" onclick="advancedClick('set${advUnicArray[q].toLowerCase().replace(/[" "\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "")}')">`;
	advSearchListFrame += 	`<h4 class="advancedSearchListFrameTextOff">${advUnicArray[q]}</h4>`;
	advSearchListFrame += 	`</div>`;
	advSearchListFrame += 	`</div>`;

	document.getElementById("setSearchFrame").insertAdjacentHTML('beforeend', advSearchListFrame);
	advSearchListFrame = '';
}

}