import Deck from '#shared/deck'

export function calculateScore(cards: [{ suit: string; value: string, flipped?: boolean }]) {
  let score = 0
  for (let i = 0; i < cards.length; i++) {
    if(!cards.at(i)?.flipped) {
      const value = Deck.getCardValue(cards?.at(i))
      if (value === 11) {
        if (score + value > 21) {
          score += 1
        } else {
          score += 11
        }
      } else {
        score += value
      }
    }
  }
  return score
}
