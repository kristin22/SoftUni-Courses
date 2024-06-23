function vacation(arr) {
	let needMoney = Number(arr[0]);
	let savedMoney = Number(arr[1]);
	
	let money = 0;
	let index = 2;
	let command = arr[index];

	let spendDays = 0;
	let days = 0;

	while (spendDays !== 5 && savedMoney < needMoney) {
		days++;
		6
		index++;
		money = Number(arr[index]);

		switch (command) {
			case "spend": 
				spendDays++;
				if (savedMoney < money) {
					savedMoney = 0;
				} else {
					savedMoney -= money;
				}
				break;
			case "save": 
				spendDays = 0;
				savedMoney += money;

				break;
		}
		index++;
		command = arr[index];
	}

	if (spendDays === 5) {
		console.log("You can't save the money.");
		console.log(days);
	} else if (savedMoney >= needMoney) {
		console.log(`You saved the money for ${days} days.`);
	}
}

vacation(["2000",
		"1000",
		"spend",
		"1200",
		"save",
		"2000"]);

vacation(["110",
		"60",
		"spend",
		"10",
		"spend",
		"10",
		"spend",
		"10",
		"spend",
		"10",
		"spend",
		"10"]);

vacation(["250",
		"150",
		"spend",
		"50",
		"spend",
		"50",
		"save",
		"100",
		"save",
		"100"]);
