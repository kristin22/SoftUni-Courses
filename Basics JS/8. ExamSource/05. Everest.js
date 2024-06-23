function everest(input) {
    let command = input[0];
    let index = 0;

    let sum = 5364;
    let aim = 8848;
    let days = 1;

    let currM = 0;
    while(command !== "END") {
        if(command === "Yes") {
            days++;
            if(days === 5) {
                break;
            }
        }

        currM = Number(input[++index]);
        sum += currM;
        if(sum >= aim) {
            break;
        }
        command = input[++index];
    }

    if(sum >= aim) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log("Failed!");
        console.log(sum);
    }
}

// everest(["Yes",
// "1254",
// "Yes",
// "1402",
// "No",
// "250",
// "Yes",
// "635"]);

// everest(["Yes",
// "1000",
// "Yes",
// "945",
// "No",
// "1200",
// "END"]);

everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"]);

everest(["Yes",
"700",
"END"]);

/* C++ решение

#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main()
{
	double currentHeight = 5364;
	int daysCnt = 1;

	while (true)
	{
		string yesOrNo;
		getline(cin >> ws, yesOrNo);


		//END
		if (yesOrNo == "END")
		{
			if (currentHeight >= 8848)
			{
				cout << "Goal reached for " << daysCnt << " days!" << endl;
			}
			else
			{
				cout << "Failed!" << endl;
				cout << currentHeight << endl;

			}
			return 0;
		}

		if (yesOrNo == "Yes")
		{
			daysCnt++;	
		}
		
		

		if (daysCnt > 5)
		{
			if (currentHeight >= 8848)
			{
				cout << "Goal reached for " << daysCnt << " days!" << endl;
			}
			else
			{
				cout << "Failed!" << endl;
				cout << currentHeight << endl;

			}
			return 0;
		}

		double hiked;
		cin >> hiked;
		currentHeight += hiked;

		if (currentHeight >= 8848)
		{
			cout << "Goal reached for " << daysCnt << " days!" << endl;
			return 0;
		}
		
	}




	return 0;
}
 */