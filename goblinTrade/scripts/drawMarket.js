let marketWrapper = document.getElementById("marketWrapper");//обёртка перечня карт
let cardsAmount = document.getElementById("cardsAmount");//кол-во карт в коллекции
let loadedCardsText = document.getElementById("loadedCardsText");//кол-во загруженных карт

let drawstep; //шаг глобально
let cardsCounter;//счётчик глобально
let frameString = '';//строка вывода в HTML глобально

//кнопка "грузи ещё"
document.getElementById("loadMore").addEventListener("click", drawNextFrame);

function drawNextFrame() {
	drawFrame(globalCurrentArray);
}

function drawMarket(cardsArray) { //перезапись глобального текущего массива+стартовая область
	globalCurrentArray = cardsArray; // переписали массив для рисования
	drawstep = 18; //сбросили шаг
	cardsCounter = 0; //сбросили счётчик
	cardsAmount.innerHTML = `${globalCurrentArray.length}`; //кол-во карт в коллекции
	marketWrapper.innerHTML = '';//очистка содержимого маркет
	drawFrame(globalCurrentArray);//рисуем стартовую область
};

function drawFrame(cardsArray) {

	for (cardsCounter; cardsCounter < drawstep; cardsCounter++) {
		if (cardsCounter >= cardsArray.length) {
			loadedCardsText.innerHTML = ` ${cardsCounter} / ${cardsArray.length}`;
			return
		}
		// card.cardName = fullFrameArray[cardsCounter][0];
		// card.cardPrice = fullFrameArray[cardsCounter][1];
		// card.rarity = fullFrameArray[cardsCounter][2];
		// card.cardCondition = fullFrameArray[cardsCounter][2];3
		// card.cardLanguage = fullFrameArray[cardsCounter][3];4
		// card.cardFoil = fullFrameArray[cardsCounter][4];5
		// card.cardPromo = fullFrameArray[cardsCounter][5];6
		// card.cardSet = fullFrameArray[cardsCounter][6];7
		// card.cardNumber = fullFrameArray[cardsCounter][7];8
		// card.cardQuantity = fullFrameArray[cardsCounter][8];9
		// card.cardDiscount = fullFrameArray[cardsCounter][9];10
		// card.cardImg = fullFrameArray[cardsCounter][10];11

		frameString += `<div class="marketFrame grid">`;
		frameString += `<div class="marketFrameBG"></div>`;
		frameString += `<div class="imgMarketFrame " style="background-image: url(${cardsArray[cardsCounter][11]});"></div>`;
		frameString += `<div class="textMarketFrame grid">`;
		frameString += `<div class="infoMarketFrame">`;
		frameString += `<h4 class="infoMarketName">${cardsArray[cardsCounter][0]}</h4>`;
		frameString += `<h4>${cardsArray[cardsCounter][5]} ${cardsArray[cardsCounter][6]}</h4>`;
		frameString += `<h4>${cardsArray[cardsCounter][2]}</h4>`;
		frameString += `<h4>${cardsArray[cardsCounter][7]}</h4>`;
		frameString += `<h4>${cardsArray[cardsCounter][4]}</h4>`;
		frameString += `<h4>${cardsArray[cardsCounter][3]}</h4>`;
		frameString += `</div>`;
		frameString += `<div class="mainMarketFrame grid">`;
		frameString += `<div class="priceMarketFrame">`;
		frameString += `<h4>Quantity: ${cardsArray[cardsCounter][9]}</h4>`;
		frameString += `<h4 class="infoMarketPriceText">Price: <span class="infoMarketPrice">${cardsArray[cardsCounter][1]}р</span></h4>`;
		frameString += `</div>`;
		frameString += `<div class="cartMarketFrame ">`;
		frameString += `<div class="markerIconCart"><i class="icon-cart-right "></i></div>`;
		frameString += `<div class="cartMarketContent">`;
		frameString += `<h4 class="cartMarketFrameValue">0</h4>`;
		frameString += `</div>`;
		frameString += `</div>`;
		frameString += `</div>`;
		frameString += `</div>`;
		frameString += `</div>`;

		marketWrapper.insertAdjacentHTML('beforeend', frameString);
		frameString = '';
	};
	loadedCardsText.innerHTML = ` ${cardsCounter} / ${cardsArray.length}`;
	drawstep = drawstep + 18;
};



