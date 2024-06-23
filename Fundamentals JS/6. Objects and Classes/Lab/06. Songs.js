function songs(input) {
    
    let n = input.shift();
    let type = input.pop();
    let arr = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        };

    };

    for (let i = 0; i < n; i++) {
        let curr = input[i].split("_");
        arr.push(new Song(curr[0], curr[1], curr[2]));
    }

    for(let el of arr) {
        if(el.typeList === type) { console.log(el.name); }
        else if (type === "all") { console.log(el.name); }
    }

}

/*
function songs(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    // An array where we will store songs
    let songs = [];
    let numberOfSongs = input.shift();
    let typeSong = input.pop();

    // Iterate over the songs
    for (let i = 0; i < numberOfSongs; i++) {
        let [type, name, time] = input[i].split("_");
        let song = new Song(type, name, time);
        songs.push(song);

    }

    // Output
    if (typeSong === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}

*/

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);