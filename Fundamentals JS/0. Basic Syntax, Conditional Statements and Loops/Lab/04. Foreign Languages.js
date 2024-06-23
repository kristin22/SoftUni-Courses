function foreignLanguage(input) {
    let language = input;
    switch(language) {
        case 'USA':
        case 'England':
            console.log(`English`);
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            console.log(`Spanish`);
            break;
        default:
            console.log(`unknown`);
            break;
    }
}

foreignLanguage("USA");
foreignLanguage("Germany");