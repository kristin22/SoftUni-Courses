function trainingLab(input) { 
    
	//вход: w, h -> в метри
    let w = Number(input[0]);
    let h = Number(input[1]);

	let columns = Math.floor(((h * 100) - 100) / 70);
	let rows = Math.floor((w * 100) / 120);
	let workSpace = columns * rows - 3;

	console.log(Math.round(workSpace));
}