function requiredReading(pagesTotal, pagesPerHour, daysTotal) {
    let result = (pagesTotal / pagesPerHour) / daysTotal;
    console.log(result);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);