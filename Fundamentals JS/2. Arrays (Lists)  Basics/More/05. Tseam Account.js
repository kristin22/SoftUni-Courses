function account(arr) {
        let strGames = arr.shift()
        let games = strGames.split(" ");

        for (let i = 0; i < arr.length; i++) {
                let str = arr[i];
                let currArr = str.split(" ");

                let command = currArr[0];
                let game = currArr[1];
                let index = games.indexOf(game);

                if (command === "Play!") {
                        break;
                } else if (command === "Install") {    
                        if (!games.includes(game)) {    // add it if the game is not in the list
                                games.push(game);
                        }
                } else if (command === "Uninstall") {
                        if (index > -1) {
                                games.splice(index, 1);
                        }
                } else if (command === "Update") {
                        if (index > -1) {
                                games.push(game);
                                games.splice(index, 1);
                        }
                } else if (command === "Expansion") {
                        let indexTwo = game.indexOf("-");
                        // replace - with :
                        game = game.replace("-", ":");
                        let gameLeft = game.substr(0, indexTwo);

                        index = games.indexOf(gameLeft);
                        if (index > -1) {
                                 
                                games.splice((index+1), 0, game);
                        }
                }
        }

        console.log(games.join(" "));

}

account(['CS WoW Diablo', 'Install LoL', 'Uninstall WoW', 'Update Diablo', 'Expansion CS-Go', 'Play!']);

account(['CS WoW Diablo', 'Uninstall XCOM', 'Update PeshoGame', 'Update WoW', 'Expansion Civ-V', 'Play!']);


/*

If you know the index of an item, you can remove it from the array using splice():

const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities); // [ "Manchester", "Edinburgh", "Carlisle" ]

*/