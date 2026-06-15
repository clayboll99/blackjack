import Deck from '#shared/deck'
import { Hand } from '#server/models/hand.schema'
import { User } from '#server/models/user.schema'
import { calculateScore } from '#shared/utils/cardUtils'

export default defineEventHandler(async (event) => {
  const player = await getUserSession(event)
  if (!player.user) {
    return null
  }

  const deck = new Deck()
  deck.shuffle()

  const currentHand = new Hand()
  const user = await User.findOneAndUpdate(
    { email: player.user?.email },
    player.user,
    {
      upsert: true,
      returnDocument: 'after',
      runValidators: true,
    },
  )
  const hand = [deck.cards.pop(), deck.cards.pop()]
  currentHand.hand = hand
  currentHand.player = user
  currentHand.score = calculateScore(hand)
  currentHand.save()

  const game = new Game({
    id: crypto.randomUUID(),
    players: [player.user],
    deck: deck.cards,
    hands: [currentHand],
    status: 'playing',
  })

  game.save()

  return {
    id: game.id,
    players: game.players,
    hands: game.hands,
  }
})
