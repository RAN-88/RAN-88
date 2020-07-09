document.getElementById("sliderBtnLeft").addEventListener('click', moveSliderLeft);
document.getElementById("sliderBtnRight").addEventListener('click', moveSliderRight);
let animationInProgress = false;

setInterval(moveSliderLeft, 3000);

function moveSliderLeft() {

	if (animationInProgress) {
		return false;
	}
	slideLeft();
	animationInProgress = true;
	setTimeout(function () {
		animationInProgress = false;
	}, 1000);
}


function moveSliderRight() {
	if (animationInProgress) {
		return false;
	}
	slideRight();
	animationInProgress = true;
	setTimeout(function () {
		animationInProgress = false;
	}, 1000);
}


function slideLeft() {
	let framesArrayLeft = [];

	for (let i = 0; i < document.getElementById("sliderHiddenWrapper").querySelectorAll("div.sliderImg").length; i++) {
		framesArrayLeft[i] = document.getElementById("sliderHiddenWrapper").querySelectorAll("div.sliderImg")[i];
		if (framesArrayLeft[i].style.transform == '') {
			framesArrayLeft[i].style.transform = "translateX(0px)";
		}
		framesArrayLeft[i].style.transition = "1s ease";
		framesArrayLeft[i].style.visibility = "visible";
	}

	framesArrayLeft.sort(function (a, b) {
		let Aleft = +a.style.transform.split("(")[1].split("px")[0]
		let Bleft = +b.style.transform.split("(")[1].split("px")[0]
		if (Aleft < Bleft) {
			return -1
		} else if (Aleft > Bleft) {
			return 1
		}
		else {
			return 0
		}
	});

	for (let q = 1; q < framesArrayLeft.length; q++) {
		framesArrayLeft[q].style.transform = `translateX(${+framesArrayLeft[q].style.transform.split("(")[1].split("px")[0] - framesArrayLeft[q].offsetWidth - 20}px)`
	}


	if (framesArrayLeft[framesArrayLeft.length - 1].id < globalPromoCardCollection.length - 1) {
		framesArrayLeft[0].id = +framesArrayLeft[framesArrayLeft.length - 1].id + 1;
		framesArrayLeft[0].querySelector("div.tagIconWrapper").style.backgroundImage = `url(${globalPromoCardCollection[+framesArrayLeft[0].id][11]})`
		framesArrayLeft[0].querySelector("h4.prevPrice").innerHTML = `${globalPromoCardCollection[+framesArrayLeft[0].id][1] * (globalPromoCardCollection[+framesArrayLeft[0].id][10] / 100 + 1)} p`
		framesArrayLeft[0].querySelector("h4.presentPrice").innerHTML = `${globalPromoCardCollection[+framesArrayLeft[0].id][1]}p`
	} else {
		framesArrayLeft[0].id = 0;
		framesArrayLeft[0].querySelector("div.tagIconWrapper").style.backgroundImage = `url(${globalPromoCardCollection[+framesArrayLeft[0].id][11]})`
		framesArrayLeft[0].querySelector("h4.prevPrice").innerHTML = `${globalPromoCardCollection[+framesArrayLeft[0].id][1] * (globalPromoCardCollection[+framesArrayLeft[0].id][10] / 100 + 1)} p`
		framesArrayLeft[0].querySelector("h4.presentPrice").innerHTML = `${globalPromoCardCollection[+framesArrayLeft[0].id][1]}p`
	}

	framesArrayLeft[0].style.transition = "0ms";
	framesArrayLeft[0].style.visibility = "hidden";
	framesArrayLeft[0].style.transform = `translateX(${+framesArrayLeft[0].style.transform.split("(")[1].split("px")[0] + (framesArrayLeft[0].offsetWidth + 20) * (framesArrayLeft.length - 1)}px)`
}




function slideRight() {
	let framesArrayRigth = [];

	for (let i = 0; i < document.getElementById("sliderHiddenWrapper").querySelectorAll("div.sliderImg").length; i++) {
		framesArrayRigth[i] = document.getElementById("sliderHiddenWrapper").querySelectorAll("div.sliderImg")[i];
		if (framesArrayRigth[i].style.transform == '') {
			framesArrayRigth[i].style.transform = "translateX(0px)";
		}
		framesArrayRigth[i].style.transition = "1s ease";
		framesArrayRigth[i].style.visibility = "visible";
	}

	framesArrayRigth.sort(function (a, b) {
		let Aleft = +a.style.transform.split("(")[1].split("px")[0]
		let Bleft = +b.style.transform.split("(")[1].split("px")[0]
		if (Aleft < Bleft) {
			return -1
		} else if (Aleft > Bleft) {
			return 1
		}
		else {
			return 0
		}
	});

	for (let q = 0; q < framesArrayRigth.length - 1; q++) {
		framesArrayRigth[q].style.transform = `translateX(${+framesArrayRigth[q].style.transform.split("(")[1].split("px")[0] + framesArrayRigth[q].offsetWidth + 20}px)`
	}

	if (framesArrayRigth[0].id >= 1) {
		framesArrayRigth[framesArrayRigth.length - 1].id = +framesArrayRigth[0].id - 1;
		framesArrayRigth[framesArrayRigth.length - 1].querySelector("div.tagIconWrapper").style.backgroundImage = `url(${globalPromoCardCollection[+framesArrayRigth[framesArrayRigth.length - 1].id][11]})`
		framesArrayRigth[framesArrayRigth.length - 1].querySelector("h4.prevPrice").innerHTML = `${globalPromoCardCollection[+framesArrayRigth[framesArrayRigth.length - 1].id][1] * (globalPromoCardCollection[+framesArrayRigth[framesArrayRigth.length - 1].id][10] / 100 + 1)} p`
		framesArrayRigth[framesArrayRigth.length - 1].querySelector("h4.presentPrice").innerHTML = `${globalPromoCardCollection[+framesArrayRigth[framesArrayRigth.length - 1].id][1]}p`
	} else {
		framesArrayRigth[framesArrayRigth.length - 1].id = globalPromoCardCollection.length - 1;
		framesArrayRigth[framesArrayRigth.length - 1].querySelector("div.tagIconWrapper").style.backgroundImage = `url(${globalPromoCardCollection[+framesArrayRigth[framesArrayRigth.length - 1].id][11]})`
		framesArrayRigth[framesArrayRigth.length - 1].querySelector("h4.prevPrice").innerHTML = `${globalPromoCardCollection[+framesArrayRigth[framesArrayRigth.length - 1].id][1] * (globalPromoCardCollection[+framesArrayRigth[framesArrayRigth.length - 1].id][10] / 100 + 1)} p`
		framesArrayRigth[framesArrayRigth.length - 1].querySelector("h4.presentPrice").innerHTML = `${globalPromoCardCollection[+framesArrayRigth[framesArrayRigth.length - 1].id][1]}p`
	}
	framesArrayRigth[framesArrayRigth.length - 1].style.transition = "0ms";
	framesArrayRigth[framesArrayRigth.length - 1].style.visibility = "hidden";
	framesArrayRigth[framesArrayRigth.length - 1].style.transform = `translateX(${+framesArrayRigth[framesArrayRigth.length - 1].style.transform.split("(")[1].split("px")[0] - (framesArrayRigth[framesArrayRigth.length - 1].offsetWidth + 20) * (framesArrayRigth.length - 1)}px)`
}






