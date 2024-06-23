function wordsTracker(input) {
    let tracked = {};

    let searched = input.shift().split(" ");
    for(const currWord of searched) {
        tracked[currWord] = 0;
    }

    for(const currWord of input) {
        if (tracked.hasOwnProperty(currWord)) {
            tracked[currWord]++;
        }
    }

    Object.entries(tracked).sort((a, b) => b[1] - a[1]).forEach(element => {
        console.log(`${element[0]} - ${element[1]}`);
    });

}

wordsTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);

wordsTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);


//?  Object.fromEntries() converts array or map to an object.

/*
1. Вземаме стринга от инпута и я трием от там
2. Разделяме го  на отделни думи; запаметява го в масив
3. Минаваме през всеки елемент на масива и с map добавяме всички елементи в result 
   с начална стойност 0, защото думите от първия вход не се броят във output-а

4. Минаваме през останалата част от входния масив и броим само думите от първия вход, а останалите ги подминаваме

map: връща нов масив
forEach: не връща нов масив, но с него може да сумираме всички стойности, да проверяваме всички елементи или да логваме нещо
*/



/*  Алтернативно решение 1:

function wordsTracker(words) {
    let result = {};

    words.shift().split(" ")
        .map(word => {
            { result[word] = 0 }
        });

    words.forEach((x) => {
        if (result.hasOwnProperty(x)) { result[x]++ }
    });

Object.entries(result)
        .sort((a, b) => b[1] - a[1])
        .forEach(x => console.log(`${x[0]} - ${x[1]}`))

}

*/

/*  Алтернативно решение 2:

function wordsTracker(input) {
    let wordsToFind = input.shift().split(' ');
    let wordsToFindObject = {};

    for (const line of wordsToFind) {
      wordsToFindObject[line] = 0;
    }
    for (const line of input) {
      for (let key in wordsToFindObject) {
        if (key === line) {
          wordsToFindObject[key] += 1;
        }
      }
    }
    let arrayToSort = Object.entries(wordsToFindObject).sort((a,b) => b[1] - a[1])
    let wordsSorted = Object.fromEntries(arrayToSort);
    for (let key in wordsSorted) {
      console.log(`${key} - ${wordsSorted[key]}`);
    }
  }

*/
