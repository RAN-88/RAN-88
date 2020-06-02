function moveBar() {
	document.getElementById("menuCart").classList.toggle("menuCartActive");
}
function returnBar() {
	document.getElementById("menuCart").classList.remove("menuCartActive");
}
document.getElementById("headerCartBtn").addEventListener("click", moveBar);

document.body.addEventListener("click", closeCart);
function closeCart(e) {

	if (e.target.id != "headerCartBtn" &&
		e.target.id != "cartItemsQuantity" &&
		e.target.id != "cartPriceTotal" &&
		e.target.classList[0] != "cartWrapper" &&
		e.target.classList[0] != "icon-cart-right" &&
		e.target.classList[0] != "textSearch" &&
		e.target.classList[0] != "icon-search" &&
		e.target.classList[0] != "menuCart" &&
		e.target.classList[0] != "cartWrapperContent" &&
		e.target.classList[0] != "cartFooter" &&
		e.target.classList[0] != "cartTotal" &&
		e.target.classList[0] != "total" &&
		e.target.classList[0] != "cartPriceTotal" &&
		e.target.classList[0] != "cartMailWrapper" &&
		e.target.classList[0] != "cartEmailLink" &&
		e.target.classList[0] != "cartMail" &&
		e.target.classList[0] != "cartMailTextWrapper" &&
		e.target.classList[0] != "textCartMail" &&
		e.target.classList[0] != "cartOrder" &&
		e.target.classList[0] != "orderText" &&
		e.target.classList[0] != "cartFrame" &&
		e.target.classList[0] != "cartRemoveFrame" &&
		e.target.classList[0] != "icon-cross" &&
		e.target.classList[0] != "cartFrameBG" &&
		e.target.classList[0] != "cartImgFrame" &&
		e.target.classList[0] != "cartImg" &&
		e.target.classList[0] != "cartFrameInfo" &&
		e.target.classList[0] != "cartFrameInfoText" &&
		e.target.classList[0] != "cartFrameInfoTextName" &&
		e.target.classList[0] != "cartFrameInfoTextConditions" &&
		e.target.classList[0] != "cartFrameInfoMain" &&
		e.target.classList[0] != "cartMainPrice" &&
		e.target.classList[0] != "cartMainQuantity" &&
		e.target.classList[0] != "cartMainManagWrapper" &&
		e.target.classList[0] != "cartMainPlus" &&
		e.target.classList[0] != "cartMainFrameQuantity" &&
		e.target.classList[0] != "cartMainMinus" &&
		e.target.classList[0] != "cartMainTotal" &&
		e.target.classList[0] != "fas" &&
		e.target.classList[0] != "cartTotalPrice" &&
		e.target.classList[0] != "toCheck"
	) {
		returnBar()
	}
}
// ----------------------------------------------------------

let summPositions = 0;

function countHeaderCart() {
	for (let i = 0; i < cartArray.length; i++) {
		summPositions += cartArray[i][13]
	}
	document.getElementById("headerCartMarketContent").innerHTML = summPositions;
	document.getElementById("cartItemsQuantity").innerHTML = summPositions;
	summPositions = 0;
}

function totalMoney() {
	let money = 0;
	for (let i = 0; i < cartArray.length; i++) {
		money += cartArray[i][13] * cartArray[i][1]
	}
	document.getElementById("cartPriceTotal").innerHTML = money;
	money = 0;
}

// принимает троку в cart и ID из основного массива
function totalFrameMoney(cartRow, ID) {
	cartArray[cartRow][14] = cartArray[cartRow][13] * cartArray[cartRow][1]//изменили сумму по позиции
	document.getElementById(`${ID}summ`).innerHTML = cartArray[cartRow][14];//переписали сумму по позиции из массива
}

let cartArray = [];//массив корзины глобально
let cartCounter;//счётчик корзины глобально

