function uniquePINCodes(input) {
    let firstEnd = Number(input[0]); 
    let secondEnd = Number(input[1]);
    let thirdEnd = Number(input[2]);

	for (let first = 2; first <= firstEnd; first++) {
		for (let second = 2; second <= secondEnd; second++) {
			for (let third = 2; third <= thirdEnd; third++) {
				let isPrime = second == 2 || second == 3 || second == 5 || second == 7;

				if (first %  2 == 0 && third % 2 == 0 && isPrime) {
					console.log(`${first} ${second} ${third}`);
				}
			}
		}
	}
}

uniquePINCodes(["3", "5", "5"]);
uniquePINCodes(["8", "2", "8"]);

/*

#include <iostream>
using namespace std;

let main()
{
	let firstEnd, secondEnd, thirdEnd;
	cin >> firstEnd >> secondEnd >> thirdEnd;

	for (let first = 2; first <= firstEnd; first++)
	{
		for (let second = 2; second <= secondEnd; second++)
		{
			for (let third = 2; third <= thirdEnd; third++)
			{
				bool isPrime = second == 2 || second == 3 || second == 5 || second == 7;

				if (first %  2 == 0 && third % 2 == 0 && isPrime)
				{
					cout << first << " " << second << " " << third << endl;
				}
			}
		}
	}


	return 0;
}

*/