//----------------------------------
// Бесконечная карусель
//завернуть все картинки в <div> и засунуть в обёртку с ID carouselImgWrapperN
// где N - номер обёртки начиная с 0 (если обёртка одна carouselImgWrapper0)
//
// ID кнопок: carouselBtnLeft - влево, carouselBtnRight - вправо
//
//
//----------------------------------
//польовательские переменные
let frameAmount = 4; //кол-во фреймов для перелистывания (!! обяательно указывать)
let animationTime = 500; //время перелистывания, ms (для блокировки кнопок от проклика)
//----------------------------------
let animationInProgress = false;
let left = "translate(-100%)";
let right = "translate(100%)";
let mid = "translate(0%)";
let btnLeft = document.getElementById("carouselBtnLeft");
let btnRight = document.getElementById("carouselBtnRight");
let leftCounter = [];
let rightCounter = [];
//массив коллекций
function getFrameCollection() {
	let frameCollection = [];
	for (let i = 0; i < frameAmount; i++) {
		let frameCollectionItem = document.querySelectorAll(
			`#carouselImgWrapper${i}>div`
		);
		frameCollection.push(frameCollectionItem);
	}
	return frameCollection;
}

//массив длин коллекций
function getFrameCarouselLength() {
	frameArray = getFrameCollection();
	let frameCarouselLength = [];
	for (let i = 0; i < frameAmount; i++) {
		let itemLength = frameArray[i].length;
		frameCarouselLength.push(itemLength);
	}
	return frameCarouselLength;
}
//массив счёчиков
for (let counter = 0; counter < frameAmount; counter++) {
	leftCounter.push(0);
	frameArrayItemLength = getFrameCarouselLength();
	rightCounter.push(frameArrayItemLength[counter]);
}

//исходное положение
function placeStartPosition() {
	frameArray = getFrameCollection(); //массив коллекций
	frameCarouselLength = getFrameCarouselLength(); //массив длин коллекций
	for (let i = 0; i < frameAmount; i++) {
		collectionItem = frameArray[i];
		collectionItemLength = frameCarouselLength[i];
		collectionItem[collectionItemLength - 1].style.transform = left;
		collectionItem[0].style.transform = mid;
		collectionItem[0].style.zIndex = 100;
		collectionItem[1].style.transform = right;
	}
}

placeStartPosition();

function moveCarouselLeft() {
	// установка таймаута на кнопку при клике
	if (animationInProgress) {
		return false;
	}

	imgCollectionArray = getFrameCollection(); // вытащили массив коллекций
	carouselLenghtArray = getFrameCarouselLength(); // вытащили массив длин коллекций
	for (let i = 0; i < frameAmount; i++) {
		leftCurrentImg = leftCounter[i]; //получили текущий левый счётчик
		leftCurrentImg++;
		imgCollection = imgCollectionArray[i]; //получили текущую коллекцию
		carouselLenght = carouselLenghtArray[i]; //получили длину текущей коллекции
		//центральная налево -------------
		imgCollection[leftCurrentImg - 1].style.zIndex = 0;
		imgCollection[leftCurrentImg - 1].style.transform = left;
		//левую в центр----------------
		// переполнение
		if (leftCurrentImg == carouselLenght) {
			imgCollection[0].style.zIndex = 100;
			imgCollection[0].style.transform = mid;
		} else {
			//базово
			imgCollection[leftCurrentImg].style.zIndex = 100;
			imgCollection[leftCurrentImg].style.transform = mid;
		}
		//прячем левую в центр
		//начальное положение (переполнение счётчика)
		if (leftCurrentImg <= 1) {
			imgCollection[carouselLenght - 1].style.transform = mid;
			imgCollection[carouselLenght - 1].style.zIndex = 0;
			//базово
		} else {
			imgCollection[leftCurrentImg - 2].style.transform = mid;
			imgCollection[leftCurrentImg - 2].style.zIndex = 0;
		}
		//рисуем правый пустой-----------
		// надо вытащить 0
		if (leftCurrentImg == carouselLenght - 1) {
			imgCollection[0].style.transform = right;
			//вытаскиваем 1 при переполнении и обнулляем счётчик
		} else if (leftCurrentImg == carouselLenght) {
			imgCollection[1].style.transform = right;
			leftCurrentImg = 0;
			//базово
		} else {
			imgCollection[leftCurrentImg + 1].style.transform = right;
		}
		if (leftCurrentImg == 0) {
			rightCounter[i] = carouselLenght;
		} else {
			rightCounter[i] = leftCurrentImg;
		}
		leftCounter[i] = leftCurrentImg; //переписали текущий счётчик на изменённый
	}
	// установка таймаута на кнопку при клике
	animationInProgress = true;
	setTimeout(function () {
		animationInProgress = false;
	}, animationTime);
}

function moveCarouselRight() {
	// установка таймаута на кнопку при клике
	if (animationInProgress) {
		return false;
	}
	imgCollectionArray = getFrameCollection(); // вытащили массив коллекций
	carouselLenghtArray = getFrameCarouselLength(); // вытащили массив длин коллекций
	for (let i = 0; i < frameAmount; i++) {
		rightCurrentImg = rightCounter[i]; //получили текущий правый счётчик
		rightCurrentImg--;
		imgCollection = imgCollectionArray[i]; //получили текущую коллекцию
		carouselLenght = carouselLenghtArray[i]; //получили длину текущей коллекции

		//центральную направо (больше не центтр)
		if (rightCurrentImg == carouselLenght - 1) {
			imgCollection[0].style.zIndex = 0;
			imgCollection[0].style.transform = right;
		} else {
			imgCollection[rightCurrentImg + 1].style.zIndex = 0;
			imgCollection[rightCurrentImg + 1].style.transform = right;
		}

		//двигаем крайне левую направо (новый центр)
		if (rightCurrentImg == carouselLenght - 1) {
			imgCollection[rightCurrentImg].style.zIndex = 100;
			imgCollection[rightCurrentImg].style.transform = mid;
		} else {
			imgCollection[rightCurrentImg].style.zIndex = 100;
			imgCollection[rightCurrentImg].style.transform = mid;
		}
		//прячем крайнюю правую в центр
		if (rightCurrentImg == carouselLenght - 1) {
			imgCollection[1].style.zIndex = 0;
			imgCollection[1].style.transform = mid;
		} else if (rightCurrentImg == carouselLenght - 2) {
			imgCollection[0].style.zIndex = 0;
			imgCollection[0].style.transform = mid;
		} else {
			imgCollection[rightCurrentImg + 2].style.zIndex = 0;
			imgCollection[rightCurrentImg + 2].style.transform = mid;
		}
		if (rightCurrentImg == 0) {
			imgCollection[carouselLenght - 1].style.transform = left;
			rightCurrentImg = carouselLenght;
		} else {
			imgCollection[rightCurrentImg - 1].style.transform = left;
		}
		if (rightCurrentImg == carouselLenght) {
			leftCounter[i] = 0;
		} else {
			leftCounter[i] = rightCurrentImg;
		}
		rightCounter[i] = rightCurrentImg; //переписали текущий счётчик на изменённый
	}
	// установка таймаута на кнопку при клике
	animationInProgress = true;
	setTimeout(function () {
		animationInProgress = false;
	}, animationTime);
}
//кнопки
btnLeft.onclick = moveCarouselLeft;
btnRight.onclick = moveCarouselRight;