// addID - основной ID из массива типа 0 (mainArr) (и это номер строки в exel)
// на выходе исходный массив корзины
function addToCart(addID) {
	addClearID = parseInt(`${addID}`.replace(/\D+/g, ""));
	foundRow = checkArrayCoinside(addID);//получили номер строки в массиве Cart
	if (foundRow == "free") {
		currentArrRow = getGlobalCurrentArrayRow(addClearID);//получили номер строки в большом массиве
		cartArray.push(globalCurrentArray[currentArrRow]);//надо найти строку, так ломается на сортировке
		document.getElementById(`${addID}cart`).innerHTML = `1`; //это корзина в большом массиве
	}
	else {
		if (cartArray[foundRow][13] >= globalCurrentArray[currentArrRow][9]) {
		}
		else {
			cartArray[foundRow][13]++;//увеличиваем кол-во, если такой элемент был в малом массиве. Новый не рисуем.
			document.getElementById(`${addID}cart`).innerHTML = `${cartArray[foundRow][13]}`;
			totalFrameMoney(foundRow, addClearID);
		}
	}
	countHeaderCart();
	totalMoney();
	drawCart();
}

function getGlobalCurrentArrayRow(idToCheck) {
	for (let i = 0; i < globalCurrentArray.length; i++) {
		if (globalCurrentArray[i][12] == idToCheck) {
			return i;
		}
	}
}




// на входе ID из большого массива. На выходе строка в малом. Если нет, то "free"
function checkArrayCoinside(idToCheck) {
	for (let i = 0; i < cartArray.length; i++) {
		if (cartArray[i][12] == idToCheck) {
			return i;
		}
	}
	return "free";
}


function drawCart() {
	cartCounter = 0;//обнуляем счётчик корзины
	drawCartArray(cartArray);
}


let cartString = '';//строка вывода в HTML глобально
let cartWrapper = document.getElementById("cartWrapperContent");//обёртка перечня карт

function drawCartArray(cartArrayToDraw) {
	cartWrapper.innerHTML = '';//очистка содержимого корзины

	for (cartCounter; cartCounter < cartArrayToDraw.length; cartCounter++) {
		if (cartArrayToDraw[cartCounter] == 0) {
			continue;
		}
		cartString += `<div class="cartFrame grid">`
		cartString += `<i class="icon-cross cartRemoveFrame" id="${cartArrayToDraw[cartCounter][12]}x" onclick="removeFromCart(event.target.id)"></i>`
		cartString += `<div class="cartFrameBG"></div>`
		cartString += `<div class="cartImgFrame">`
		cartString += `<div class="cartImg" style="background-image: url(${cartArrayToDraw[cartCounter][11]});"></div>`
		cartString += `</div>`
		cartString += `<div class="cartFrameInfo grid ">`
		cartString += `<div class="cartFrameInfoText grid ">`
		cartString += `<div class="cartFrameInfoTextName">`
		cartString += `<h4 class="toCheck">${cartArrayToDraw[cartCounter][0]}</h4>`
		cartString += `</div>`
		cartString += `<div class="cartFrameInfoTextConditions ">`
		cartString += `<h4 class="toCheck">${cartArrayToDraw[cartCounter][7]}</h4>`
		cartString += `<h4 class="toCheck">${cartArrayToDraw[cartCounter][2]}</h4>`
		cartString += `<h4 class="toCheck">${cartArrayToDraw[cartCounter][4]}</h4>`
		cartString += `<h4 class="toCheck">${cartArrayToDraw[cartCounter][5]}</h4>`
		cartString += `<h4 class="toCheck">${cartArrayToDraw[cartCounter][6]}</h4>`
		cartString += `<h4 class="toCheck">${cartArrayToDraw[cartCounter][3]}</h4>`
		cartString += `</div>`
		cartString += `</div>`
		cartString += `<div class="cartFrameInfoMain grid">`
		cartString += `<div class="cartMainPrice ">`
		cartString += `<h4 class="toCheck">Price: <span id="cartPrice" class="toCheck">${cartArrayToDraw[cartCounter][1]}</span>р</h4>`
		cartString += `</div>`
		cartString += `<div class="cartMainQuantity ">`
		cartString += `<div class="cartMainManagWrapper">`
		cartString += `<i class="fas fa-plus cartMainPlus" id="${cartArrayToDraw[cartCounter][12]}+" onclick="plusToCart(event.target.id)"></i>`
		cartString += `<h4 class="cartMainFrameQuantity" id="${cartArrayToDraw[cartCounter][12]}quantity">${cartArrayToDraw[cartCounter][13]}</h4>`
		cartString += `<i class="fas fa-minus cartMainMinus" id="${cartArrayToDraw[cartCounter][12]}-" onclick="minusToCart(event.target.id)"></i>`
		cartString += `</div>`
		cartString += `</div>`
		cartString += `<div class="cartMainTotal ">`
		cartString += `<h4 class="toCheck">Total: <span id="${cartArrayToDraw[cartCounter][12]}summ" class="cartTotalPrice">${cartArrayToDraw[cartCounter][14]}</span></h4>`
		cartString += `</div>`
		cartString += `</div>`
		cartString += `</div>`
		cartString += `</div>`

		cartWrapper.insertAdjacentHTML('beforeend', cartString);//рисуем 1 фрейм
		cartString = '';//чистим строку
	}
	cartCounter = 0;
};

