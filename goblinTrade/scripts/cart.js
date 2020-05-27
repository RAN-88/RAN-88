function moveBar() {
	document.getElementById("menuCart").classList.toggle("menuCartActive");
}

function returnBar() {
	document.getElementById("menuCart").classList.remove("menuCartActive");
}

document.getElementById("headerCartBtn").addEventListener("click", moveBar);
document.getElementById("menuCartIconClose").addEventListener("click", returnBar);

