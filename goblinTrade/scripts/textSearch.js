document.getElementById("textSearchIcon").addEventListener('click', drawOnIconClick);
document.getElementById("textSearch").onpaste = showHelp;
document.getElementById("textSearch").addEventListener('keyup', showHelp);
document.getElementById("textSearch").addEventListener('keyup', enterCheck);
document.getElementById("textSearch").addEventListener('click', showHelp);

document.body.addEventListener("click", hideHelp);



function scrollToMarket() {
	let marketY = document.getElementById("collectionCoords").getBoundingClientRect().top + pageYOffset - 70;
	window.scrollTo({
		"top": marketY,
		"behavior": "smooth"
	});
}



function hideHelp(e) {
	if (e.target.classList[0] != "searchFrame" &&
		e.target.classList[0] != "searchFrameText" &&
		e.target.classList[0] != "searchListing" &&
		e.target.classList[0] != "textSearch"
	) {
		document.getElementById("searchListing").innerHTML = '';
	}
}

function enterCheck(event) {
	if (event.key == 'Enter') {
		drawMarket(search());
		document.getElementById("searchListing").innerHTML = '';
		if (document.getElementById("textSearch").value != '') {
			scrollToMarket();
		}
	}
}

function choosePosition(ID) {
	trueID = parseInt(`${ID}`.replace(/\D+/g, ""));
	document.getElementById("textSearch").value = globalCardCollection[trueID][0];
	drawMarket(search());
	document.getElementById("searchListing").innerHTML = '';
	if (document.getElementById("textSearch").value != '') {
		scrollToMarket();
	}
}

function drawOnIconClick() {
	returnBar();
	drawMarket(search());
	document.getElementById("searchListing").innerHTML = '';
	if (document.getElementById("textSearch").value != '') {
		scrollToMarket();
	}
}


function showHelp() {
	returnBar();
	// проверка на пустую строку
	if (document.getElementById("textSearch").value == '') {
		document.getElementById("searchListing").innerHTML = '';
		drawMarket(globalCardCollection);
		return;
	}

	let arrayToShow = search();
	let helpString = '';

	document.getElementById("searchListing").innerHTML = '';
	if (arrayToShow.length > 5) {
		for (let i = 0; i < 5; i++) {
			helpString += `<div class="searchFrame" id="${arrayToShow[i][12]}" onclick="choosePosition(event.target.id)">`
			helpString += `<h4 class="searchFrameText" id="${arrayToShow[i][12]}foundText">${arrayToShow[i][0]}</h4>`
			helpString += `</div>`
			document.getElementById("searchListing").insertAdjacentHTML('beforeend', helpString);
			helpString = '';
		}
	} else if (arrayToShow.length <= 5 && arrayToShow.length > 0) {
		for (let q = 0; q < arrayToShow.length; q++) {
			helpString += `<div class="searchFrame" id="${arrayToShow[q][12]}" onclick="choosePosition(event.target.id)">`
			helpString += `<h4 class="searchFrameText" id="${arrayToShow[q][12]}foundText">${arrayToShow[q][0]}</h4>`
			helpString += `</div>`
			document.getElementById("searchListing").insertAdjacentHTML('beforeend', helpString);
			helpString = '';
		}
	} else if (arrayToShow.length == 0) {
		document.getElementById("searchListing").innerHTML = '';
	}
}


