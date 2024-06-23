function smallestTwo(numbers) {
    numbers.sort((a,b)=>a-b);
    console.log(numbers[0], numbers[1]);
}

smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);