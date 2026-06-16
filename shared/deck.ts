export default class Deck {
  constructor() {
    this.cards = []
    const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
    const values = [
      'A',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
    ]

    for (const suit of suits) {
      for (const value of values) {
        this.cards.push({ suit, value })
      }
    }
  }

  shuffle() {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = this.cards[i]
      this.cards[i] = this.cards[j]
      this.cards[j] = temp
    }
  }

  static getCardValue(card: { suit: string; value: string }) {
    switch (card.value) {
      case 'A':
        return 11
      case '2':
        return 2
      case '3':
        return 3
      case '4':
        return 4
      case '5':
        return 5
      case '6':
        return 6
      case '7':
        return 7
      case '8':
        return 8
      case '9':
        return 9
      case '10':
        return 10
      case 'J':
        return 10
      case 'Q':
        return 10
      case 'K':
        return 10
      default:
        return 0
    }
  }
}
