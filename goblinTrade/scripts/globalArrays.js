let globalCardCollection = []; //вся коллекция карт - глобально
let globalPromoCardCollection = []; //вся коллекция скидок - глобально
let globalCurrentArray = [];//текущий массив для рисования - глобально
let globalSearchArray = [];//текущий массив для поиска - глобально

function makeGlobalArrays(arrays) {
	globalCardCollection = arrays[0].slice();
	globalCurrentArray = arrays[0].slice();
	globalPromoCardCollection = arrays[1].slice();

	for (let i = 0; i < arrays[0].length; i++) {
		let searchObject = [];
		searchObject.push(arrays[0].slice()[i][0]);
		searchObject.push(arrays[0].slice()[i][12]);
		searchObject.push(0);
		globalSearchArray.push(searchObject);
		globalSearchArray[i][0] = globalSearchArray[i][0].toLowerCase().replace(/[\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "");
	}
}
