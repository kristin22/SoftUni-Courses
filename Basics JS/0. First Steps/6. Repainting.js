function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let sumMaterials = (nylon + 2) * 1.50;
    sumMaterials += (paint * 1.10 * 14.50);
    sumMaterials += (thinner * 5.00);
    sumMaterials += 0.40;
    
    let sumWorkers = (sumMaterials * 0.30) * hours;

    console.log(sumMaterials + sumWorkers);
}

repainting(["10", "11", "4", "8"]);
repainting(["5", "10", "10", "1"]);