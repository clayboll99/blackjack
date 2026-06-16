import { Hand } from '#server/models/hand.schema'
import { calculateScore } from '#shared/utils/cardUtils'

export default defineEventHandler(async (event) => {
  const game = await Game.findOne({ id: event.context?.params?.id })
  if (game) {
    const hands = game.hands
    for (let i = 0; i < hands.length; i += 1) {
      const newCard = game.deck.pop()
      if (newCard) {
        const newHand = await Hand.findByIdAndUpdate(
          hands.at(i)._id,
          {
            $push: {
              hand: newCard,
            },
          },
          {
            returnDocument: 'after',
          },
        ).exec()
        const score = calculateScore(newHand.hand)
        const finalHand = await Hand.findByIdAndUpdate(
          hands.at(i)._id,
          {
            score: score,
          },
          {
            returnDocument: 'after',
          },
        )
        await Game.updateOne(
          { id: game.id },
          {
            $set: {
              'hands.$[elem]': finalHand,
            },
          },
          {
            arrayFilters: [
              {
                'elem._id': finalHand?._id,
              },
            ],
          },
        )
      }
    }

    await game.save()

    const newGame = await Game.findOne({ id: event.context?.params?.id })

    let winner = ''
    let status = 'playing'
    for (const hand of newGame.hands) {
      console.log(hand)
      if (hand.score > 21) {
        winner = 'dealer'
        status = 'finished'
      } else if (hand.score === 21) {
        winner = hand.player.email
        status = 'finished'
      }
    }

    newGame.set('winner',winner)
    newGame.set('status', status)

    newGame.save()

    return {
      id: newGame?.id,
      hands: newGame?.hands,
      players: newGame?.players,
      dealer_hand: newGame?.dealer_hand,
      winner: newGame?.winner
    }
  }
  return null
})