// рисует начальное положение слайдра - промис
function drawSlider(promoArray, widthCounter) {
	document.getElementById("sliderHiddenWrapper").innerHTML = '';



	let promoString = '';//строка слайдера
	let leftSlide = [];
	let rightSlide = [];

	leftSlide = promoArray[promoArray.length - 1]; //последний элемент массива
	promoString += `<div class="sliderImg grid" id = "${promoArray.length - 1}" onclick="drawPromo(event.target.id)">`
	promoString += `<div class="tagIconWrapper" style = "background-image: url(${leftSlide[11]});">`
	promoString += `<img src = "icons/tagICON.png" class="tagIcon">`
	promoString += `<div class="saleText">`
	promoString += `<h4 class="prevPrice"> ${leftSlide[1] * (leftSlide[10] / 100 + 1)}p</h4>`
	promoString += `<h4 class="presentPrice"> ${leftSlide[1]}р</h4>`
	promoString += `</div>`
	promoString += `</div>`
	promoString += `</div>`

	document.getElementById("sliderHiddenWrapper").insertAdjacentHTML('beforeend', promoString);
	promoString = '';

	for (let i = 0; i < widthCounter; i++) {
		promoString += `<div class="sliderImg grid" id = "${i}" onclick="drawPromo(event.target.id)">`
		promoString += `<div class="tagIconWrapper" style = "background-image: url(${promoArray[i][11]});">`
		promoString += `<img src = "icons/tagICON.png" class="tagIcon">`
		promoString += `<div class="saleText"> `
		promoString += `<h4 class="prevPrice"> ${promoArray[i][1] * (promoArray[i][10] / 100 + 1)}p</h4>`
		promoString += `<h4 class="presentPrice"> ${promoArray[i][1]}р</h4>`
		promoString += `</div>`
		promoString += `</div>`
		promoString += `</div>`

		document.getElementById("sliderHiddenWrapper").insertAdjacentHTML('beforeend', promoString);
		promoString = '';
	}

	if (widthCounter + 1 >= promoArray.length) {
		rightSlide = promoArray[0]; //первый элемент массива
	} else {
		rightSlide = promoArray[widthCounter];//следующий элемент массива
	}
	promoString += `<div class="sliderImg grid" id = "${widthCounter}" onclick="drawPromo(event.target.id)">`
	promoString += `<div class="tagIconWrapper" style = "background-image: url(${rightSlide[11]});">`
	promoString += `<img src = "icons/tagICON.png" class="tagIcon">`
	promoString += `<div class="saleText">`
	promoString += `<h4 class="prevPrice"> ${rightSlide[1] * (rightSlide[10] / 100 + 1)}p</h4>`
	promoString += `<h4 class="presentPrice"> ${rightSlide[1]}р</h4>`
	promoString += `</div>`
	promoString += `</div>`
	promoString += `</div>`
	document.getElementById("sliderHiddenWrapper").insertAdjacentHTML('beforeend', promoString);
	promoString = '';

	let linkArray = [];
	for (let k = 0; k < document.getElementById("sliderHiddenWrapper").querySelectorAll("div.sliderImg").length; k++) {
		linkArray[k] = document.getElementById("sliderHiddenWrapper").querySelectorAll("div.sliderImg")[k];
	}
	// console.log(linkArray);

}
window.onresize = windowWidth;
function windowWidth() {
	if (window.matchMedia('(max-width: 600px)').matches) {
		drawSlider(globalPromoCardCollection, 1)
	} else if (window.matchMedia('(max-width: 920px)').matches) {
		drawSlider(globalPromoCardCollection, 2)

	} else if (window.matchMedia('(max-width: 1280px)').matches) {
		drawSlider(globalPromoCardCollection, 3)

	} else if (window.matchMedia('(max-width: 1680px)').matches) {
		drawSlider(globalPromoCardCollection, 4)

	} else {
		drawSlider(globalPromoCardCollection, 5)
	}
}

function drawPromo(id) {
	drawMarket(globalPromoCardCollection);
	scrollToMarket()
}













