function forecast(input) {  
    let weather = input;

    if(weather == "sunny") {
        console.log("It's warm outside!");
    } else {
        console.log("It's cold outside!");
    } 
}

forecast("sunny");
forecast("cloudy");
forecast("snowy");