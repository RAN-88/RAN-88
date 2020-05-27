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
			cardObject.push(massiveData[i].gsx$cardname.$t);
			cardObject.push(massiveData[i].gsx$cardprice.$t);
			cardObject.push(massiveData[i].gsx$rarity.$t);
			cardObject.push(massiveData[i].gsx$cardcondition.$t);
			cardObject.push(massiveData[i].gsx$cardlanguage.$t);
			cardObject.push(massiveData[i].gsx$cardfoil.$t);
			cardObject.push(massiveData[i].gsx$cardpromo.$t);
			cardObject.push(massiveData[i].gsx$cardset.$t);
			cardObject.push(massiveData[i].gsx$cardnumber.$t);
			cardObject.push(massiveData[i].gsx$cardquantity.$t);
			cardObject.push(massiveData[i].gsx$carddiscount.$t);
			cardObject.push(massiveData[i].gsx$cardimg.$t);
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


