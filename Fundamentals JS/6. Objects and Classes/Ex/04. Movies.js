function moviesToJSON(arr) {
    let moviesArr = [];

    class Movies {
        constructor (name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }

    let movie = {
        name:   null,
        director: null,
        date:   null
    };

    for (let i = 0; i < arr.length; i++) {

        let currCmnd = arr[i].split(" ");
        let movieName = "";

        if (currCmnd[0] === "addMovie") {
            currCmnd.shift();
            movieName = currCmnd.join(" ");
            let index = moviesArr.findIndex (item => item.name === movieName);
            if (index > -1) { continue; }

            let movieObj = new Movies(movieName, null, null);
            moviesArr.push(movieObj);

        } else {
            let indexDirecor = currCmnd.indexOf("directedBy");    
            let indexDate = currCmnd.indexOf("onDate");         

            if (indexDirecor > -1) {
                movieName = currCmnd.splice(0, indexDirecor).join(" ");
                    currCmnd.shift();
                let director = currCmnd.join(" ");
                let index = moviesArr.findIndex (item => item.name === movieName);

                if (index > -1) {
                    let movieObj = moviesArr[index];
                    movieObj.director = director;
                    moviesArr[index] = movieObj;
                }
            } else if (indexDate > -1) {
                movieName = currCmnd.splice(0, indexDate).join(" ");
                currCmnd.shift();
                let date = String(currCmnd[0]);
                let index = moviesArr.findIndex (item => item.name === movieName);

                if (index > -1) {
                    let movieObj = moviesArr[index];
                    movieObj.date = date;
                    moviesArr[index] = movieObj;
                } 
            }
        }
    }

    for (obj of moviesArr) {
        if (obj.date !== null && obj.director !== null) {  
                console.log(JSON.stringify(obj));
        }
        
    }

}

moviesToJSON([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);

    moviesToJSON([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);