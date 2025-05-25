function solve() {
   document.querySelector("#btnSend").addEventListener("click", onCLick);

   function onCLick() {
      let input = JSON.parse(document.querySelector("#inputs textarea").value);
      let restaurants = {};

      let averageSalary = 0;
      let totalSalary = 0;
      let currAverageSalary = 0;
      let bestRestaurant = "";

      for(let line of input) {
         line = line.split(" - ");
         let restaurantName = line.shift();
         let workers = line[0].split(", ");

         for(let worker of workers) {
            let [workerName, workerSalary] = worker.split(" ");
            (!restaurants.hasOwnProperty(restaurantName)) ? restaurants[restaurantName] = {};
         }
      }

      for(let entry of Object.entries(restaurants)) {
         let place = entry[0];
         let workersData = Object.entries(entry[1]);

         for(let [name, salary] of workersData) {
            totalSalary += salary;
         }

         //! continue from here
      }

   }

}



/* Input:
["PizzaHut - Peter 500, George 300, Mark 800",
"TheLake - Bob 1300, Joe 780, Jane 660"]

   Output:
Name: TheLake Average Salary: 913.33 Best Salary: 1300.00
Name: Bob With Salary: 1300 
Name: Joe With Salary: 780 
Name: Jane With Salary: 660
   Comment:
The added restaurants are: TheLake and PizzaHut. 
TheLake has average salary:
(1300+780+660)/3= 913.33,
and PizzaHub has average salary: 
(500+300+800)/2=533.33. 
So the best restaurant is TheLake.

   Input:  
["Mikes - Steve 1000, Ivan 200, Paul 800",
"Fleet - Maria 850, Janet 650"]

   Output:
Name: Fleet Average Salary: 750.00 Best Salary: 850.00
Name: Maria With Salary: 850 
Name: Janet With Salary: 650

*/

/*

function solve() {

   document.querySelector("#btnSend").addEventListener("click", onClick);

   function onClick() {
      let inputArr = JSON.parse(document.querySelector("#inputs textarea").value);

      let averageSalary = 0;
      let totalSalary = 0;
      let currentAverageSalary = 0;
      let bestRestaurant = "";

      let output = {};

      for (let inputElement of inputArr) {
         let restaurantInfo = inputElement.split(" - ");
         let restaurantName = restaurantInfo.shift();
         let workersData = restaurantInfo[0].split(", ");

         for (let worker of workersData) {
            let [name, salary] = worker.split(" ");
            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }
            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
            }
         }
      }

      let entries = Object.entries(output);

      for (let entry of entries) {
         let key = entry[0];
         let values = Object.entries(entry[1]);

         for (let [name, salary] of values) {
            totalSalary += salary;
         }

         averageSalary = totalSalary / values.length;

         if (averageSalary > currentAverageSalary) {
            currentAverageSalary = averageSalary;
            bestRestaurant = key;
            totalSalary = 0;
         }
      }

      let print = "";
      let result = Object.entries(output[bestRestaurant])
         .sort((a, b) => b[1] - a[1]);

      result.forEach((w) => (print += `Name: ${w[0]} With Salary: ${w[1]} `));

      document.querySelector("#bestRestaurant p")
         .textContent = `Name: ${bestRestaurant} Average Salary: ${currentAverageSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)}`;
      document.querySelector("#workers p").textContent = print;
   }
}

 */