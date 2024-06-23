function pianist(input) {
    let playlist = {};

    let n = Number(input.shift());
    for(let i = 0; i < n; i++) {
        let piece = input.shift().split("|");
        
        if (playlist.hasOwnProperty(piece[0])) {
            console.log(`${piece} is already in the collection!`);
            continue;
        } else {
            // add
            playlist[piece.shift()] = piece;
        }
    }

    let line =  input.shift();
    while(line !== "Stop") {
        line = line.split("|")  // command, piece, composer, key

        if (playlist.hasOwnProperty(line[1])) {  // piece is in playlist
            playlist[line[1]] == line[2];

            if (line[0] === "Add") {
                console.log(`${line[1]} is already in the collection!`);
            } else if (line[0] === "Remove") {
                delete playlist[line[1]];
                console.log(`Successfully removed ${line[1]}!`);
            } else if (line[0] === "ChangeKey") {
                playlist[line[1]][1] = line[2];
                console.log(`Changed the key of ${line[1]} to ${line[2]}!`);
            }
        } else {
            if (line[0] === "Add") {     // piece isn't in playlist
                console.log(`${line[1]} by ${line[2]} in ${line[3]} added to the collection!`);
                line.shift();
                playlist[line.shift()] = line;
            } else if (line[0] === "ChangeKey" || line[0] === "Remove") {
                console.log(`Invalid operation! ${line[1]} does not exist in the collection.`); 
            } 
        } 
    
        line = input.shift();
    }
    
    
    for(let [key, value] of Object.entries(playlist)) {
        console.log(`${key} -> Composer: ${value[0]}, Key: ${value[1]}`);
    }

    
}

// pianist([ '3',
//         'Fur Elise|Beethoven|A Minor',
//         'Moonlight Sonata|Beethoven|C# Minor',
//         'Clair de Lune|Debussy|C# Minor',
//         'Add|Sonata No.2|Chopin|B Minor',
//         'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//         'Add|Fur Elise|Beethoven|C# Minor',
//         'Remove|Clair de Lune',
//         'ChangeKey|Moonlight Sonata|C# Major',
//         'Stop' ]);

pianist([ '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop'  ]);
