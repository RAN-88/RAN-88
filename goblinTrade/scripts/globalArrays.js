// на входе 2 массива из json (полный массив и массив промо)

let globalCardCollection = []; //вся коллекция карт - глобально
let globalPromoCardCollection = []; //вся коллекция скидок - глобально
let globalCurrentArray = [];//текущий массив для рисования - глобально
let globalSearchArray = [];//текущий массив для текстового поиска - глобально
let globalAdvancedSearchArray = []; //текущий шаблонный массив для advanced search
// let globalAdvancedSearchMask = [];
let globalAdvancedSearchCMC = [];//0
let globalAdvancedSearchColor = [];//1
let globalAdvancedSearchCondition = [];//2
let globalAdvancedSearchSet = [];//3
let globalAdvancedSearchType = [];//4
let globalAdvancedSearchRarity= [];//5

function makeGlobalArrays(arrays) {
	globalCardCollection = arrays[0].slice();
	globalCurrentArray = arrays[0].slice();
	globalPromoCardCollection = arrays[1].slice();
	for (let i = 0; i < arrays[0].length; i++) {
		let searchObject = [];
		searchObject.push(arrays[0].slice()[i][0]); //название
		searchObject.push(arrays[0].slice()[i][12]); //ID
		searchObject.push(0);//счетчик совпадений
		globalSearchArray.push(searchObject);
		globalSearchArray[i][0] = globalSearchArray[i][0].toLowerCase().replace(/[\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "");
	}
	// for (let q = 0; q < arrays[0].length; q++) {
	// 	let advSearchObject = [];
	// 	advSearchObject.push(arrays[0].slice()[q][12]); //0 - ID
	// 	advSearchObject.push(arrays[0].slice()[q][2].toLowerCase()); //1 - рарность
	// 	advSearchObject.push(arrays[0].slice()[q][3].toLowerCase()); //2 - состояние
	// 	advSearchObject.push(arrays[0].slice()[q][7].toLowerCase()); //3 - сет
	// 	advSearchObject.push(arrays[0].slice()[q][15].toLowerCase()); //4 - тип
	// 	advSearchObject.push(arrays[0].slice()[q][16].toLowerCase()); //5 - цвет
	// 	if(arrays[0][q][16].length > 1 && arrays[0][q][16] != "<>"){
	// 		advSearchObject.push("multicolor");//6 - флаг многоцветности
	// 	} else {
	// 		advSearchObject.push("monocolor");//6 - флаг многоцветности
	// 	}
	// 	advSearchObject.push(arrays[0].slice()[q][17]); //7 - манакост
	// 	advSearchObject.push(0);//8 - флаг
	// 	globalAdvancedSearchArray.push(advSearchObject);
	// 	globalAdvancedSearchArray[q][2] = globalAdvancedSearchArray[q][2].replace(/[" "\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "");
	// 	globalAdvancedSearchArray[q][3] = globalAdvancedSearchArray[q][3].replace(/[" "\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "");
	// // }
	// console.log(globalAdvancedSearchArray);
}
