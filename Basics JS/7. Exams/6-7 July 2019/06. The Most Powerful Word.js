// Not finished
// https://judge.softuni.org/Contests/Practice/Index/1745#9

function mostPowerfulWord(input) {
    let index = 0;
    let word = input[index];

    let wordMax = "";
    let wordMaxPoints = 0;
    
    while(word !== "End of words") {

        let curLetterASCII = 0;
        for(let i = 0; i < word.length; i++) {
            curLetterASCII = word.charCodeAt(i);
        }

        index++;
        word = input[index];
    }

    if(word === "End of words") {
        console.log(`The most powerful word is ${wordMax} - ${wordMaxPoints}`);
    }



}

mostPowerfulWord(["The",
                "Most",
                "Powerful",
                "Word",
                "Is",
                "Experience",
                "End of words"]);

mostPowerfulWord(["But",
                "Some",
                "People",
                "Say",
                "It's",
                "LOVE",
                "End of words"]);

/*
80 / 100

#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main()
{
    string word;
    getline(cin >> ws, word);

    double mostPoints = -1000;
    string bestWord;


    while (word != "End of words")
    {
        double wordSum = 0;
        for (int i = 0; i < word.length(); i++)
        {
            wordSum += word[i];
        }

        bool isVowel = word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u' || word[0] == 'y' || word[0] == 'A' || word[0] == 'E' || word[0] == 'I' || word[0] == 'O' || word[0] == 'U' || word[0] == 'Y';

        if (isVowel)
        {
            wordSum = floor(wordSum * word.length());
        }
        else
        {
            wordSum = floor(wordSum / word.length());
        }

        if (wordSum > mostPoints)
        {
            mostPoints = wordSum;
            bestWord = word;
        }

        getline(cin >> ws, word);
    }

    cout << "The most powerful word is " << bestWord << " - " << mostPoints << endl;

    return 0;
}



*/