function search() {
	let userRow = document.getElementById("textSearch").value;
	let searchedString = userRow.toLowerCase().replace(/[\,\/\+\-\:\;\\\|\_\*\$\!\&\(\)\?\=\>\<\"\`\%\']/g, "");
	let foundArray = [];
	let foundArrayObject = [];

	for (a = 0; a < globalSearchArray.length; a++) {
		foundArrayObject.push(globalSearchArray[a][0].split(" ")[0]);//первое слово
		foundArrayObject.push(globalSearchArray[a][0]);//всё название
		foundArrayObject.push(globalSearchArray[a][1]);//ID
		foundArrayObject.push(globalSearchArray[a][2]);//кол-во нахождений по маскам
		foundArrayObject.push('');//начало первого слова по маске
		foundArrayObject.push('');//точное совпадение в середине слова
		foundArrayObject.push('');//точное начало первого слова
		foundArrayObject.push('');//точное начало не первого слова

		foundArray.push(foundArrayObject);
		foundArrayObject = [];
	}

	let mask1 = '';
	let mask2 = '';
	let mask3 = '';
	let mask4 = '';
	let regexpArr = [];

	for (let q = 0; q < searchedString.length; q++) {
		mask1 = searchedString.substring(0, q) + '.' + searchedString.substring(q + 1);//опечатка в одной букве
		mask2 = searchedString.substring(0, q) + '.' + searchedString.substring(q);//лишняя буква
		mask3 = searchedString.substring(0, q - 1) + searchedString.substring(q);//не работает пропуск буквы
		mask4 = searchedString.substring(0, q - 1) + searchedString.substring(q, q + 1) + searchedString.substring(q - 1, q) + searchedString.substring(q + 1);//лишняя буква
		// let regexp1 = new RegExp(`${mask1}`, "g");
		// let regexp2 = new RegExp(`${mask2}`, "g");
		// let regexp3 = new RegExp(`${mask3}`, "g");
		let regexp1 = new RegExp(`${mask1}`);
		let regexp2 = new RegExp(`${mask2}`);
		let regexp3 = new RegExp(`${mask3}`);
		let regexp4 = new RegExp(`${mask4}`);
		regexpArr.push(regexp1);
		regexpArr.push(regexp2);
		regexpArr.push(regexp3);
		regexpArr.push(regexp4);
	}


	for (i = 0; i < foundArray.length; i++) {
		// флаги точного совпадения и начала первого слова
		if (foundArray[i][1].includes(searchedString)) {

			if (foundArray[i][1].indexOf(searchedString) == 0) {
				foundArray[i][6] = 1;//точное начало первого слова
				foundArray[i][3]++;
			}
			if (foundArray[i][1].indexOf(searchedString) != 0 && foundArray[i][1].charAt(foundArray[i][1].indexOf(searchedString) - 1) == " ") {
				foundArray[i][7] = 1;//точное начало не первого слова
				foundArray[i][3]++;
			}
			if (foundArray[i][1].indexOf(searchedString) != 0 && foundArray[i][1].charAt(foundArray[i][1].indexOf(searchedString) - 1) != " ") {
				foundArray[i][5] = 1;//точное совпадение в середине слова
				foundArray[i][3]++;
			}
		}

		for (z = 0; z < regexpArr.length; z++) {
			searchResult = foundArray[i][1].match(regexpArr[z]);
			if (searchResult != null) {
				foundArray[i][3]++;
				if (foundArray[i][0].match(regexpArr[z]) != null) {
					if (foundArray[i][0].match(regexpArr[z]).index == 0) {
						foundArray[i][4] = 1;//начало первого слова по маске
					}
				}
			}
		}
	}

	// выкидываем нулевые позиции
	let finalArrayToDraw = [];
	for (let n = 0; n < foundArray.length; n++) {
		if (foundArray[n][3] > 0) { //тут настройка точности
			finalArrayToDraw.push(foundArray[n]);
		}
	}


	//сортировка
	// foundArray[i][6] - точное начало первого слова
	// foundArray[i][7] - точное начало не первого слова
	// foundArray[i][5] - точное совпадение в середине слова
	// foundArray[i][4] - начало первого слова по маске
	finalArrayToDraw.sort(function (a, b) {
		//точное начало первого слова
		return b[6] - a[6];
	});

	finalArrayToDraw.sort(function (a, b) {
		//точное начало не первого слова
		if (a[6] != 1 && b[6] != 1) {
			return b[7] - a[7];
		}
	});

	finalArrayToDraw.sort(function (a, b) {
		//начало первого слова по маске
		if (a[6] != 1 && b[6] != 1 && a[7] != 1 && b[7] != 1) {
			return b[4] - a[4];
		}
	});

	finalArrayToDraw.sort(function (a, b) {
		//точное совпадение в середине слова
		if (a[6] != 1 && b[6] != 1 && a[7] != 1 && b[7] != 1 && a[4] != 1 && b[4] != 1) {
			return b[5] - a[5];
		}
	});

	finalArrayToDraw.sort(function (a, b) {
		//по кол-ву нахождений масками
		if (a[6] != 1 && b[6] != 1 && a[7] != 1 && b[7] != 1 && a[4] != 1 && b[4] != 1 && a[5] != 1 && b[5] != 1) {
			return b[3] - a[3];
		}
	});


	// формируем финальный массив (вытаскиваем позиции из основного массива по ID)
	let foundArrayToDraw = [];
	function getGlobalFoundRowToDraw(idToCheck) {
		for (let i = 0; i < globalCardCollection.length; i++) {
			if (globalCardCollection[i][12] == idToCheck) {
				return i;
			}
		}
	}

	for (m = 0; m < finalArrayToDraw.length; m++) {
		rowIndex = getGlobalFoundRowToDraw(finalArrayToDraw[m][2]);
		foundArrayToDraw.push(globalCardCollection[rowIndex]);
	}


	// console.log(`массив масок:${regexpArr}`);

	// console.log("итоговый массив:");
	// console.log(foundArray);
	// console.log("массив для рисования:");
	// console.log(foundArrayToDraw);
	return (foundArrayToDraw);
}