//на входе ID из большого массива
function plusToCart(plusID) {
	clickedPlusID = parseInt(`${plusID}`.replace(/\D+/g, ""));
	currentArrRowToPlus = getGlobalCurrentArrayRow(clickedPlusID);//получили номер строки в большом массиве
	getCartArrayRow = checkArrayCoinside(clickedPlusID); //получили номер строки в массиве Cart

	if (cartArray[getCartArrayRow][13] >= globalCurrentArray[currentArrRowToPlus][9]) {
	} else {
		cartArray[getCartArrayRow][13]++;
	}
	//меняем большую карзину (там реальный ID из большого массива)
	if (cardsCounter >= currentArrRowToPlus) {
		document.getElementById(`${clickedPlusID}cart`).innerHTML = `${cartArray[getCartArrayRow][13]}`;
	}
	//меняем кол-во в корзине
	document.getElementById(`${clickedPlusID}quantity`).innerHTML = `${cartArray[getCartArrayRow][13]}`;
	totalMoney();
	countHeaderCart();
	totalFrameMoney(getCartArrayRow, clickedPlusID);

}

//на входе ID из большого массива
function minusToCart(minusID) {
	clickedMinusID = parseInt(`${minusID}`.replace(/\D+/g, ""));//получили ID в большом массиве
	getCartArrayRow = checkArrayCoinside(clickedMinusID); //получили номер строки в массиве Cart
	currentArrRowToMinus = getGlobalCurrentArrayRow(clickedMinusID);//получили номер строки в большом массиве


	cartArray[getCartArrayRow][13]--;


	if (cartArray[getCartArrayRow][13] <= 0) {
		removeFromCart(clickedMinusID); //передали чистый реальный ID из большого массива
	}
	else {
		//меняем большую карзину (там реальный ID из большого массива)
		if (cardsCounter >= currentArrRowToMinus) {
			document.getElementById(`${clickedMinusID}cart`).innerHTML = `${cartArray[getCartArrayRow][13]}`;
		}
		//меняем кол-во в корзине
		document.getElementById(`${clickedMinusID}quantity`).innerHTML = `${cartArray[getCartArrayRow][13]}`;
		totalFrameMoney(getCartArrayRow, clickedMinusID);
	}
	totalMoney();
	countHeaderCart();
}

//на входе реальный ID в чистом виде
function removeFromCart(removedID) {
	xID = parseInt(`${removedID}`.replace(/\D+/g, ""));
	removeFromCartArray(xID);
}

//на входе реальный ID в чистом виде
function removeFromCartArray(rowToRemove) {
	getCartRow = checkArrayCoinside(rowToRemove); //получили номер строки в массиве Cart
	currentArrRowToRemove = getGlobalCurrentArrayRow(rowToRemove);//получили номер строки в большом массиве

	cartArray[getCartRow][13] = 1;
	cartArray.splice(getCartRow, 1);
	countHeaderCart();
	totalMoney();
	drawCart();
	if (cardsCounter >= currentArrRowToRemove) {
		document.getElementById(`${rowToRemove}cart`).innerHTML = `0`;
	}
}