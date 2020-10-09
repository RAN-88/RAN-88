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

function drawMarket(cardsArray) { //копирование глобального текущего массива+стартовая область
	globalCurrentArray = cardsArray.slice(); // скопировали массив для рисования (почему-то в глобальный массив)
	// вот тут дохрена вопросов!!!!!!!!!!!!!!!!

	drawstep = 18; //сбросили шаг
	cardsCounter = 0; //сбросили счётчик
	cardsAmount.innerHTML = `${globalCurrentArray.length}`; //кол-во карт в коллекции
	marketWrapper.innerHTML = '';//очистка содержимого маркет
	drawFrame(globalCurrentArray);//рисуем стартовую область
};

function getCartMarketFrameValue(idToCheck) {
	for (let i = 0; i < cartArray.length; i++) {
		if (cartArray[i][12] == idToCheck) {
			return cartArray[i][13];
		}
	}
	return 0;
}


function drawFrame(cardsArray) {

	for (cardsCounter; cardsCounter < drawstep; cardsCounter++) {
		if (cardsCounter >= cardsArray.length) {
			loadedCardsText.innerHTML = ` ${cardsCounter} / ${cardsArray.length}`;
			return
		}

		frameString += `<div class="outerFrame">`;
		frameString += `<div class="marketFrameBG"></div>`;
		frameString += `<div class="marketFrame grid">`;
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
		frameString += `<div class="markerIconCart"><i class="icon-cart-right" id="${cardsArray[cardsCounter][12]}" onclick="addToCart(event.target.id)"></i></div>`;
		frameString += `<div class="cartMarketContent">`;
		frameString += `<h4 class="cartMarketFrameValue" id="${cardsArray[cardsCounter][12]}cart">${getCartMarketFrameValue(cardsArray[cardsCounter][12])}</h4>`;
		frameString += `</div>`;
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



