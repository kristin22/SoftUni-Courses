function cardFactory(face, suit) {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = { S: '\u2660',   H: '\u2665',  D: '\u2666', C: '\u2663' };

    if (!validFaces.includes(face)) throw new Error('Error')

    const card = { face, suit, toString() {
            return this.face + validSuits[this.suit]
        }
    }

    return card
}


// Input:

console.log(cardFactory('A', 'S').toString())
console.log(cardFactory('10', 'H').toString())
// console.log(cardFactory('1', 'C').toString())

console.log('--- --- --- --- ---');


// Example usage:
try {
    const card = cardFactory('A', 'S')
    console.log(card.toString())  // AS

    card.face = '10'
    card.suit = 'H'
    console.log(card.toString())    // KH

} catch (error) {
    console.log(error.message)
}