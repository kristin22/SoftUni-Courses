function makeDictionary(input) {
    let dictionary = {};


    input.forEach(line => {
        let obj = JSON.parse(line);
        // Object.assign adds the curr word and definition -> if the word already exists, it overwrites the definition;
        dictionary = Object.assign(dictionary, obj);
    })

    // we store the words in sortedKeys array and take out the definitions from the object!!!

    let sortedKeys = Object.keys(dictionary);
    sortedKeys.sort((a, b) => a.localeCompare(b) );

    for (let term of sortedKeys) {
        let definition = dictionary[term];  // we take out the definition from the object and the term from the array
        console.log(`Term: ${term} => Definition: ${definition}`);
    }

}

makeDictionary([ '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
                 '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
                 '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
                 '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
                 '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}' ]);

makeDictionary([ '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
                 '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
                 '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
                 '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
                 '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ' ]);


/* Sorting object by property name:

function sortByKey(obj) {
    let keys = Object.keys(obj);
    keys.sort();

    let sorted = {};
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        sorted[key] = obj[key];
    }
    return sorted;
}
*/


/* Alternative solution:

function dictionary(input){
    let dict = {};
    for (let element of input){
        let obj = JSON.parse(element);
        dict = Object.assign(dict, obj);        
    } 
        
    let sortedKeys = Object.keys(dict);
    sortedKeys.sort((a, b) => a.localeCompare(b));   
     
    for (let term of sortedKeys) {
        let definition = dict[term];             
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

*/