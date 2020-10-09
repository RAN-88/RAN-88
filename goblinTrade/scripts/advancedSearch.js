document.getElementById("advancedSearch").addEventListener("click", moveAdvancedSearch);

function moveAdvancedSearch() {
	document.getElementById("advancedSearchWrapper").classList.toggle("advancedSearchActive");
	document.body.classList.toggle("bodyAdvancedStopScroll");
}
function returnAdvancedSearch() {
	document.getElementById("advancedSearchWrapper").classList.remove("advancedSearchActive");
	document.body.classList.remove("bodyAdvancedStopScroll");
}