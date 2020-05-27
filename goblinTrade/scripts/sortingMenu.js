let sortListing = document.getElementById("sortListing");
let sortingSelectionName = document.getElementById("sortingSelectionName");
let sortingSelectionPrice = document.getElementById("sortingSelectionPrice");
let sortingSelectionRarity = document.getElementById("sortingSelectionRarity");


document.getElementById("sortingType").addEventListener("click", showSortingMenu);
document.getElementById("sortingTypeArrow").addEventListener("click", showSortingMenu);

function showSortingMenu() {
	sortListing.classList.toggle("sortListingVisibility");
	document.getElementById("sortingTypeArrow").classList.toggle("sortingTypeArrowMirror");
}

sortingSelectionName.addEventListener("click", changeSortingTypeToName);
function changeSortingTypeToName() {
	document.getElementById("sortingType").innerHTML = "Name";
	closeSortingMenu();
	sortUp();
}

sortingSelectionPrice.addEventListener("click", changeSortingTypeToPrice);
function changeSortingTypeToPrice() {
	document.getElementById("sortingType").innerHTML = "Price";
	closeSortingMenu();
	sortUp();
}

sortingSelectionRarity.addEventListener("click", changeSortingTypeToRarity);
function changeSortingTypeToRarity() {
	document.getElementById("sortingType").innerHTML = "Rarity";
	closeSortingMenu();
	sortUp();
}

function closeSortingMenu() {
	sortListing.classList.remove("sortListingVisibility");
	document.getElementById("sortingTypeArrow").classList.remove("sortingTypeArrowMirror");
}

document.body.addEventListener("click", closeSortingMenuOnClick);
function closeSortingMenuOnClick(e) {

	if (e.target.id != "sortingType" &&
		e.target.id != "sortingTypeArrow" &&
		e.target.id != "sortingSelectionName" &&
		e.target.id != "sortingSelectionPrice" &&
		e.target.id != "sortingSelectionRarity") {
		closeSortingMenu()
	}

}
