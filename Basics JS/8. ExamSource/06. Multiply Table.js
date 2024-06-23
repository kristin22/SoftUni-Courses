function multiplyTable(input) {
    let number = Number(input[0]);
    let first = number % 10;
    let second = number / 10 % 10;
    let third = number / 100 % 10;

	for (let f = 1; f <= first; f++) {
		for (let s = 1; s <= second; s++) {
			for (let th = 1; th <= third; th++) {
				console.log(`${f} * ${s} * ${th} = ${f * s * th};`);
			}
		}
	}
    
}

multiplyTable(["324"]);
/*
#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main()
{
	int number;
	cin >> number;

	int third = number / 100 % 10;
	int second = number / 10 % 10;
	int first = number % 10;

	for (int f = 1; f <= first; f++)
	{
		for (int s = 1; s <= second; s++)
		{
			for (int th = 1; th <= third; th++)
			{
				cout << f << " * " << s << " * " << th << " = " << f * s * th << ";" << endl;
			}
		}
	}

	return 0;
}
*/