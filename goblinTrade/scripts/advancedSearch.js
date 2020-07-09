document.getElementById("advancedSearch").addEventListener("click", moveAdvancedSearch);

function moveAdvancedSearch() {
	document.getElementById("advancedSearchWrapper").classList.toggle("advancedSearchActive");
}
function returnAdvancedSearch() {
	document.getElementById("advancedSearchWrapper").classList.remove("advancedSearchActive");
}