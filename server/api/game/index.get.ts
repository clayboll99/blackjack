import type { Query } from 'mongoose'

export default defineEventHandler(async (event) => {
  const user = await getUserSession(event)
  const game = await Game.findOne({ status: 'playing' })
    .elemMatch('players', function (elem: Query<unknown, unknown>) {
      elem.where({ email: user.user?.email })
    })
    .exec()
  return game
    ? {
        id: game.id,
        players: game.players,
        hands: game.hands,
        dealer_hand: game.dealer_hand,
        winner: game.winner,
      }
    : null
})
