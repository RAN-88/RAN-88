function draw(cardCollection) {
	let mainFrame = document.getElementById("mainFrame");
	cardAmount = cardCollection.length; //кол-во карт

	if (cardAmount % 2 == 0) {
		frameAmount = cardCollection.length;
	} else {
		frameAmount = cardCollection.length + 1;
	}

	mainFrame.style.gridTemplateRows = `repeat(frameAmount/2,1fr)`;
	let columnPlace = 0;
	let rowPlace = 0;

	for (let i = 0; i < cardAmount; i++) {
		//вычисляем колонку
		if (i % 2 == 0) {
			columnPlace = 1;
		} else {
			columnPlace = 2;
		}
		//вычисляем строку
		rowPlace = Math.floor((i + 2) / 2);
		//создаём обёртку для одной карты
		let cardFrame = document.createElement('div');
		cardFrame.className = "cardFrame";
		cardFrame.style.gridColumn = `${columnPlace}`;
		cardFrame.style.gridRow = `${rowPlace}`;
		mainFrame.append(cardFrame);

		//вытаскиваем ссылку на картинку
		let currentImg = cardCollection[i][6];
		//рисуем картинку
		let imgFrame = document.createElement('div');
		imgFrame.className = "imgFrame";
		imgFrame.style.backgroundImage = `url(${currentImg})`;
		cardFrame.append(imgFrame);

		//вытаскиваем ссылки на свойства
		let currentName = cardCollection[i][0];
		let currentPrice = cardCollection[i][1];
		let currentSet = cardCollection[i][2];
		let currentNumber = cardCollection[i][3];
		let currentQuantity = cardCollection[i][4];
		let currentDiscount = cardCollection[i][5];

		//вписываем свойства
		let textFrame = document.createElement('div');
		textFrame.className = "textFrame";
		textFrame.innerHTML =
			`<p>Name: ${currentName}</p> 
			<p>Price: ${currentPrice}</p> 
			<p>Set: ${currentSet}</p> 
			<p>Number: ${currentNumber}</p> 
			<p>Quantity: ${currentQuantity}</p> 
			<p>Discount: ${currentDiscount}</p>`;
		cardFrame.append(textFrame);
	}
}

