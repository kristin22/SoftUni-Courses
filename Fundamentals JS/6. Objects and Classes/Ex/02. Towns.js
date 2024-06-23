function townToJSON(towns) {

    for (let town of towns) { 
       
        // Multiple assignment
        let [name, lat, lng] = town.split(" | "); 

        let obj = {town: name, latitude: Number(lat).toFixed(2), longitude: Number(lng).toFixed(2)};
        console.log(obj);
    }
}

townToJSON([ 'Sofia | 42.696552 | 23.32601',
        'Beijing | 39.913818 | 116.363625'
          ]);

townToJSON([ 'Plovdiv | 136.45 | 812.575'
          ]);