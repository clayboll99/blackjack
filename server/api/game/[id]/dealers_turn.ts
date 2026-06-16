export default defineEventHandler(async (event) => {
  const game = await Game.findOneAndUpdate(
    { id: event.context?.params?.id },
    {
      $set: { 'dealer_hand.hand.$[].flipped': false },
    },
    {
      returnDocument: 'after',
    },
  )
  let dealerScore = calculateScore(game?.dealer_hand.hand)

  while (dealerScore < 17) {
    const gamePlaceholder = await Game.findByIdAndUpdate(
      game._id,
      {
        $push: {
          'dealer_hand.hand': game.deck.pop(),
        },
      },
      {
        returnDocument: 'after',
      },
    )
    dealerScore = calculateScore(gamePlaceholder.dealer_hand.hand)
  }

  const finalGamePlaceholder = await Game.findById(game._id)
  finalGamePlaceholder?.set('dealer_hand.score', dealerScore)

  let maxHand = {
    score: 0,
  }
  for (const hand of finalGamePlaceholder?.hands ?? []) {
    if (hand.score <= 21) {
      if (hand.score > maxHand.score) {
        maxHand = hand
      }
    }
  }

  // eslint-disable-next-line no-useless-assignment
  let winner = ''
  if (finalGamePlaceholder.dealer_hand.score <= 21) {
    if (maxHand.score > finalGamePlaceholder?.dealer_hand.score) {
      winner = maxHand.player.email
    } else if (maxHand.score === finalGamePlaceholder?.dealer_hand.score) {
      winner = 'tie'
    } else {
      winner = 'dealer'
    }
  } else {
    if (maxHand.score === 0) {
      winner = 'none'
    } else {
      winner = maxHand.player.email
    }
  }

  finalGamePlaceholder.winner = winner
  finalGamePlaceholder.status = 'finished'
  finalGamePlaceholder.save()

  return finalGamePlaceholder
})
