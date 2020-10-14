document.getElementById("advancedSearch").addEventListener("click", moveAdvancedSearch);

function moveAdvancedSearch() {
	document.getElementById("advancedSearchWrapper").classList.toggle("advancedSearchActive");
	document.body.classList.toggle("bodyAdvancedStopScroll");
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