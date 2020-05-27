let globalCardCollection = []; //вся коллекция карт (массив коллекций) - глобально
let globalPromoCardCollection = []; //вся коллекция скидок (массив коллекций) - глобально
let globalCurrentArray = [];//текущий массив для рисования

function makeGlobalArrays(arrays) {
	globalCardCollection = arrays[0];
	globalPromoCardCollection = arrays[1];
	globalCurrentArray = arrays[0];
}