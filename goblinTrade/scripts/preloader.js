
document.body.classList.add("stopScroll");
window.onload = function(){
	setTimeout( function() {
		document.getElementById("preloaderWrapper").classList.add("preloaderOff");
		document.body.classList.remove("stopScroll");
	}
, 3000);

}