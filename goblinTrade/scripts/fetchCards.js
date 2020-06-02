const url = "https://spreadsheets.google.com/feeds/list/1oRfLp0FBeZGyVF5icn9X-Qsvoy_IyoWe4EyDXIX3htw/od6/public/values?alt=json";
// window.onload = function () {

let fetchCards = fetch(url)
let getJSON = fetchCards.then(
	function getArray(response) {
		return response.json()
	}
)

//получение основного массива и массива промо, всё что их использует делать через then
let getCardArray = getJSON.then(
	function processingArray(json) {
		let cardCollection = []; //вся коллекция карт (массив коллекций) - глобально
		let promoCardCollection = []; //вся коллекция скидок (массив коллекций) - глобально
		let cardObject = []; // карта как массив

		let massiveData = json.feed.entry; // копнули JSON до массива данных

		for (let i = 0; i < massiveData.length; i++) {
			//создаём массив i-ая карта
			cardObject.push(massiveData[i].gsx$cardname.$t); //0
			cardObject.push(massiveData[i].gsx$cardprice.$t);//1
			cardObject.push(massiveData[i].gsx$rarity.$t);//2
			cardObject.push(massiveData[i].gsx$cardcondition.$t);//3
			cardObject.push(massiveData[i].gsx$cardlanguage.$t);//4
			cardObject.push(massiveData[i].gsx$cardfoil.$t);//5
			cardObject.push(massiveData[i].gsx$cardpromo.$t);//6
			cardObject.push(massiveData[i].gsx$cardset.$t);//7
			cardObject.push(massiveData[i].gsx$cardnumber.$t);//8
			cardObject.push(massiveData[i].gsx$cardquantity.$t);//9
			cardObject.push(massiveData[i].gsx$carddiscount.$t);//10
			cardObject.push(massiveData[i].gsx$cardimg.$t);//11
			cardObject.push(i);//12 //задали ID для каждой карты. ID=строка+mainArr
			cardObject.push(1);//13 //счётчки для корзины. Начальное состояние 1
			cardObject.push(massiveData[i].gsx$cardprice.$t * 1);//14 //сумма попозиции для корзины. Исходно = price
			// формируем массив промо
			if (massiveData[i].gsx$carddiscount.$t != 0) {
				promoCardCollection.push(cardObject);
			}
			cardCollection.push(cardObject); //добавляем карту в массив - коллекцию
			cardObject = []; //очищаем массив карту
		}
		// console.log(cardCollection);
		return [cardCollection, promoCardCollection];
	}
)

getCardArray.then(
	function (result) {
		makeGlobalArrays(result);
	}
)

getCardArray.then(
	function (result) {
		drawMarket(result[0]);
	}
)


