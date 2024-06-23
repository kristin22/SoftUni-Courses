function phoneBook(entries) {
    const phoneBook = {};

    for(const entry of entries) {
        let currEntry = entry.split(" ");
        
        let name = currEntry[0];
        let number = currEntry[1];

        // adding the new entry => name and phone
        phoneBook[name] = number;
    }
    
    for(const name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }

}

phoneBook(['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344']);

phoneBook(['George 0552554',
        'Peter 087587',
        'George 0453112',
        'Bill 0845344']);