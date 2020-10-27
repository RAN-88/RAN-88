
// let sortingTypeHTML = document.getElementById("sortingType").innerHTML;//тип сортировки
document.getElementById("btnSortingUp").addEventListener("click", sortUp);
document.getElementById("btnSortingDown").addEventListener("click", sortDown);
let sortedArray = [];

function sortUp() {
	sortedArray = globalCurrentArray.slice();
	sortingTypeHTML = document.getElementById("sortingType").innerHTML;

	if (sortingTypeHTML == "Price") {
		// console.log("priceUp");
		sortedArray.sort(function (a, b) {
			return (a[1] - b[1])
		});
	}


	else if (sortingTypeHTML == "Name") {
		// console.log("nameUp");
		sortedArray.sort(function (a, b) {
			let nameA = a[0].toLowerCase(), nameB = b[0].toLowerCase()
			if (nameA < nameB) //сортируем строки по возрастанию
				return -1
			if (nameA > nameB)
				return 1
			if (nameA == nameB)
				return 0 // Никакой сортировки!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		});
	}

	else if (sortingTypeHTML == "Rarity") {

		for (i = 0; i < sortedArray.length; i++) {
			if (sortedArray[i][2] == "Common") {
				sortedArray[i].push(1);
			} else if (sortedArray[i][2] == "Uncommon") {
				sortedArray[i].push(2);
			} else if (sortedArray[i][2] == "Rare") {
				sortedArray[i].push(3);
			} else if (sortedArray[i][2] == "Mythic Rare") {
				sortedArray[i].push(4);
			} else if (sortedArray[i][2] == "Special") {
				sortedArray[i].push(5);
			}
		}
		sortedArray.sort(function (a, b) {
			// sortedArray.length - 1
			return (a[18] - b[18])
		});
		for (i = 0; i < sortedArray.length; i++) {
			sortedArray[i].pop();
		}
	}
	// console.log(sortedArray);
	globalCurrentArray = sortedArray.slice();
	drawMarket(sortedArray);
	// console.log(globalCurrentArray);
};

function sortDown() {
	// console.log("от большего к меньшему");
	sortedArray = globalCurrentArray.slice();
	sortingTypeHTML = document.getElementById("sortingType").innerHTML;

	if (sortingTypeHTML == "Price") {
		// console.log("priceDown");
		sortedArray.sort(function (a, b) {
			return (b[1] - a[1])
		});
	}

	else if (sortingTypeHTML == "Name") {
		// console.log("nameDown");
		sortedArray.sort(function (a, b) {
			let nameA = a[0].toLowerCase(), nameB = b[0].toLowerCase()
			if (nameA < nameB) //сортируем строки по возрастанию
				return 1
			if (nameA > nameB)
				return -1
			return 0 // Никакой сортировки
		});
	}

	else if (sortingTypeHTML == "Rarity") {
		// console.log("rarityDown");
		for (i = 0; i < sortedArray.length; i++) {
			if (sortedArray[i][2] == "Common") {
				sortedArray[i].push(1);
			} else if (sortedArray[i][2] == "Uncommon") {
				sortedArray[i].push(2);
			} else if (sortedArray[i][2] == "Rare") {
				sortedArray[i].push(3);
			} else if (sortedArray[i][2] == "Mythic Rare") {
				sortedArray[i].push(4);
			} else if (sortedArray[i][2] == "Special") {
				sortedArray[i].push(5);
			}
		}
		// console.log(sortedArray);
		sortedArray.sort(function (a, b) {
			// sortedArray.length - 1
			return (b[18] - a[18])
		});

		for (i = 0; i < sortedArray.length; i++) {
			sortedArray[i].pop();
		}
	}
	globalCurrentArray = sortedArray.slice();
	drawMarket(sortedArray);
	// console.log(globalCurrentArray);

};













