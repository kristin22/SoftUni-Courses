function letterStream(input) {
    let text = "";
    let index = 0;
    let letter = input[index];
    let c = 0, o = 0, n = 0, i = 0;

    while(letter !== "End") {
        if (letter === "c") {
            c++;
            if (c > 1) {
                text += letter;
            }
        } else if (letter === "o") {
            o++;
            if (o > 1) {
                text += letter;
            }
        } else if (letter === "n") {
            n++;
            if (n > 1) {
                text += letter;
            }
        } else { 
            text += letter;
        }

        index++;
        letter = input[index];
    }

    console.log(text);
}

letterStream(["H",
            "n",
            "e",
            "l",
            "l",
            "o",
            "o",
            "c",
            "t",
            "c",
            "h",
            "o",
            "e",
            "r",
            "e",
            "n",
            "e",
            "End"]);

/*

#include <iostream>
using namespace std;

int main() {
    string letter, prevLetter;
    cin >> letter;

    bool isLatin = (letter[0] >= 65 && letter[0] <= 90) || (letter[0] >= 97 && letter[0] <= 122);

    if (letter.length() == 1 && isLatin) {
        prevLetter += letter;
    }

    prevLetter = letter;


    while (letter != "End") {

        cin >> letter;

        if (letter.length() == 1 && isLatin) {
            prevLetter += letter;
        }
    }

    if (letter == "End") {
        cout << prevLetter << " ";
    }

    return 0;
}

*/