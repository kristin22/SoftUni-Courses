function pieceOfPie(arr, str1, str2) {
    let index1 = arr.indexOf(str1);
    let index2 = arr.indexOf(str2);

    let result = arr.slice(index1, index2 + 1);
    return result;
}

console.log(pieceOfPie(['Pumpkin Pie',
                        'Key Lime Pie',
                        'Cherry Pie',
                        'Lemon Meringue Pie',
                        'Sugar Cream Pie'],
                        'Key Lime Pie',
                        'Lemon Meringue Pie'));

console.log(pieceOfPie(['Apple Crisp',
                        'Mississippi Mud Pie',
                        'Pot Pie',
                        'Steak and Cheese Pie',
                        'Butter Chicken Pie',
                        'Smoked Fish Pie'],
                        'Pot Pie',
                        'Smoked Fish Pie'));