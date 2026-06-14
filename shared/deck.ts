export default class Deck {
    constructor() {
        this.cards = []
        const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
        const values = ['A', '2','3','4','5','6','7','8','9','10','J','Q','K']

        for (let suit of suits) {
            for (let value of values) {
                this.cards.push({suit, value})
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random()*(i+1))
            let temp = this.cards[i]
            this.cards[i] = this.cards[j]
            this.cards[j] = temp
        }
    }
}